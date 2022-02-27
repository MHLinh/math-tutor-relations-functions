import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Reflection } from "components"

/**
 * Displays the page for studying 
 * reflecting the function along x-axis and y-axis.
 */
export function ReflectionPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Reflection />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
