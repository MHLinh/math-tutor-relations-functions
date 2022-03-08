import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Container,
  Stack,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { query, collection, getDocs, where } from "firebase/firestore"
import { center } from "theme/styles"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { auth, db, useAuthenticationManager } from "./firebase"

export function Dashboard() {
  const [user, loading] = useAuthState(auth)
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { logout } = useAuthenticationManager()

  const classes = useStyles()

  const fetchUserName = async () => {
    try {
      const req = query(collection(db, "users"), where("uid", "==", user?.uid))
      const doc = await getDocs(req)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      setError(true)
    }
  }

  useEffect(() => {
    if (loading) {
      return
    }

    if (!user) {
      navigate("/login")
      return
    }

    fetchUserName()
  }, [user, loading])

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
    <Container className={classes.center}>
      <CustomAlert 
        open={error}
        handleClose={handleClose}
        severity="error"
        text="An error occured while fetching user data"
      />
      <Box className={classes.box}>
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
            className={classes.button}
            variant="contained"
            onClick={handleClickLogOut}
          >
            Log out
          </Button>
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
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  },
}))
