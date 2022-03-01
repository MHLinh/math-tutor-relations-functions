import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { VerticalCompressionStretching } from "components"

/**
 * Displays the page for studying 
 * the vertical compression and stretching of a function.
 */
export function VerticalCompressionStretchingPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <VerticalCompressionStretching />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
