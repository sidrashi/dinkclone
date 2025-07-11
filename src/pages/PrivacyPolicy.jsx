import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'

function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Nav />
      <PrivacyPolicyPage />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy