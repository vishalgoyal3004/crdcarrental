import React, { useState, useEffect } from "react"
import CloseIcon from "@mui/icons-material/Close"
import { Alert, IconButton, Collapse, Typography } from "@mui/material"
import PropTypes from "prop-types"

export default function AlertNotice({
  severity,
  message = "",
  message1 = "",
  message2 = "",
  show = false,
  onClose = () => {},
}) {
  const [open, setOpen] = useState(show)

  useEffect(() => {
    setOpen(show)

    if (severity === "success" && show) {
      const timeoutId = setTimeout(() => {
        setOpen(false)
        if (onClose) {
          onClose()
        }
      }, 1000 * 5)

      return () => clearTimeout(timeoutId)
    }

    return () => {}
  }, [show, severity, onClose])

  return (
    <Collapse in={open}>
      <Alert
        data-testid={`${message}-alert`}
        severity={severity}
        action={
          <IconButton
            data-testid={`${message}-alertClose`}
            aria-label="close"
            size="medium"
            onClick={() => {
              setOpen(onClose)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {/* <AlertTitle color="inherit">{{ severity }}</AlertTitle> */}
        {message && <Typography variant="body1">{message}</Typography>}
        {message1 && <Typography variant="body1">{message1}</Typography>}
        {message2 && <Typography variant="body1">{message2}</Typography>}
      </Alert>
    </Collapse>
  )
}
AlertNotice.propTypes = {
  message: PropTypes.string,
  message1: PropTypes.string,
  message2: PropTypes.string,
  severity: PropTypes.string.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func,
}
