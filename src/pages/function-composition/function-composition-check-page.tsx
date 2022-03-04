import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FunctionCompositionCheck } from "components"

/**
 * Displays the page for studying if function composition is possible.
 */
export function FunctionCompositionCheckPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionCompositionCheck />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
