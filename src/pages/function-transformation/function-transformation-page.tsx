import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FunctionTransformation } from "components"

/**
 * Displays the page for studying function transformation.
 */
export function FunctionTransformationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionTransformation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
