import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LoginPage from '../components/LoginPage'

function Login() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
        <Nav />
        <LoginPage />
        <Footer />
    </div>
  )
}

export default Login