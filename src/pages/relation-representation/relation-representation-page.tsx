import React from "react"
import {
  Box,
  Container,
  Button
} from "@mui/material"
import { RelationRepresentation, RelationProperties, RelationReflexive } from "components"

/**
 * Displays the page for studying the representations of a relation.
 */
export function RelationRepresentationPage() {
  return (
    <Container>
      <RelationRepresentation />
    </Container>
  )
}
