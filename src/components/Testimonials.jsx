export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Priceless Energy made the whole process simple. From the free survey to the loft insulation install, everything was smooth.',
      name: 'Sarah M.',
      city: 'Glasgow'
    },
    {
      quote: 'My boiler was replaced through the ECO4 scheme. The team explained everything clearly and finished the job on time. Highly recommend.',
      name: 'Linda T.',
      city: 'Edinburgh'
    },
    {
      quote: 'Room in roof insulation transformed our upstairs space. The installers were tidy, friendly, and very professional.',
      name: 'James R.',
      city: 'Aberdeen'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-violet-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Our Clients Say About Us.</h2>
          <p className="text-slate-600 mt-3">We’re proud to have helped households across Scotland access ECO4 and GBIS grants for essential upgrades.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative rounded-xl border border-slate-200 p-6 shadow-sm bg-white/90">
              <div className="absolute inset-0 -z-10 rounded-xl opacity-20 bg-[radial-gradient(60%_60%_at_90%_-10%,#a78bfa,transparent_60%),radial-gradient(40%_40%_at_10%_110%,#38bdf8,transparent_60%)]" />
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600 font-medium">{t.name}<span className="text-slate-400"> — {t.city}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
