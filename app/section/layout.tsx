import Sidebar from '@/components/Sidebar'

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        {children}
      </main>
    </div>
  )
}
