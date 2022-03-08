import React from "react"
import { useNavigate } from "react-router-dom"
import { IconButton } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "components/firebase/firebase"

/**
 * A button to the dashboard page.
 */
export function DashboardButton() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/dashboard")
  }

  if(user) {
    return (
      <IconButton
        aria-label="dashboard-button"
        size="large"
        color="info"
        onClick={handleClick}
      >
        <AccountCircleIcon fontSize="inherit" />
      </IconButton>
    )
  }
  
  return null
}