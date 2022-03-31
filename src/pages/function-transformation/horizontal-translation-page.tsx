/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { HorizontalTranslation } from "components"

/**
 * Displays the page for studying the horizontal translation of a function.
 */
export function HorizontalTranslationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <HorizontalTranslation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
