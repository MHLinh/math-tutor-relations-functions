import React, { useState } from "react"
import {
  Alert,
  Snackbar
} from "@mui/material"
import { PrivacyPolicyNotice } from "./privacy-policy-notice"

/**
 * A component displaying a pop up message about the privacy policy.
 */
 export function PrivacyPolicyPopUp() {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar 
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open} 
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
        <PrivacyPolicyNotice />
      </Alert>
    </Snackbar>
  )
}