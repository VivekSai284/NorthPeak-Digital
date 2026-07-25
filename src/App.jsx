import './App.css'

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Results from './components/Results/Results';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}

export default App
