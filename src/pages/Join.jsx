import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'

function Join() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <SignUp />
      <Footer />
    </div>
  )
}

export default Join