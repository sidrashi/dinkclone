import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileVerification from '../components/MobileVerification'


function Otp() {

  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <MobileVerification />
      <Footer />
    </div>
  )
}

export default Otp