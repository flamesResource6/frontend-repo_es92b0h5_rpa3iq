import { useState } from 'react'

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    datetime: '',
    location: '',
    message: '',
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })

    try {
      const res = await fetch(`${backend}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ state: 'success', message: 'Thanks! We will contact you shortly.' })
      setForm({ name: '', email: '', phone: '', service: '', datetime: '', location: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="appointment" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Do You Need a Government-Funded Home Upgrade?</h2>
            <p className="text-slate-600 mt-3">Book your free home survey today and see if you qualify for ECO4 or GBIS funding.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-slate-900 font-semibold">Every day from</div>
                <div className="text-slate-600">9:00 — 6:00</div>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">Email us for enquiries</div>
                <a href="mailto:info@pricelessenergy.co.uk" className="text-emerald-700">info@pricelessenergy.co.uk</a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email*</label>
                <input type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Phone Number</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Service</label>
                <select value={form.service} onChange={e=>setForm({...form, service:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Select a service</option>
                  {['Loft Insulation','Internal Wall Insulation','Room in Roof Insulation','Boiler Replacement','Plumbing Services','Emergency Plumbing'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Date & Time</label>
                <input type="datetime-local" value={form.datetime} onChange={e=>setForm({...form, datetime:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Location</label>
                <input value={form.location} onChange={e=>setForm({...form, location:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Message*</label>
              <textarea required rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>

            <button disabled={status.state==='loading'} className="w-full rounded-md bg-emerald-600 text-white py-3 font-semibold hover:bg-emerald-700 disabled:opacity-60">
              {status.state === 'loading' ? 'Submitting...' : 'Confirm appointment'}
            </button>

            {status.state === 'success' && (
              <p className="text-emerald-700 text-sm">{status.message}</p>
            )}
            {status.state === 'error' && (
              <p className="text-red-600 text-sm">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
