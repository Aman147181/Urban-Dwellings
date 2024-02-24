import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HotDeals from './components/HotDeals'
import AboutUs from './components/AboutUs'
import Sidebar from './components/Sidebar'
import Newsletter from './components/Newsletter'
import Testimonial from './components/Testimonial'

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className='min-h-screen relative  w-full '>
      
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <section id="home">
      <HeroSection />
      </section>
      <HotDeals />
      <section id="about">
      <AboutUs/>
      </section>
      <Testimonial/>
      <Newsletter/>
     
    </div>
  )
}

export default App