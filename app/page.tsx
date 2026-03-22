import { sections } from '@/data/playbook'
import ContentRenderer from '@/components/ContentRenderer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const section = sections[0]
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
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
      </main>
    </div>
  )
}
