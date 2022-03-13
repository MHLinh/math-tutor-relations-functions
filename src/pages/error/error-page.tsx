import React from "react"
import {
  Container,
} from "@mui/material"
import { Error } from "components"

/**
 * Displays the page with an error message.
 */
export function ErrorPage() {
  return (
    <Container>
      <Error />
    </Container>
  )
}
