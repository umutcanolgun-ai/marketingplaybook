'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sections } from '@/data/playbook'

export default function Sidebar() {
  const pathname = usePathname()
  const currentId = pathname === '/' ? sections[0].id : (pathname.split('/').filter(Boolean).pop() || sections[0].id)
  const [openSection, setOpenSection] = useState<string | null>(
    sections.find(s => s.id === currentId || s.subsections.some(ss => ss.id === currentId))?.id || sections[0].id
  )
  const [mobileOpen, setMobileOpen] = useState(false)

  const getHref = (id: string) => id === sections[0].id ? '/' : `/section/${id}/`

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setMobileOpen(true)} aria-label="Menü">☰</button>
      <div className={`sidebar-overlay ${mobileOpen ? 'visible' : ''}`} onClick={() => setMobileOpen(false)} />
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-mark">Z</div>
            <div>
              <div className="sidebar-brand-text">Zeela Ventures</div>
              <div className="sidebar-brand-sub">Marketing Playbook</div>
            </div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Bölümler</div>
          {sections.map((section) => {
            const isActive = section.id === currentId || section.subsections.some(ss => ss.id === currentId)
            const isOpen = openSection === section.id
            return (
              <div key={section.id} className="nav-item">
                <Link
                  href={getHref(section.id)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => { setOpenSection(isOpen ? null : section.id); setMobileOpen(false) }}
                >
                  <span className="nav-num">{section.num}</span>
                  <span className="nav-label">{section.title}</span>
                </Link>
                <div className={`nav-subsections ${isOpen ? 'open' : ''}`}>
                  {section.subsections.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/section/${sub.id}/`}
                      className={`nav-sub-link ${sub.id === currentId ? 'active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
