/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { RelationTransitive } from "components"

/**
 * Displays the page for studying the transitive property.
 */
export function RelationTransitivePage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationTransitive />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
