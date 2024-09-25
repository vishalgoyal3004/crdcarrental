export default function isTimeOverlapping(
  startDateTime,
  endDateTime,
  reqStartDateTime,
  reqEndDateTime
) {
  return startDateTime < reqEndDateTime && reqStartDateTime < endDateTime;
}
