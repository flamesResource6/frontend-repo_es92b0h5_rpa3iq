export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.35),rgba(16,185,129,0)_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-sm mb-4">Priceless Energy LTD</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Make Your Home Warmer and More Efficient
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Affordable insulation, boiler replacement, and plumbing services across Scotland. Grants available through ECO4 and GBIS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition-colors">Discover More</a>
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
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-400 p-1 shadow-lg">
              <div className="w-full h-full rounded-xl bg-white grid grid-cols-2 gap-2 p-2">
                {["Loft Insulation","Room in Roof","Boiler Upgrade","Plumbing","Emergency","Internal Wall"].map((t,i)=> (
                  <div key={i} className="rounded-lg border border-slate-200 p-4 flex flex-col justify-between">
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
