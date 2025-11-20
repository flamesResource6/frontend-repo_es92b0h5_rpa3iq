import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import AppointmentForm from './components/AppointmentForm'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_60%_at_10%_10%,#ecfeff_0%,white_40%),radial-gradient(40%_40%_at_90%_0%,#f5f3ff_0%,white_50%)] text-slate-800">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <AppointmentForm />
      </main>
      <footer id="contact" className="border-t border-slate-200 py-10 bg-gradient-to-r from-emerald-50 via-sky-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-600 to-sky-600 text-white flex items-center justify-center font-bold">PE</div>
            <div className="font-semibold text-slate-900">Priceless Energy LTD</div>
          </div>
          <p className="text-sm text-slate-700">We provide ECO4 and GBIS funded insulation, boiler replacement, and plumbing services across Scotland.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
