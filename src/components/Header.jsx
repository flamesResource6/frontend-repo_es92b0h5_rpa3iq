import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold">PE</div>
            <div className="text-slate-900 font-semibold">Priceless Energy LTD</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-emerald-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#appointment" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition-colors">Book a Survey</a>
          </nav>

          <button aria-label="Menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#appointment" className="block py-2 text-emerald-700 font-medium" onClick={() => setOpen(false)}>Book a Survey</a>
          </div>
        </div>
      )}
    </header>
  )
}
