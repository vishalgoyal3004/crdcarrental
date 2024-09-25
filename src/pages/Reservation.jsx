export class Reservation {
  constructor(car, startDatetime, endDateTime) {
    this.car = car;
    this.startDatetime = new Date(startDatetime);
    this.endDateTime = new Date(endDateTime);
  }
}
