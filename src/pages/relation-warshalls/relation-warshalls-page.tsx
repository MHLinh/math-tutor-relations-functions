/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles
 */
 import React from "react"
 import Container from "@mui/material/Container"
 import makeStyles from "@mui/styles/makeStyles"
import { RelationWarshalls } from "components"

/**
 * Displays the page for studying the Warshall's algorithm for transitive closure.
 */
export function RelationWarshallsPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationWarshalls />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
