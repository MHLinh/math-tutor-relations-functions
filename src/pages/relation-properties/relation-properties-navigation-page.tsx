/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { RelationPropertiesNavigation } from "components"

/**
 * Displays the page with navigation buttons for studying properties of a relation.
 */
export function RelationPropertiesNavigationPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationPropertiesNavigation />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
