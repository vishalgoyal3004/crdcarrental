import React from "react"
import { Box, Grid } from "@mui/material"
import CustomAppBar from "../components/CustomAppBar"
import AppRoutes from "../AppRoutes"

export default function Layout() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <CustomAppBar />
        </Grid>
      </Grid>
      <Box sx={{ margin: "6rem", alignItems: "center" }}>
        <AppRoutes />
      </Box>
    </>
  )
}
