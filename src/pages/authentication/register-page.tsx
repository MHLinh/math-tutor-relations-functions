/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { Register } from "components"

/**
 * Displays the page to register.
 */
export function RegisterPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Register />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
