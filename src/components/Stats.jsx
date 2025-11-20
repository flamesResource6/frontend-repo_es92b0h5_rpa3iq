export default function Stats() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/90 p-8 rounded-2xl border border-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[conic-gradient(at_10%_20%,rgba(52,211,153,0.25),transparent_30%,rgba(56,189,248,0.25)_55%,transparent_70%,rgba(167,139,250,0.25)_90%)]" />
          <div>
            <div className="text-3xl font-extrabold text-slate-900">100+</div>
            <div className="text-slate-600">Projects done</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">2+</div>
            <div className="text-slate-600">years of experience</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">ECO4</div>
            <div className="text-slate-600">Scheme support</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">GBIS</div>
            <div className="text-slate-600">Grant guidance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
