import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FunctionDomainDiscrete } from "components"

/**
 * Displays the page for studying discrete domain of a function.
 */
export function FunctionDomainDiscretePage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <FunctionDomainDiscrete />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
