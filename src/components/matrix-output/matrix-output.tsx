/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { center } from "theme"
import { Matrix } from "components/matrix/matrix"

interface IMatrixOutput {
  text: string,      // Header text
  matrix: number[][] // Relation stored as a matrix
}

/**
 * A component displaying the relation as a matrix.
 */
export function MatrixOutput(props: IMatrixOutput) {
  const { text, matrix } = props
  const classes = useStyles()

  return (
    <Box data-testid="matrix-output">
      <Typography align="center" className={classes.text}>
        {text}
      </Typography>
      <Box className={classes.center}>
        <Matrix matrix={matrix} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  center: {
    ...center,
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
 }))