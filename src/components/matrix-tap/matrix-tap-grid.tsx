/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles and lodash.
 */
import React, { useContext } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { MatrixContext } from "components/matrix-context/matrix-context"
import { MatrixTapButton } from "./matrix-tap-button"


/**
 * A component displaying the matrix as a grid of buttons to tap
 * for inputting a relation.
 */
export function MatrixTapGrid() {
  const { matrix } = useContext(MatrixContext)
  const classes = useStyles()

  return (
    <Box data-testid="matrix-input">
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
