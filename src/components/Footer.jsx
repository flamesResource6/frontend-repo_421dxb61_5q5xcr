import { Facebook, Instagram, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-red-600 to-amber-500 shadow-inner ring-1 ring-black/10 flex items-center justify-center text-white font-bold">112</div>
              <div className="leading-tight">
                <p className="font-extrabold text-white tracking-tight">Freiw. Feuerwehr</p>
                <p className="text-xs text-gray-400">Meckenheim (Pfalz)</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Engagiert für die Sicherheit in unserer schönen Weinbaugemeinde in der Pfalz.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 67149 Meckenheim (Pfalz)</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> info@feuerwehr-meckenheim-pfalz.de</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Mitmachen</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#volunteer">Aktiv werden</a></li>
              <li><a className="hover:text-white" href="#safety">Sicherheitstipps</a></li>
              <li><a className="hover:text-white" href="#services">Unsere Einsätze</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Folge uns</h4>
            <div className="flex items-center gap-3">
              <a className="p-2 rounded-md bg-white/5 hover:bg-white/10" href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a className="p-2 rounded-md bg-white/5 hover:bg-white/10" href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Freiwillige Feuerwehr Meckenheim (Pfalz). Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
