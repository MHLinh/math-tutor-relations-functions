/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { FunctionProperties } from "components"

/**
 * Displays the page for studying the all the function properties of a relation.
 */
export function FunctionPropertiesPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionProperties />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
