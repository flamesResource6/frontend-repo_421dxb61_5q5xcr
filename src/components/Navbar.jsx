import { useState } from 'react'
import { Menu, X, PhoneCall, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Einsatz & Dienste', href: '#services' },
    { label: 'Mitmachen', href: '#volunteer' },
    { label: 'Sicherheit', href: '#safety' },
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-red-600 to-amber-500 shadow-inner ring-1 ring-black/10 flex items-center justify-center text-white font-bold">112</div>
            <div className="leading-tight">
              <p className="font-extrabold text-gray-900 tracking-tight">Freiw. Feuerwehr</p>
              <p className="text-xs text-gray-600">Meckenheim (Pfalz)</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-red-700 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:112" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-red-700 transition-colors">
              <PhoneCall className="h-4 w-4" /> Notruf 112
            </a>
            <a href="https://maps.app.goo.gl/ZQ1eY9QwqgQe" target="_blank" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              <MapPin className="h-4 w-4" /> Anfahrt
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border text-gray-700 border-gray-300 hover:bg-gray-50">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="tel:112" className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-red-700">
                <PhoneCall className="h-4 w-4" /> Notruf 112
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
