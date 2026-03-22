'use client'

interface Props { content: string }

function parseContent(content: string) {
  // Split into paragraphs (double newline separated)
  const paragraphs = content.split(/\n\n+/).map(p => p.trim()).filter(Boolean)
  return paragraphs
}

function detectType(para: string): string {
  if (para === 'TANIM & GENEL BAKIŞ' || (para.match(/^[A-ZÇĞİÖŞÜ\s&\/\-\(\)0-9]+$/) && para.length < 80 && para.length > 3)) return 'tag'
  if (para.includes('→ B2B') || para.includes('→ B2C')) return 'b2b_b2c_row'
  if (para.startsWith('Sorumlu Rol') && para.includes('Zaman')) return 'coo_header'
  if (para.match(/^(Marketing Lead|CEO|COO|Sales Lead|Growth|Design|Tüm)/i) && para.split('\n').length <= 3) return 'coo_body'
  if (para.includes('✗') && para.includes('\n')) return 'errors'
  if (para.startsWith('✗')) return 'error_item'
  if (para.startsWith('✔') || para.match(/^✔/m)) return 'checklist'
  if (para.match(/^\d+\.\s+/m)) return 'numbered'
  if (para.match(/^-\s+/m) || para.match(/^•\s+/m)) return 'bullets'
  if (para.startsWith('📌 B2B') || para.startsWith('📌 B2C')) return 'example_header'
  if (para === 'Kaçınılması Gereken Hatalar') return 'errors_header'
  if (para === 'Action Steps') return 'h3'
  if (para === 'Checklist') return 'h3'
  if (para.match(/^(Neden|Nasıl|Tool &|Temel|Kampanya|Lifecycle|Kriz|OKR|Review|Playbook|Raporlama|Attribution|A\/B|North Star|UTM|PIE|Lansman|İçerik|Dört|Beş|Ortaklık|Ekosistem|Büyüme|Referral|Viral|Müşteri Sağlık|Sağlıklı E-posta|Metrik|Kriz İletişim|StoryBrand|Repurposing|Yeni Pazar|Ölçekleme)/)) return 'h3'
  return 'p'
}

export default function ContentRenderer({ content }: Props) {
  const paragraphs = parseContent(content)
  const elements: React.ReactNode[] = []
  
  let i = 0
  let pendingErrors: string[] = []
  let b2bText = ''
  let b2cText = ''
  let inB2B = false, inB2C = false
  let inErrors = false
  let errorsPending: string[] = []
  let b2bExample = ''
  let b2cExample = ''
  let cooRole = '', cooTime = '', cooKriter = ''
  let cooState = 0 // 0=none, 1=header seen, 2=body

  const flushB2B = () => {
    if (b2bText || b2cText) {
      elements.push(
        <div key={`b2b-${i}`} className="block b2b-b2c">
          <div className="b2b-b2c-grid">
            <div className="b2b-header">→ B2B</div>
            <div className="b2c-header">→ B2C</div>
          </div>
          <div className="b2b-b2c-grid">
            <div className="b2b-col">{b2bText.trim()}</div>
            <div className="b2c-col">{b2cText.trim()}</div>
          </div>
        </div>
      )
      b2bText = ''; b2cText = ''; inB2B = false; inB2C = false
    }
  }

  const flushErrors = () => {
    if (errorsPending.length > 0) {
      elements.push(
        <div key={`err-${i}`} className="block errors-block">
          <div className="errors-header">Kaçınılması Gereken Hatalar</div>
          {errorsPending.map((e, idx) => (
            <div key={idx} className="error-item">{e.replace(/^✗\s*/, '')}</div>
          ))}
          {(b2bExample || b2cExample) && (
            <div className="examples-grid">
              <div>
                <div className="example-b2b-header">📌 B2B Örnek</div>
                <div className="example-b2b-body">{b2bExample}</div>
              </div>
              <div>
                <div className="example-b2c-header">📌 B2C Örnek</div>
                <div className="example-b2c-body">{b2cExample}</div>
              </div>
            </div>
          )}
        </div>
      )
      errorsPending = []; b2bExample = ''; b2cExample = ''; inErrors = false
    }
  }

  const flushCOO = () => {
    if (cooRole) {
      elements.push(
        <div key={`coo-${i}`} className="block coo-block">
          <div className="coo-header">Sorumlu Rol</div>
          <div className="coo-header">Zaman Çerçevesi</div>
          <div className="coo-header">Başarı Kriteri</div>
          <div className="coo-body">{cooRole}</div>
          <div className="coo-body">{cooTime}</div>
          <div className="coo-body" style={{borderRight:'none'}}>{cooKriter}</div>
        </div>
      )
      cooRole = ''; cooTime = ''; cooKriter = ''; cooState = 0
    }
  }

  for (i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i]
    const lines = para.split('\n').map(l => l.trim()).filter(Boolean)

    // Skip pure separator lines
    if (para.match(/^[-─\s]+$/) || para.match(/^\+[-+]+\+$/) || !para.trim()) continue

    // COO detection: "Sorumlu Rol  Zaman Çerçevesi  Başarı Kriteri"
    if (para.includes('Sorumlu Rol') && para.includes('Zaman Çerçevesi') && para.includes('Başarı Kriteri')) {
      flushB2B(); flushErrors()
      cooState = 1; continue
    }
    if (cooState === 1) {
      // Next para is the values
      const parts = para.split(/\s{2,}|\t/)
      cooRole = parts[0]?.trim() || para
      cooTime = parts[1]?.trim() || ''
      cooKriter = parts[2]?.trim() || ''
      // If they're on separate lines
      if (lines.length >= 3 && !cooTime) {
        cooRole = lines[0]; cooTime = lines[1]; cooKriter = lines[2]
      }
      flushCOO(); continue
    }

    // B2B/B2C detection
    if (para.includes('→ B2B') && para.includes('→ B2C')) {
      flushErrors()
      // Try to split within same paragraph
      const b2bMatch = para.match(/→ B2B\s*([\s\S]*?)(?:→ B2C|$)/)
      const b2cMatch = para.match(/→ B2C\s*([\s\S]*)/)
      if (b2bMatch && b2cMatch) {
        b2bText = b2bMatch[1].trim()
        b2cText = b2cMatch[1].trim()
        flushB2B(); continue
      }
    }
    if (para.startsWith('→ B2B')) { flushErrors(); inB2B = true; inB2C = false; b2bText = para.replace('→ B2B', '').trim(); continue }
    if (para.startsWith('→ B2C')) { inB2C = true; inB2B = false; b2cText = para.replace('→ B2C', '').trim(); continue }
    if (inB2B && !para.startsWith('→') && !para.includes('Sorumlu Rol') && !para.startsWith('✗') && !para.startsWith('✔')) {
      b2bText += ' ' + para; continue
    }
    if (inB2C && !para.startsWith('→') && !para.includes('Sorumlu Rol') && !para.startsWith('✗') && !para.startsWith('✔')) {
      b2cText += ' ' + para; continue
    }
    if (inB2B || inB2C) { flushB2B() }

    // Errors block
    if (para === 'Kaçınılması Gereken Hatalar') { flushB2B(); inErrors = true; continue }
    if (inErrors && para.startsWith('✗')) { errorsPending.push(para); continue }
    if (inErrors && para.startsWith('📌 B2B')) { b2bExample = para.replace('📌 B2B Örnek', '').trim(); continue }
    if (inErrors && para.startsWith('📌 B2C')) { b2cExample = para.replace('📌 B2C Örnek', '').trim(); continue }
    if (inErrors && !para.startsWith('✗') && !para.startsWith('📌') && errorsPending.length > 0) {
      // Could be the example text
      if (!b2bExample) { b2bExample = para; continue }
      if (!b2cExample) { b2cExample = para; continue }
      flushErrors()
    }

    // Regular content
    flushB2B()

    // TAG (all caps labels)
    if (para === 'TANIM & GENEL BAKIŞ' || (para.match(/^[A-ZÇĞİÖŞÜ\s&\/\-\(\)0-9]+$/) && para.length < 60 && para.length > 3 && !para.match(/^\d/))) {
      elements.push(<div key={i} className="block-tag">{para}</div>)
      continue
    }

    // H3 headings
    if (['Action Steps', 'Checklist', 'Tool & Kaynaklar', 'Tool & Kaynak'].includes(para) ||
        para.match(/^(Neden|Nasıl|Temel|Kampanya|Lifecycle|OKR|Review|StoryBrand|Repurposing|Kriz İletişim|Müşteri Sağlık|Sağlıklı|UTM|PIE|İçerik Takvim|Dağıtım Checklist|Anahtar Kelime|Attribution Model|Metrik Hiyerarşi|Raporlama Kadans|Büyüme Aşama|Lansman Takvim|Ortak Değer|Ekosistem|Kriz Yönetim|Yeni Pazar|Ortaklık Türler|Partner Türler|Growth Loop|Referral Program|CRO|Lead Scoring|Kreatif|Viral|Playbook Güncelle|Review Döngüsü|Çeyreklik|OKR Tasarım)/)) {
      elements.push(<h3 key={i} className="block-h3">{para.replace(/:$/, '')}</h3>)
      continue
    }

    // Italic/quote
    if ((para.startsWith('"') || para.startsWith("'")) && para.length < 300) {
      elements.push(<p key={i} className="block-em">{para}</p>)
      continue
    }

    // Checklist ✔
    if (para.match(/^✔/m)) {
      const items = para.split('\n').filter(l => l.trim().startsWith('✔')).map(l => l.replace(/^✔\s*/, '').trim())
      elements.push(
        <ul key={i} className="block checklist">
          {items.map((item, idx) => <li key={idx} className="check-item">{item}</li>)}
        </ul>
      )
      continue
    }

    // Single checklist item
    if (para.startsWith('✔')) {
      elements.push(<ul key={i} className="block checklist"><li className="check-item">{para.replace(/^✔\s*/, '')}</li></ul>)
      continue
    }

    // Numbered list
    if (para.match(/^\d+\.\s+/m)) {
      const items = para.split('\n').filter(l => l.trim().match(/^\d+\./)).map(l => l.replace(/^\d+\.\s*/, '').trim())
      if (items.length > 0) {
        elements.push(
          <ol key={i} className="block action-steps">
            {items.map((item, idx) => <li key={idx} className="action-step">{item}</li>)}
          </ol>
        )
        continue
      }
    }

    // Bullet list
    if (para.match(/^[-•]\s+/m)) {
      const items = para.split('\n').filter(l => l.trim().match(/^[-•]/)).map(l => l.replace(/^[-•]\s*/, '').trim())
      if (items.length > 0) {
        elements.push(
          <ul key={i} className="block checklist">
            {items.map((item, idx) => <li key={idx} className="check-item" style={{paddingLeft: 0}}>{item}</li>)}
          </ul>
        )
        continue
      }
    }

    // Callout / note box
    if (para.startsWith('→ ') && !para.includes('B2B') && !para.includes('B2C')) {
      elements.push(
        <div key={i} className="block callout">
          <div className="callout-label">{para.split('\n')[0].replace(/^→\s*/, '')}</div>
          {para.split('\n').slice(1).map((l, idx) => l.trim() && <div key={idx} className="callout-text">{l.trim()}</div>)}
        </div>
      )
      continue
    }

    // Skip noise
    if (para.match(/^📌/) || para === 'Kaçınılması Gereken Hatalar') continue

    // Regular paragraph
    if (para.length > 5) {
      elements.push(<p key={i} className="block block-p">{para.replace(/\n/g, ' ')}</p>)
    }
  }

  flushB2B()
  flushErrors()
  flushCOO()

  return <>{elements}</>
}
