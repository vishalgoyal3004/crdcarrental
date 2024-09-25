// import isTimeOverLapping from "../../utility/isTimeOverLapping"
// import { Car } from "../Car"
// import { Reservation } from "../Reservation"

// export class CarRentalBooking {
//   constructor() {
//     const noOfCars = {
//       suv: Array(2)
//         .fill(null)
//         .map(() => new Car("SUV")),
//       sedan: Array(3)
//         .fill(null)
//         .map(() => new Car("Sedan")),
//       van: Array(1)
//         .fill(null)
//         .map(() => new Car("Van")),
//     }

//     const reservations = []

//     this.isCarAvailable = function (carType, startDateTime, endDateTime) {
//       const carAvailability = noOfCars[carType]
//       const bookingStartDateTime = new Date(startDateTime)
//       const bookingEndDateTime = new Date(endDateTime)

//       const carsReserved = reservations.filter((res) => {
//         const reservedStart = res.startDateTime
//         const reservedEnd = res.endDateTime
//         return (
//           res.car.type === carType &&
//           isTimeOverLapping(
//             bookingStartDateTime,
//             bookingEndDateTime,
//             reservedStart,
//             reservedEnd
//           )
//         )
//       })
//       return carAvailability.length > carsReserved.length
//     }

//     this.reserveCar = function (carType, startDateTime, endDateTime) {
//       if (!this.isCarAvailable(carType, startDateTime, endDateTime)) {
//         return false
//       }
//       const car = noOfCars[carType].find((x) => x.isCarAvailable)
//       const reservation = new Reservation(car, startDateTime, endDateTime)
//       reservations.push(reservation)
//       car.isAvailable = false
//       return true
//     }
//   }
// }
