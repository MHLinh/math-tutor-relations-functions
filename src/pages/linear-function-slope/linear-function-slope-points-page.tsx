import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { LinearFunctionSlopePoints } from "components"

/**
 * Displays the page for studying the slope of a linear function
 * bys selecting two points.
 */
export function LinearFunctionSlopePointsPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <LinearFunctionSlopePoints />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
