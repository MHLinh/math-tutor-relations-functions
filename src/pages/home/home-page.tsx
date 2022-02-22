import React from "react"
import {
  Container,
} from "@mui/material"
import { RelationNavigation } from "components"

/**
 * Displays the home page of the application.
 * Display the navigation buttons for studying the topics.
 */
export function HomePage() {
  return (
    <Container>
      <RelationNavigation />
    </Container>
  )
}
