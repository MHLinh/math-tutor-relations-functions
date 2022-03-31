/**
 * This code uses following libraries: 
 * react and @mui/material.
 */
import React from "react"
import Alert, { AlertColor } from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"


interface ICustomAlertDelete {
  open: boolean,          // Whether to show the alert
  handleClose: (
    event?: React.SyntheticEvent | Event, 
    reason?: string
  ) => void,              // Function to call when closing alert
  handleUndo: () => void, // Function to call when undoing delete of a relation
  severity: AlertColor,   // Severity of the alert
  text: string            // Message of the alert to display
}

/**
 * A component displaying an alert message when deleting a relation from database.
 * Allows for undoing the deletion.
 */
export function CustomAlertDelete(props: ICustomAlertDelete) {
  const { open, handleClose, handleUndo, severity, text } = props

  return (
    <Snackbar 
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose}
    >
      <Alert 
        onClose={handleClose} 
        severity={severity} 
        sx={{ width: "100%" }} 
        action={
          <Button 
            color="inherit"
            size="small"
            onClick={handleUndo}
          >
            UNDO
          </Button>
        }
      >
        {text}
      </Alert>
    </Snackbar>
  )
}