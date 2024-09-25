import React from "react"
import { Routes, Route } from "react-router-dom"
import CarBookingCard from "./pages/CarRentalBooking/CarBookingCard"
import Car from "./pages/Car"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<CarBookingCard />} />
      <Route path="/cars" element={<Car />} />
    </Routes>
  )
}

export default AppRoutes
