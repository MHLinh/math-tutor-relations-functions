import React from "react"
import {
  Alert,
  AlertColor,
  Snackbar
} from "@mui/material"

interface ICustomAlert {
  open: boolean,        // Whether to show the alert
  handleClose: (
    event?: React.SyntheticEvent | Event, 
    reason?: string
  ) => void,            // Function to call when closing alert
  severity: AlertColor, // Severity of the alert
  text: string          // Message of the alert to display
}

/**
 * A component displaying an alert message.
 */
export function CustomAlert(props: ICustomAlert) {
  const { open, handleClose, severity, text } = props

  return (
    <Snackbar 
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  )
}