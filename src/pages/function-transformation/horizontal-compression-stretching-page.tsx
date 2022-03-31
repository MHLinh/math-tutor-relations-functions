/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { HorizontalCompressionStretching } from "components"

/**
 * Displays the page for studying 
 * the horizontal compression and stretching of a function.
 */
export function HorizontalCompressionStretchingPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <HorizontalCompressionStretching />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
