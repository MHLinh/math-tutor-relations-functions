import React from "react"
import {
  Box,
  Container,
  Button
} from "@mui/material"
import { RelationWarshalls } from "components"

/**
 * Displays the page for studying the Warshall's algorithm for transitive closure.
 */
export function RelationWarshallsPage() {
  return (
    <Container>
      <RelationWarshalls />
    </Container>
  )
}