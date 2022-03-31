/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
 import React from "react"
 import Container from "@mui/material/Container"
 import makeStyles from "@mui/styles/makeStyles"
import { QuadraticFunctionNavigation } from "components"

/**
 * Displays the page with navigation buttons
 * for studying the quadratic function.
 */
export function QuadraticFunctionNavigationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <QuadraticFunctionNavigation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
