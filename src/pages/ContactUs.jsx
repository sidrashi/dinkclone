import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactUsPage from '../components/ContactUsPage'

function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Nav />
      <ContactUsPage />
      <Footer />
    </div>
  )
}

export default ContactUs