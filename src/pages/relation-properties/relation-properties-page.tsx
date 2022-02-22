import React from "react"
import {
  Box,
  Container,
  Button
} from "@mui/material"
import { RelationProperties } from "components"

/**
 * Displays the page for studying the all the properties of a relation.
 */
export function RelationPropertiesPage() {
  return (
    <Container>
      <RelationProperties />
    </Container>
  )
}
