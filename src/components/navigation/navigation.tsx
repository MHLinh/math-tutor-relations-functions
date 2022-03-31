/**
 * This code uses following libraries: 
 * react, react-router-dom, @mui/material, and @mui/styles.
 */
import React from "react"
import { NavLink } from "react-router-dom"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"

interface Path {
  name: string,
  path: string
}

interface INavigation {
  text: string,
  paths: Path[]
}

/**
 * A component displaying buttons for navigating to different pages.
 */
export function Navigation(props: INavigation) {
  const { text, paths } = props
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Box data-testid="navigation-text">
        <Typography align="center" className={classes.text}>
          {text}
        </Typography>
      </Box>
      <Grid 
        container 
        direction="row" 
        className={classes.grid}
      >
        {paths.map(({ name, path }) => (
          <Grid 
            container 
            item 
            key={name} 
            justifyContent="center"
            alignItems="center"
            xs = {6}
            className={classes.gridItem}
          >
            <Button
              data-testid={path.substring(1)}
              variant="contained"
              component={NavLink}
              to={path}
              className={classes.button}
            >
              <Typography align="center" className={classes.buttonText}>
                {name}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  button: {
    height: 70,
    width: 300,
  },
  buttonText: {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(10),
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.pxToRem(14),
    },
  },
  container: {
    paddingLeft: "10%",
    paddingRight: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  grid: {
    [theme.breakpoints.up("sm")]: {
      width: "50vw"
    },
    [theme.breakpoints.up("md")]: {
      width: theme.typography.pxToRem(600),
    },
  },
  gridItem: {
    padding: theme.spacing(1)
  },
  text: {
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(24),
    },
  }
}))
