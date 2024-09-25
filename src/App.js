import React, { useEffect } from "react"

import Layout from "./pages/Layout"

function App() {
  useEffect(() => {
    document.title = "CRD - Car Rental"
  }, [])
  return (
    <>
      <Layout />
    </>
  )
}

export default App
