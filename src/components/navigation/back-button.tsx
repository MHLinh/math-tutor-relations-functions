import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  IconButton
} from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

/**
 * A button to go back to the previous page.
 */
export function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    navigate(-1)
  }

  if(location.pathname !== "/") {
    return (
      <IconButton
        aria-label="back-button"
        size="large"
        color="info"
        onClick={handleClick}
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>
    )
  }
  
  return null
}