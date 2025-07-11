import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProfilePage from '../components/ProfilePage'

function Profile() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
        <Nav />
        <ProfilePage />
        <Footer />
    </div>
  )
}

export default Profile