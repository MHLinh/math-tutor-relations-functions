import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { QuadraticFunctionVertex } from "components"

/**
 * Displays the page for studying the vertex of a quadratic function.
 */
export function QuadraticFunctionVertexPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <QuadraticFunctionVertex />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
