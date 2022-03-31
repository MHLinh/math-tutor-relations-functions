/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
 import React from "react"
 import Box from "@mui/material/Box"
 import Container from "@mui/material/Container"
 import makeStyles from "@mui/styles/makeStyles"
import { 
  RelationNavigation,
  FunctionNavigation
} from "components"

/**
 * Displays the home page of the application.
 * Display the navigation buttons for studying the topics.
 */
export function HomePage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <RelationNavigation />
      </Box>
      <Box className={classes.box}>
        <FunctionNavigation />
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(3),
  },
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
