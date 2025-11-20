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
    <div className="min-h-screen bg-white text-slate-800">
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
      <footer id="contact" className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold">PE</div>
            <div className="font-medium">Priceless Energy LTD</div>
          </div>
          <p className="text-sm text-slate-600">We provide ECO4 and GBIS funded insulation, boiler replacement, and plumbing services across Scotland.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
