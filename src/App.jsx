import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoFor from './components/WhoFor'
import Happening from './components/Happening'
import GameCode from './components/GameCode'
import HowItWorks from './components/HowItWorks'
import Customers from './components/Customers'
import { Stats, ReadyCTA } from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhoFor />
        <Happening />
        <GameCode />
        <HowItWorks />
        <Customers />
        <Stats />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  )
}
