/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { Error } from "components"

/**
 * Displays the page with an error message.
 */
export function ErrorPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Error />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
