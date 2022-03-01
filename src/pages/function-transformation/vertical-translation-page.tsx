import React from "react"
import {
  Container,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { VerticalTranslation } from "components"

/**
 * Displays the page for studying the vertical translation of a function.
 */
export function VerticalTranslationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <VerticalTranslation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
