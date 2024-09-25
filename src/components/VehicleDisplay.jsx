import React from "react"
import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Card,
} from "@mui/material"
import PropTypes from "prop-types"

function VehicleDisplay({ title, car }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          color="#3cd070"
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <List>
          {car.map((vehicle) => (
            <React.Fragment key={vehicle.id}>
              <ListItem>
                <ListItemText
                  sx={{ color: "darkgrey", fontWeight: "bold" }}
                  primary={vehicle.id}
                />
              </ListItem>
              {vehicle.bookings.length > 0 ? (
                vehicle.bookings.map((booking, index) => (
                  <ListItem key={index} sx={{ pl: 4 }}>
                    <ListItemText
                      primary={`Booking ${index + 1}`}
                      secondary={`Pickup: ${new Date(booking.pickup).toLocaleString()}, Return: ${new Date(booking.return).toLocaleString()}`}
                    />
                  </ListItem>
                ))
              ) : (
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary="No bookings" />
                </ListItem>
              )}
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
export default VehicleDisplay
VehicleDisplay.propTypes = {
  title: PropTypes.string,
  car: PropTypes.array,
}
