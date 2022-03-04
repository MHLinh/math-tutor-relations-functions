import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FunctionCompositionPlot } from "components"

/**
 * Displays the page for studying plotting function composition.
 */
export function FunctionCompositionPlotPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionCompositionPlot />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
