import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Project from './Components/Project/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ScrollToTop from './Components/Scroll/ScrollToTop.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App;

