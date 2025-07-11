import React from 'react'
import ForgetVerification from '../components/ForgetVerification'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Verification() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <ForgetVerification />
      <Footer />
    </div>
  )
}

export default Verification