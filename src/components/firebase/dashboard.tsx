/**
 * This code uses following libraries: 
 * react, react-router-dom, @mui/material, @mui/styles, 
 * react-firebase-hooks and firebase.
 */
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CircularProgress from "@mui/material/CircularProgress"
import LinearProgress from "@mui/material/LinearProgress"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { useAuthState } from "react-firebase-hooks/auth"
import { query, collection, getDocs, where } from "firebase/firestore"
import { center } from "theme/styles"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { auth, db, useAuthenticationManager } from "./firebase"

/**
 * A component displaying the user dashboard.
 * Displays the user's name and email.
 * Allows the user to log out.
 * Code partially based on the article 
 * https://blog.logrocket.com/user-authentication-firebase-react-apps/,
 * author: Yusuff Faruq, published: 10.01.2022, accessed: 07.03.2022.
 */
export function Dashboard() {
  const [user, loading] = useAuthState(auth)
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [fetching, setFetching] = useState(true)
  const navigate = useNavigate()
  const { processing, logout } = useAuthenticationManager()

  const classes = useStyles()

  const fetchUserName = async () => {
    setFetching(true)
    try {
      const req = query(collection(db, "users"), where("uid", "==", user?.uid))
      const doc = await getDocs(req)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      setError(true)
    }
    setFetching(false)
  }

  useEffect(() => {
    if (loading) {
      return
    }

    if(!user) {
      navigate("/login")
    }

    if(user && !processing) {
      fetchUserName()
    }
  }, [user, loading, processing])

  const handleClickLogOut = () => {
    logout()
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    setError(false)
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
        <CustomAlert 
          open={error}
          handleClose={handleClose}
          severity="error"
          text="An error occured while fetching user data"
        />
        {fetching
          ? <Box>
              <CircularProgress />
            </Box>
          : <Box className={classes.box}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Typography align="center" className={classes.text}>
                Welcome {name}
              </Typography>
              <Typography align="left">
                Your email is: {user?.email}
              </Typography>
              <Button
                id="log-out-button"
                variant="contained"
                disabled={processing}
                onClick={handleClickLogOut}
                className={classes.button}
              >
                Log out
              </Button>
            </Stack>
          </Box>
        }
        
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
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  },
  progressBox: {
    width: "100%"
  }
}))
