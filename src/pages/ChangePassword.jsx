import React from 'react'
import Nav from '../components/Nav'
import ChangePasswordPage from '../components/ChangePasswordPage'
import Footer from '../components/Footer'

function ChangePassword() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <ChangePasswordPage />
      <Footer />
    </div>
  )
}

export default ChangePassword