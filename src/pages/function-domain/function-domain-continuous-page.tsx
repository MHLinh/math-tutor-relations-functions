import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FunctionDomainContinuous } from "components"

/**
 * Displays the page for studying continuous domain of a function.
 */
export function FunctionDomainContinuousPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionDomainContinuous />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
