import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HotDeals from './components/HotDeals'
import AboutUs from './components/AboutUs'
import Sidebar from './components/Sidebar'
import Newsletter from './components/Newsletter'

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className='min-h-screen relative  w-full '>
      
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} />
      <section id="home">
      <HeroSection />
      </section>
      <HotDeals />
      <section id="about">
      <AboutUs/>
      </section>
      <Newsletter/>
     
    </div>
  )
}

export default App