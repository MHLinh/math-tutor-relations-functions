/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
 import React from "react"
 import Container from "@mui/material/Container"
 import makeStyles from "@mui/styles/makeStyles"
import { RelationIrreflexive } from "components"

/**
 * Displays the page for studying the irreflexive property.
 */
export function RelationIrreflexivePage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationIrreflexive />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
