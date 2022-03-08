import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { center } from "theme/styles"
import { 
  auth, 
  useAuthenticationManager,
  AuthenticationAlert
} from "./firebase"

export function ResetPassword(){
  const [email, setEmail] = useState("")
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { 
    status, 
    message, 
    resetManager, 
    sendPasswordReset 
  } = useAuthenticationManager()

  const classes = useStyles()

  useEffect(() => {
    if (loading) {
      return
    }

    if (user) {
      navigate("/")
    }
  }, [user, loading])

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleClickReset = () => {
    sendPasswordReset(email)
  }

  return (
    <Container className={classes.center}>
      <AuthenticationAlert 
        status={status} 
        message={message} 
        resetManager={resetManager} 
      />
      <Box className={classes.box}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Typography align="center" className={classes.text}>
            Reset password
          </Typography>
          <TextField
            id="email-input"
            value={email}
            onChange={handleChangeEmail}
            placeholder="E-mail Address"
            fullWidth
          />
          <Button
            id="reset-button"
            className={classes.button}
            variant="outlined"
            onClick={handleClickReset}
          >
            Reset password
          </Button>
          <Typography align="center">
            Don&apos;t have an account? <Link to="/register">Register now.</Link>
          </Typography>
        </Stack>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(300)
    },
  },
  button: {
    width: "100%"
  },
  center: {
    ...center,
    height: "80vh",
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  },
}))
