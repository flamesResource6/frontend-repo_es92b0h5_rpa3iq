export default function WhyChooseUs() {
  const items = [
    {
      title: 'PAS 2030 & TrustMark certified installers',
      text: 'Work with a fully accredited team that meets UK compliance standards.'
    },
    {
      title: 'ECO4 & GBIS grant support from start to finish',
      text: 'We guide you through eligibility checks and paperwork.'
    },
    {
      title: 'Clean, reliable and friendly service',
      text: 'Professional work with minimal disruption to your home.'
    }
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">We Help You Save Energy and Cut Bills</h2>
            <p className="text-slate-600 mb-6">At Priceless Energy, we focus on making homes warmer, more efficient, and affordable to run. From insulation to boilers and plumbing, our accredited team delivers trusted upgrades backed by government schemes.</p>
            <a href="#services" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition-colors">Read more</a>
          </div>
          <ul className="grid gap-4">
            {items.map((it, idx) => (
              <li key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="font-semibold text-slate-900">{it.title}</div>
                <div className="text-slate-600 text-sm mt-1">{it.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
