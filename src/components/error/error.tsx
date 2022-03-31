/**
 * This code uses following libraries: 
 * react, react-router-dom, @mui/material, and @mui/styles.
 */
import React from "react"
import { NavLink } from "react-router-dom"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { center } from "theme/styles"

/**
 * A component displaying error message for invalid page.
 */
export function Error() {
  const classes = useStyles()

  return (
    <Container className={classes.center}>
      <Box className={classes.box}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Typography align="center" className={classes.text}>
            Oops! This page does not exist.
          </Typography>
  
          <Button
            variant="contained"
            component={NavLink}
            to="/"
            className={classes.button}
          >
              Go to homepage
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
      width: theme.typography.pxToRem(400)
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
