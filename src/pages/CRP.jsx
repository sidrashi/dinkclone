import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CRPPage from '../components/CRPPage'

function CRP() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Nav />
      <CRPPage />
      <Footer />
    </div>
  )
}

export default CRP