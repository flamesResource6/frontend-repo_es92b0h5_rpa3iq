export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(16,185,129,0.25),rgba(16,185,129,0)_50%),radial-gradient(40%_40%_at_100%_10%,rgba(14,165,233,0.25),rgba(14,165,233,0)_55%),radial-gradient(35%_35%_at_50%_100%,rgba(139,92,246,0.18),rgba(139,92,246,0)_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50/80 px-3 py-1 rounded-full text-sm mb-4 shadow-sm">Priceless Energy LTD</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Make Your Home Warmer and More Efficient
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Affordable insulation, boiler replacement, and plumbing services across Scotland. Grants available through ECO4 and GBIS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-sky-600 px-5 py-3 text-white font-medium shadow hover:shadow-md transition-all">Discover More</a>
              <a href="#appointment" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-emerald-700 font-medium border border-emerald-200 hover:border-emerald-400 transition-colors">Get Started</a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600">
              <div>
                <div className="text-slate-900 font-semibold">Email Us</div>
                <a href="mailto:info@pricelessenergy.co.uk" className="text-emerald-700">info@pricelessenergy.co.uk</a>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">Get a Quote</div>
                <a href="#appointment" className="text-emerald-700">Request a home survey</a>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">We are open</div>
                <div>9:00 AM – 6:00 PM</div>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">Location</div>
                <div>Serving across Scotland</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-600 via-sky-500 to-violet-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-xl bg-white/90 backdrop-blur grid grid-cols-2 gap-2 p-2">
                {["Loft Insulation","Room in Roof","Boiler Upgrade","Plumbing","Emergency","Internal Wall"].map((t,i)=> (
                  <div key={i} className="rounded-lg border border-slate-200 p-4 flex flex-col justify-between bg-white/70">
                    <div className="font-medium text-slate-800">{t}</div>
                    <div className="text-xs text-slate-500">ECO4 & GBIS eligible</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
