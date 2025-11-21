import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Volunteer from './components/Volunteer'
import Safety from './components/Safety'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Volunteer />
        <Safety />
      </main>
      <Footer />
    </div>
  )
}

export default App
