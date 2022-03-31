/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { ResetPassword } from "components"

/**
 * Displays the page to reset password.
 */
export function ResetPasswordPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <ResetPassword />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
