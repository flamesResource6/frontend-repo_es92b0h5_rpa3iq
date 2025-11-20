export default function Services() {
  const services = [
    {
      title: 'Loft Insulation',
      text: 'Stop heat escaping through your roof and lower your energy bills with modern loft insulation.'
    },
    {
      title: 'Internal Wall Insulation',
      text: 'Upgrade hard-to-treat walls from the inside with breathable insulation systems.'
    },
    {
      title: 'Room in Roof Insulation',
      text: 'Transform loft rooms into cosy, energy-efficient living spaces.'
    },
    {
      title: 'Boiler Replacement',
      text: 'Installations and upgrades for efficient, modern boilers with smart controls.'
    },
    {
      title: 'Plumbing Services',
      text: 'From taps to toilets, we handle all types of plumbing repairs and installations.'
    },
    {
      title: 'Emergency Plumbing',
      text: 'Fast response for leaks, burst pipes, and urgent plumbing issues.'
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Efficient and Reliable Home Energy Solutions</h2>
          <p className="text-slate-600 mt-3">Choose from our fully accredited services designed to improve comfort and cut energy costs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
              <div className="font-semibold text-slate-900">{s.title}</div>
              <p className="text-slate-600 text-sm mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
