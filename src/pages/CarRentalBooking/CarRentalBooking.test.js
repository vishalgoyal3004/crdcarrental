import React from "react"
import { screen, fireEvent, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CarBookingCard from "./CarBookingCard"
import "@testing-library/jest-dom"
import dayjs from "dayjs"

const mockFormatDatePickup = dayjs("2024-09-23T10:00:00").format(
  "MM/DD/YYYY hh:mm A"
)
const mockFormatDateReturn = dayjs("2024-09-23T11:00:00").format(
  "MM/DD/YYYY hh:mm A"
)

describe("Car Booking System", () => {
  beforeEach(() => {
    render(<CarBookingCard />)
  })

  test("Check if all fields are populated otherwise display error", () => {
    fireEvent.click(screen.getByTestId("booking"))
    expect(screen.getByText("Please fill all the fields.")).toBeInTheDocument()
  })

  test("succesfully adds one booking", async () => {
    const location = screen.getByTestId("location")
    const carType = screen.getByTestId("carType")
    await userEvent.type(location, "Clane")
    const locOption = screen.getByText("Clane")
    await userEvent.click(locOption)
    expect(screen.getByTestId("location").value).toBe("Clane")
    await userEvent.type(carType, "Sedan")
    const carOption = screen.getByText("Sedan")
    await userEvent.click(carOption)
    expect(screen.getByTestId("carType").value).toBe("Sedan")

    const pickupInput = screen.getByTestId("pickupTime").querySelector("input")
    const returnInput = screen.getByTestId("returnTime").querySelector("input")
    fireEvent.change(pickupInput, {
      target: { value: mockFormatDatePickup },
    })
    fireEvent.change(returnInput, {
      target: { value: mockFormatDateReturn },
    })

    fireEvent.click(screen.getByTestId("booking"))
    expect(
      screen.getByText("Successfully reserved a Sedan!")
    ).toBeInTheDocument()
  })

  test("should not reserve same type car at overlapping times if it exceeds the total quantity of car", async () => {
    for (let i = 0; i < 4; i++) {
      const location = screen.getByTestId("location")
      const carType = screen.getByTestId("carType")
      await userEvent.type(location, "Clane")
      const locOption = screen.getByText("Clane")
      await userEvent.click(locOption)
      expect(screen.getByTestId("location").value).toBe("Clane")
      await userEvent.type(carType, "Sedan")
      const carOption = screen.getByText("Sedan")
      await userEvent.click(carOption)
      expect(screen.getByTestId("carType").value).toBe("Sedan")

      const pickupInput = screen
        .getByTestId("pickupTime")
        .querySelector("input")
      const returnInput = screen
        .getByTestId("returnTime")
        .querySelector("input")
      fireEvent.change(pickupInput, {
        target: { value: mockFormatDatePickup },
      })
      fireEvent.change(returnInput, {
        target: { value: mockFormatDateReturn },
      })

      fireEvent.click(screen.getByTestId("booking"))
    }
    expect(
      screen.queryByText("No Sedans are available for reservation.")
    ).toBeInTheDocument()
  })
})
