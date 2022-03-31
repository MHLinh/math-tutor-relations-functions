/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { FunctionCompositionNavigation } from "components"

/**
 * Displays the page with navigation buttons
 * for studying function composition.
 */
export function FunctionCompositionNavigationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionCompositionNavigation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
