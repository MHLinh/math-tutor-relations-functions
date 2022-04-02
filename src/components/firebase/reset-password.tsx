/**
 * This code uses following libraries: 
 * react, react-router-dom, @mui/material, @mui/styles,
 * @mui/icons-material, and, react-firebase-hooks.
 */
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import LinearProgress from "@mui/material/LinearProgress"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { useAuthState } from "react-firebase-hooks/auth"
import { center } from "theme/styles"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { 
  auth, 
  useAuthenticationManager,
  AuthenticationAlert
} from "./firebase"

export function ResetPassword(){
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState(false)
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { 
    status,
    processing,
    message, 
    resetManager, 
    sendPasswordReset 
  } = useAuthenticationManager()

  const classes = useStyles()

  useEffect(() => {
    if (loading || processing) {
      return
    }

    if (user) {
      navigate("/")
    }
  }, [user, loading, processing])

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleClickReset = () => {
    if (email === "") {
      setAlert(true)
      return
    }

    sendPasswordReset(email)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    setAlert(false)
  }

  return (
    <Box>
      {processing
        ? <Box className={classes.progressBox}>
            <LinearProgress />
          </Box>
        : null
      }
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
            {/* Reset password form. */}
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
            {/* Reset password buttons. */}
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
        <CustomAlert 
          open={alert}
          handleClose={handleClose}
          severity="error"
          text="Please enter your email."
        />
      </Container>
    </Box>
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
  progressBox: {
    width: "100%"
  }
}))
