import { ShieldAlert, Flame, Siren, Phone, Info } from 'lucide-react'

export default function Safety() {
  const tips = [
    {
      title: 'Im Notfall richtig handeln',
      points: [
        'Ruhe bewahren und Gefahrenbereich verlassen',
        'Notruf 112 wählen – Wer, Wo, Was, Wie viele, Warten',
        'Erste Hilfe leisten, wenn möglich',
      ],
      icon: Siren,
    },
    {
      title: 'Brandschutz zu Hause',
      points: [
        'Rauchmelder prüfen – mindestens einmal im Jahr',
        'Fluchtwege freihalten und Rettungsplan kennen',
        'Keine Mehrfachsteckdosen überlasten',
      ],
      icon: ShieldAlert,
    },
    {
      title: 'Feuer im Freien',
      points: [
        'Nur an ausgewiesenen Stellen grillen',
        'Wind und Trockenheit beachten – Waldbrandgefahr',
        'Nie unbeaufsichtigt lassen, ausreichend löschen',
      ],
      icon: Flame,
    },
  ]

  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-red-700">Sicherheit</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Wichtige Hinweise</h2>
          <p className="mt-3 text-gray-600">Prävention rettet Leben – unsere wichtigsten Empfehlungen für Alltag und Notfälle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map(({ title, points, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-600 to-amber-500 text-white flex items-center justify-center shadow-inner ring-1 ring-black/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Notfall? Wähle 112</h3>
              <p className="text-white/90">Der europaweite Notruf – kostenlos, auch vom Handy.</p>
            </div>
            <a href="tel:112" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 ring-1 ring-white/30">
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
