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
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import OutlinedInput from "@mui/material/OutlinedInput"
import LinearProgress from "@mui/material/LinearProgress"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import GoogleIcon from "@mui/icons-material/Google"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { useAuthState } from "react-firebase-hooks/auth"
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
  const [alert, setAlert] = useState(false)
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
    if (loading || processing) {
      return
    }

    if (user) {
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
    if (name === "" || email === "" || password === "") {
      setAlert(true)
      return
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
            {/* Register form. */}
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
            {/* Register buttons. */}
            <Button
              id="register-button"
              variant="outlined"
              disabled={processing}
              onClick={handleClickRegister}
              className={classes.button}
            >
              Register
            </Button>
            <Button
              id="register-google-button"
              variant="contained"
              disabled={processing}
              startIcon={<GoogleIcon />}
              onClick={handleClickGoogleLogin}
              className={classes.button}
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
          open={alert}
          handleClose={handleClose}
          severity="error"
          text="Please enter your name, email, and password."
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
