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
import { PrivacyPolicyNotice } from "components/privacy-policy/privacy-policy-notice"
import { 
  auth,
  useAuthenticationManager,
  AuthenticationAlert
} from "./firebase"

export function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { 
    status, 
    processing,
    message, 
    resetManager, 
    logInWithEmailAndPassword, 
    logInWithGoogle 
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

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleClickLogin = () => {
    logInWithEmailAndPassword(email, password)
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
            {/* Login form. */}
            <Typography align="center" className={classes.text}>
              Log in
            </Typography>
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
            {/* Login buttons. */}
            <Button
              id="login-button"
              variant="outlined"
              disabled={processing}
              onClick={handleClickLogin}
              className={classes.button}
            >
              Login
            </Button>
            <Button
              id="login-google-button"
              variant="contained"
              disabled={processing}
              startIcon={<GoogleIcon />}
              onClick={handleClickGoogleLogin}
              className={classes.button}
            >
              Login with Google
            </Button>
            <Typography align="center">
              <Link to="/reset-password">Forgot Password</Link>
            </Typography>
            <Typography align="center">
              Don&apos;t have an account? <Link to="/register">Register now.</Link>
            </Typography>
            <PrivacyPolicyNotice />
          </Stack>
        </Box>
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
