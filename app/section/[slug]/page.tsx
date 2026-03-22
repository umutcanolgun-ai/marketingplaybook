import { sections } from '@/data/playbook'
import ContentRenderer from '@/components/ContentRenderer'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs: { slug: string }[] = []
  sections.forEach(s => {
    slugs.push({ slug: s.id })
    s.subsections.forEach(ss => slugs.push({ slug: ss.id }))
  })
  return slugs
}

export default function SectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const section = sections.find(s => s.id === slug)
  if (section) {
    return (
      <>
        <div className="topbar">
          <div className="topbar-breadcrumb">
            <span>Playbook</span>
            <span className="topbar-breadcrumb-sep">›</span>
            <span className="topbar-breadcrumb-current">Bölüm {section.num} — {section.title}</span>
          </div>
          <span className="topbar-badge">Gizli · v1.0</span>
        </div>
        <div className="content-area">
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="section-num-badge">Bölüm {section.num}</span>
            </div>
            <h1 className="section-title">{section.title}</h1>
            <p className="section-subtitle">{section.subtitle}</p>
          </div>
          {section.subsections.map(sub => (
            <div key={sub.id} className="subsection" id={sub.id}>
              <h2 className="subsection-title">{sub.title}</h2>
              <ContentRenderer content={sub.content} />
            </div>
          ))}
        </div>
      </>
    )
  }

  for (const sec of sections) {
    const sub = sec.subsections.find(ss => ss.id === slug)
    if (sub) {
      return (
        <>
          <div className="topbar">
            <div className="topbar-breadcrumb">
              <span>Bölüm {sec.num}</span>
              <span className="topbar-breadcrumb-sep">›</span>
              <span className="topbar-breadcrumb-current">{sub.title}</span>
            </div>
            <span className="topbar-badge">Gizli · v1.0</span>
          </div>
          <div className="content-area">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="section-num-badge">Bölüm {sec.num}</span>
                <span className="section-num-text">{sec.title}</span>
              </div>
              <h1 className="section-title">{sub.title}</h1>
            </div>
            <div className="subsection" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
              <ContentRenderer content={sub.content} />
            </div>
          </div>
        </>
      )
    }
  }

  notFound()
}
