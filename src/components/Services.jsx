import { AlarmClock, Droplet, Waves, Wind, Ambulance } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Brandbekämpfung',
      desc: 'Schnelle Hilfe bei Bränden – vom Entstehungsbrand bis zum Großfeuer.',
      icon: Droplet,
    },
    {
      title: 'Technische Hilfeleistung',
      desc: 'Unterstützung bei Verkehrsunfällen, Unwetterlagen und Notlagen.',
      icon: Ambulance,
    },
    {
      title: 'Hochwasser & Pumpen',
      desc: 'Auspumpen von Kellern und Abwehrmaßnahmen bei Hochwasser.',
      icon: Waves,
    },
    {
      title: 'Atemschutz & Gefahrgut',
      desc: 'Spezialkräfte für gefährliche Stoffe und Atemschutz-Einsätze.',
      icon: Wind,
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-red-700">Unsere Aufgaben</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Einsatz & Dienste</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
            <AlarmClock className="h-4 w-4 text-red-600" /> 24/7 einsatzbereit
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-600 to-amber-500 text-white flex items-center justify-center shadow-inner ring-1 ring-black/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
