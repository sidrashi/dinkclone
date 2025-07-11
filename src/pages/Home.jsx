import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import CourtServices from '../components/CourtServices'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-full min-h-screen bg-background'>
        <Nav />
        <Hero />
        <CourtServices />
        <WhyUs />
        <Footer />
    </div>
  )
}

export default Home