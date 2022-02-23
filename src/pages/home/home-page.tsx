import React from "react"
import { 
  Container,
  Box
} from "@mui/material"
import { makeStyles } from "@mui/styles"
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
    <Container>
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
}))
