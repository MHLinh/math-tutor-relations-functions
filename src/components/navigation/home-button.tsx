import React from "react"
import { NavLink } from "react-router-dom"
import {
  IconButton
} from "@mui/material"
import HomeIcon  from "@mui/icons-material/Home"

/**
 * A button to go the home page.
 */
export function HomeButton() {

  return (
    <IconButton
      aria-label="home-button"
      size="large"
      color="info"
      component={NavLink}
      to="/"
    >
      <HomeIcon fontSize="inherit" />
    </IconButton>
  )
}