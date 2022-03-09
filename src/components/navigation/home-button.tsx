import React from "react"
import { useNavigate } from "react-router-dom"
import { IconButton } from "@mui/material"
import HomeIcon  from "@mui/icons-material/Home"

/**
 * A button to go the home page.
 */
export function HomeButton() {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/")
  }

  return (
    <IconButton
      aria-label="home-button"
      size="large"
      color="info"
      onClick={handleClick}
    >
      <HomeIcon fontSize="inherit" />
    </IconButton>
  )
}