import { Grid } from "@mui/material"
import VehicleCard from "../components/VehicleCard"
import { useQuery } from "@apollo/client"
import { GET_CARS } from "../queries"

export default function Car() {
  const { loading, error, data } = useQuery(GET_CARS)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
  return (
    <Grid container spacing={2}>
      {data.getAllCars.map((cars) => (
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
