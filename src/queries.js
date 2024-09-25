import { gql } from '@apollo/client';

export const GET_CARS = gql`
  query {
   getAllCars {
    id
    name
    image
    pricePerDay
  }
  }
`

export const GET_LOCATION = gql`
  query {
   getAllLocation {
    id
    name
  }
  }
`
export const GET_CARTYPE = gql`
  query {
   getAllCarType {
    id
    name
  }
  }
`