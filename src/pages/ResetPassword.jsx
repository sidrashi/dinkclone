import React from 'react'
import Nav from '../components/Nav'
import ResetPasswordPage from '../components/ResetPasswordPage'
import Footer from '../components/Footer'

function ResetPassword() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <ResetPasswordPage />
      <Footer />
    </div>
  )
}

export default ResetPassword