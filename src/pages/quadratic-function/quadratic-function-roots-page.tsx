import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { QuadraticFunctionRoots } from "components"

/**
 * Displays the page for studying the roots of a quadratic function.
 */
export function QuadraticFunctionRootsPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <QuadraticFunctionRoots />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
