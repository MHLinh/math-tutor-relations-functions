import React from "react"
import {
  Box,
  Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { center } from "theme"
import { Matrix } from "components/matrix/matrix"

interface IMatrixOutput {
  matrix: number[][] // Relation stored as a matrix
}

/**
 * A component displaying the relation as a matrix.
 */
export function MatrixOutput(props: IMatrixOutput) {
  const { matrix } = props
  const classes = useStyles()

  return (
    <Box>
      <Typography align="center" className={classes.text}>
        Relation as a matrix:
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