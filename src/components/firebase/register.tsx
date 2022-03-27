import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import GoogleIcon from "@mui/icons-material/Google"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { center } from "theme/styles"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { PrivacyPolicyNotice } from "components/privacy-policy/privacy-policy-notice"
import { 
  auth, 
  useAuthenticationManager,
  AuthenticationAlert
} from "./firebase"

export function Register (){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [alertName, setAlertName] = useState(false)
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { 
    status, 
    message,
    processing, 
    resetManager, 
    registerWithEmailAndPassword, 
    logInWithGoogle 
  } = useAuthenticationManager()

  const classes = useStyles()

  useEffect(() => {
    if (loading) {
      return
    }

    if (user && !processing) {
      navigate("/dashboard")
    }
  }, [user, loading, processing])

  const handleChangeName= (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleClickRegister = () => {
    if (name === "") {
      setAlertName(true)
    }
    registerWithEmailAndPassword(name, email, password)
  }

  const handleClickGoogleLogin = () => {
    logInWithGoogle()
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlertName(false)
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
            Register
          </Typography>
          <TextField
            id="name-input"
            value={name}
            onChange={handleChangeName}
            placeholder="Name"
            fullWidth
          />
          <TextField
            id="email-input"
            value={email}
            onChange={handleChangeEmail}
            placeholder="E-mail Address"
            fullWidth
          />
          <OutlinedInput
            id="password-input"
            type={showPassword 
              ? "text" 
              : "password"
            }
            value={password}
            onChange={handleChangePassword}
            placeholder="Password"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle-password-visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword 
                    ? <VisibilityOff /> 
                    : <Visibility />
                  }
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            id="register-button"
            className={classes.button}
            variant="outlined"
            onClick={handleClickRegister}
          >
            Register
          </Button>
          <Button
            id="register-google-button"
            className={classes.button}
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleClickGoogleLogin}
          >
            Register with Google
          </Button>
          <Typography align="center">
            <Link to="/reset-password">Forgot Password</Link>
          </Typography>
          <Typography align="center">
            Already have an account? <Link to="/login">Login now.</Link>
          </Typography>
          <Typography align="left" variant="caption">
            Please verify your email through the verification we will send you after registering.
          </Typography>
          <PrivacyPolicyNotice />
        </Stack>
      </Box>
      <CustomAlert 
        open={alertName}
        handleClose={handleClose}
        severity="error"
        text="Please enter your name."
      />
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
