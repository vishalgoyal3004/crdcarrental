import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import PropTypes from "prop-types"

export default function VehicleCard({ name, image, pricePerDay }) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia height="250" alt={name} component="img" image={image} />

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" color="secondary">
          Price/Day: € {pricePerDay}
        </Typography>
      </CardContent>
    </Card>
  )
}

VehicleCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  pricePerDay: PropTypes.number,
}
