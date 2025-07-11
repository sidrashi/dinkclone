import React from 'react'
import Nav from '../components/Nav'
import BookingHistoryPage from '../components/BookingHistoryPage'
import Footer from '../components/Footer'

function BookingHistory() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <BookingHistoryPage />
      <Footer />
    </div>
  )
}

export default BookingHistory