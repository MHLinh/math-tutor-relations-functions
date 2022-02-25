import React from "react"
import {
  Box,
  Container,
  Button
} from "@mui/material"
import { LinearFunctionSlopeNavigation } from "components"

/**
 * Displays the page with navigation buttons
 * for studying the slope of a linear function.
 */
export function LinearFunctionSlopeNavigationPage() {
  return (
    <Container>
      <LinearFunctionSlopeNavigation />
    </Container>
  )
}
