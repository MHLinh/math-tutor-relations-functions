/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles
 */
 import React from "react"
 import Container from "@mui/material/Container"
 import makeStyles from "@mui/styles/makeStyles"
import { RelationRepresentation } from "components"

/**
 * Displays the page for studying the representations of a relation.
 */
export function RelationRepresentationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationRepresentation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
