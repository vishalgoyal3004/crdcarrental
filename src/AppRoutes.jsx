import React from "react"
import { Routes, Route } from "react-router-dom"
import CarBookingCard from "./pages/CarRentalBooking/CarBookingCard"
import Car from "./pages/Car"
import Blog from "./pages/Blog"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CarBookingCard />} />
      <Route path="/home" element={<CarBookingCard />} />
      <Route path="/cars" element={<Car />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default AppRoutes
