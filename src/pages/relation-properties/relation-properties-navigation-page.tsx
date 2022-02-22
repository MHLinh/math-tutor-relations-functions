import React from "react"
import {
  Box,
  Container,
  Button
} from "@mui/material"
import { RelationPropertiesNavigation } from "components"

/**
 * Displays the page with navigation buttons for studying properties of a relation.
 */
export function RelationPropertiesNavigationPage() {
  return (
    <Container>
      <RelationPropertiesNavigation />
    </Container>
  )
}
