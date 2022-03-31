/**
 * This code uses following libraries: 
 * react and @mui/material.
 */
import React from "react"
import Stack from "@mui/material/Stack"
import { BackButton } from "./back-button"
import { HomeButton } from "./home-button"
import { DashboardButton } from "./dashboard-button"
import { LogInButton } from "./log-in-button"
import { RegisterButton } from "./register-button"

/**
 * A component displaying navigation bar.
 */
export function NavigationBar() {

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={2}>
        <BackButton />
        <HomeButton />
      </Stack>
      <Stack>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <RegisterButton />
          <LogInButton />
          <DashboardButton />
        </Stack>
      </Stack>
    </Stack>
  )
}