import React from "react"
import {
  Box, 
  Grid,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { MatrixTapButton } from "./matrix-tap-button"

interface IMatrixTapGrid {
  matrix: number[][]
}

/**
 * A component displaying the matrix as a grid of buttons to tap
 * for inputting a relation.
 * @param props - a matrix for generating the grid
 */
export function MatrixTapGrid(props: IMatrixTapGrid) {
  const { matrix } = props
  const classes = useStyles()

  return (
    <Box>
      <Typography align="center" className={classes.text}>
        Tap the buttons to modify the relation
      </Typography>
      <Grid container spacing={1}>
        {matrix.map((row, rowIndex) => (
          <Grid key={rowIndex} container item direction="row" alignItems="center" justifyContent="center" spacing={1}>
            {row.map((col, colIndex) => (
              <Grid key={`${rowIndex}-${colIndex}`} item>
                <MatrixTapButton
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
 }))
