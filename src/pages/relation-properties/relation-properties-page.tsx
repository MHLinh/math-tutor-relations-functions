/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { RelationProperties } from "components"

/**
 * Displays the page for studying the all the properties of a relation.
 */
export function RelationPropertiesPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationProperties />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
