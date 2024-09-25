import { Grid } from "@mui/material"
import VehicleCard from "../components/VehicleCard"

const car = [
  {
    name: "Toyota Camry (Sedan)",
    image: "/images/Toyota_Camry.jpg",
    pricePerDay: 60,
  },
  {
    name: "Toyota Mirai (Sedan)",
    image: "/images/Toyota_Marai.jpg",
    pricePerDay: 60,
  },
  {
    name: "Toyota Prius (Sedan)",
    image: "/images/Toyota_Prius.jpg",
    pricePerDay: 60,
  },
  {
    name: "BYD Atto (SUV)",
    image: "/images/BYD_Atto3.jpg",
    pricePerDay: 70,
  },
  {
    name: "BYD SEAL U (SUV)",
    image: "/images/BYD_Seal.jpg",
    pricePerDay: 70,
  },
  {
    name: "Mercedes 1 (Van)",
    image: "/images/Mercedes_1.jpg",
    pricePerDay: 80,
  },
  {
    name: "Lexus (Van)",
    image: "images/Lexus.jpg",
    pricePerDay: 80,
  },
  {
    name: "Mercedes 2 (Van)",
    image: "/images/Mercedes_2.jpg",
    pricePerDay: 80,
  },
  {
    name: "Mercedes 3 (Van)",
    image: "/images/Mercedes_3.jpg",
    pricePerDay: 80,
  },
]

export default function Car() {
  return (
    <Grid container spacing={2}>
      {car.map((cars) => (
        <Grid key={cars.name} item xs={4}>
          <VehicleCard
            name={cars.name}
            image={cars.image}
            pricePerDay={cars.pricePerDay}
          />
        </Grid>
      ))}
    </Grid>
  )
}
