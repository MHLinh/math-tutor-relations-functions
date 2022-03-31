/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { RelationReflexive } from "components"

/**
 * Displays the page for studying the reflexive property.
 */
export function RelationReflexivePage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationReflexive />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
