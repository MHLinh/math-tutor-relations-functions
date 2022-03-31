/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { LinearFunctionSlopeChange } from "components"

/**
 * Displays the page for studying the slope of a linear function
 * by modifying the change in X and Y.
 */
export function LinearFunctionSlopeChangePage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <LinearFunctionSlopeChange />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
