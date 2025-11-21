import { Flame, Shield, HeartHandshake } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-red-100 ring-1 ring-white/20 mb-6">
            <Flame className="h-4 w-4" /> Gemeinsam für Meckenheim (Pfalz)
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(220,38,38,0.45)]">
            Retten. Löschen. Bergen. Schützen.
          </h1>
          <p className="mt-6 text-lg text-red-50 max-w-xl">
            Wir sind die Freiwillige Feuerwehr Meckenheim (Pfalz) – 24/7 für die Sicherheit unserer Gemeinde im Einsatz. Werde Teil unserer Gemeinschaft oder informiere dich über unsere Arbeit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#volunteer" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-red-700">
              <HeartHandshake className="h-4 w-4" /> Jetzt mitmachen
            </a>
            <a href="#safety" className="inline-flex items-center gap-2 rounded-md bg-white/90 text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-white">
              <Shield className="h-4 w-4" /> Sicherheitstipps
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[140%] h-40 rounded-[50%] bg-white/95 blur-2xl"></div>
    </section>
  )
}
