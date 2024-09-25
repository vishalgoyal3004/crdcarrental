import React, { useState } from "react"
import {
  Grid,
  Typography,
  CardActions,
  Switch,
  FormGroup,
  Autocomplete,
  TextField,
  Button,
  Card,
  CardContent,
  FormControlLabel,
} from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import VehicleDisplay from "../../components/VehicleDisplay"
import AlertNotice from "../../components/AlertNotice"

const carAvailability = {
  sedan: [
    { id: "Toyotta Camry", bookings: [] },
    { id: "Toyotta Mirai", bookings: [] },
    { id: "Toyotta Prius", bookings: [] },
  ],
  suv: [
    { id: "BYD Atto", bookings: [] },
    { id: "BYD SEAL U", bookings: [] },
  ],
  van: [
    { id: "Mercedes 1", bookings: [] },
    { id: "Lexus", bookings: [] },
    { id: "Mercedes 2", bookings: [] },
    { id: "Mercedes 3", bookings: [] },
  ],
}
export default function CarBookingCard() {
  const [pickupLoc, setPickupLoc] = useState(null)
  const [carModel, setCarModel] = useState(null)
  const [pickupDTime, setPickupDTime] = useState(null)
  const [returnDTime, setReturnDTime] = useState(null)
  const [severity, setSeverity] = useState("")
  const [message, setMessage] = useState("")
  const [validationAlert, setValidationAlert] = useState(false)
  const [bookingView, setBookingView] = useState(false)
  const carTypes = ["Sedan", "SUV", "Van"]
  const locations = [
    "Clane",
    "Maynooth",
    "Leixlip",
    "Dublin Airport",
    "SandyFord",
  ]

  const handleBookingView = () => {
    setBookingView((prev) => !prev)
  }

  const handleBooking = () => {
    setMessage("")
    setValidationAlert(false)
    if (!carModel || !pickupDTime || !returnDTime || !pickupLoc) {
      setMessage("Please fill all the fields.")
      setSeverity("error")
      setValidationAlert(true)
      return
    }

    const carTypeKey = carModel.toLowerCase()
    const selectedCar = carAvailability[carTypeKey]

    const pickupTime = pickupDTime.toISOString()
    const returnTime = returnDTime.toISOString()

    const availableCar = selectedCar.find((car) => {
      return !car.bookings.some(
        (booking) =>
          (pickupTime >= booking.pickup && pickupTime <= booking.return) ||
          (returnDTime >= booking.pickup && returnTime <= booking.return) ||
          (pickupTime <= booking.pickup && returnTime >= booking.return)
      )
    })
    console.log("available car", availableCar)

    if (!availableCar) {
      setMessage(`No ${carModel}s are available for reservation.`)
      setSeverity("error")
      setValidationAlert(true)
      return
    }

    availableCar.bookings.push({ pickup: pickupTime, return: returnTime })

    setPickupLoc(null)
    setCarModel(null)
    setPickupDTime(null)
    setReturnDTime(null)
    setMessage(`Successfully reserved a ${carModel}!`)
    setSeverity("success")
    setValidationAlert(true)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              color="#3cd070"
              gutterBottom
            >
              Car Booking
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  options={locations}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Pickup Location"
                      inputProps={{
                        ...params.inputProps,
                        "data-testid": "location",
                      }}
                    />
                  )}
                  value={pickupLoc}
                  onChange={(e, newValue) => setPickupLoc(newValue)}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={carTypes}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Car Type"
                      inputProps={{
                        ...params.inputProps,
                        "data-testid": "carType",
                      }}
                    />
                  )}
                  value={carModel}
                  onChange={(e, newValue) => setCarModel(newValue)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Pickup Date & Time"
                    value={pickupDTime}
                    onChange={(newValue) => setPickupDTime(newValue)}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        "data-testid": "pickupTime",
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    data-testid="returnTime"
                    label="Return Date & Time"
                    value={returnDTime}
                    onChange={(newValue) => {
                      setReturnDTime(newValue)
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        "data-testid": "returnTime",
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bookingView}
                        onChange={handleBookingView}
                        inputProps={{ "aria-label": "controlled" }}
                        color="secondary"
                      />
                    }
                    label="Booking View"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Button
                  data-testid="booking"
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: "#3cd070" }}
                  onClick={handleBooking}
                  fullWidth
                >
                  Book a Car
                </Button>
              </Grid>
              <Grid item xs={12}>
                <AlertNotice
                  message={message}
                  severity={severity}
                  show={validationAlert}
                  onClose={() => {
                    setValidationAlert(false)
                  }}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      {bookingView && (
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <VehicleDisplay title={"Sedan"} car={carAvailability.sedan} />
                </Grid>
                <Grid item xs={12}>
                  <VehicleDisplay title={"Suv"} car={carAvailability.suv} />
                </Grid>
                <Grid item xs={12}>
                  <VehicleDisplay title={"Van"} car={carAvailability.van} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}
