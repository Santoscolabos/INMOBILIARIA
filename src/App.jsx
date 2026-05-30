import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import Agents from './components/Agents'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <StatsBar />
        <Services />
        <Agents />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
