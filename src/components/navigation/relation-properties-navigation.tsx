import React from "react"
import { NavLink } from "react-router-dom"
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"

const paths = [
  { name: "All properties", path: "/relation-properties-all" },
  { name: "Reflexive relation", path: "/relation-properties-reflexive" },
  { name: "Ireflexive relation", path: "/relation-properties-irreflexive" },
  { name: "Symmetric relation", path: "/relation-properties-symmetric" },
  { name: "Antisymmetric relation", path: "/relation-properties-antisymmetric" },
  { name: "Transitive relation", path: "/relation-properties-transitive" },
]

/**
 * A component displaying buttons for navigating to
 * different pages to study properties of a relation.
 */
export function RelationPropertiesNavigation() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Box>
        <Typography align="center" className={classes.text}>
          Study properties of a relation
        </Typography>
      </Box>
      <Grid 
        container 
        direction="row" 
        justifyContent="center"
        alignItems="center"
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
              variant="contained"
              component={NavLink}
              to={path}
              className={classes.button}
            >
              {name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  button: {
    height: 60,
    width: 300,
    fontSize: theme.typography.pxToRem(12),
    [theme.breakpoints.up("mdp")]: {
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