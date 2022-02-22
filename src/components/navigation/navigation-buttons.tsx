import React from "react"
import {
  Stack
} from "@mui/material"
import { BackButton } from "./back-button"
import { HomeButton } from "./home-button"

/**
 * A component displaying navigation buttons.
 */
export function NavigationButtons() {

  return (
    <Stack direction="row" spacing={2}>
      <BackButton />
      <HomeButton />
    </Stack>
  )
}