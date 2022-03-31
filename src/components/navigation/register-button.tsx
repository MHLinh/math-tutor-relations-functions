/**
 * This code uses following libraries: 
 * react, react-router-dom, @mui/material, 
 * @mui/icons-material, and react-firebase-hooks.
 */
import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "components/firebase/firebase"

/**
 * A button to the register page.
 */
export function RegisterButton() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/register")
  }

  if(!user) {
    return (
      <Button
        aria-label="register-button"
        variant="outlined"
        onClick={handleClick}
      >
        Sign up
      </Button>
    )
  }
  
  return null
}