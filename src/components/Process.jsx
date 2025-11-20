export default function Process() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Consultations With Our Experts',
      text: 'Book a free home survey to check your eligibility for government funding.'
    },
    {
      step: 'Step 2',
      title: 'Grant Approval & Service Plan',
      text: 'We guide you through the grant process and plan the right upgrades for your home.'
    },
    {
      step: 'Step 3',
      title: 'Finishing Your Project On Time',
      text: 'Our certified team delivers government funded installations quickly and efficiently.'
    },
  ]

  return (
    <section id="process" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Offer Professional Insulation, Heating & Plumbing Services</h2>
          <p className="text-slate-600 mt-3">From your first survey to final installation, our team ensures every step is handled with care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="text-emerald-700 font-semibold">{s.step}</div>
              <div className="text-slate-900 font-semibold mt-1">{s.title}</div>
              <p className="text-slate-600 text-sm mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
