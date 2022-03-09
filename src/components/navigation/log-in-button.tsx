import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "components/firebase/firebase"

/**
 * A button to the log in page.
 */
export function LogInButton() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }

  if(!user) {
    return (
      <Button
        aria-label="log-in-button"
        variant="contained"
        onClick={handleClick}
      >
        Log in
      </Button>
    )
  }
  
  return null
}