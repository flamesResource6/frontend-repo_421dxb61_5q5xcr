import { Users, Sparkles, Award, Megaphone } from 'lucide-react'

export default function Volunteer() {
  const perks = [
    { title: 'Starke Gemeinschaft', desc: 'Zusammenhalt, Teamgeist und echte Kameradschaft.', icon: Users },
    { title: 'Ausbildung inklusive', desc: 'Fundierte Schulungen und Lehrgänge – von Grundausbildung bis Spezialtechnik.', icon: Award },
    { title: 'Sinnstiftendes Engagement', desc: 'Leiste einen direkten Beitrag zur Sicherheit unserer Gemeinde.', icon: Sparkles },
    { title: 'Für alle Altersgruppen', desc: 'Jugendfeuerwehr & Quereinstieg – wir freuen uns auf dich!', icon: Megaphone },
  ]

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-red-700">Mitmachen</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Werde Teil der Feuerwehr</h2>
          <p className="mt-3 text-gray-600">Ob Einsatzabteilung, Jugendfeuerwehr oder Unterstützung im Hintergrund – bei uns gibt es vielfältige Möglichkeiten, dich einzubringen.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {perks.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-red-100 p-6 bg-white/80 backdrop-blur shadow-sm">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-600 to-amber-500 text-white flex items-center justify-center shadow-inner ring-1 ring-black/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-red-700">Unverbindlich informieren</a>
        </div>
      </div>
    </section>
  )
}
