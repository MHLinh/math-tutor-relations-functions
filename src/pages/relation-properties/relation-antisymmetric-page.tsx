/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Container from "@mui/material/Container"
import makeStyles from "@mui/styles/makeStyles"
import { RelationAntisymmetric } from "components"

/**
 * Displays the page for studying the antisymmetric property.
 */
export function RelationAntisymmetricPage() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <RelationAntisymmetric />
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
}))
