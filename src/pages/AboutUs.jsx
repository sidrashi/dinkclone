import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AboutUsPage from '../components/AboutUsPage'

function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Nav />
      <AboutUsPage />
      <Footer />
    </div>
  )
}

export default AboutUs