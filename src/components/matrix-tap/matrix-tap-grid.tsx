import React from "react"
import {
  Grid
} from "@mui/material"
import { MatrixTapButton } from "./matrix-tap-button"

interface IMatrixTapGrid {
  matrix: number[][]
}

export function MatrixTapGrid(props: IMatrixTapGrid) {
  const { matrix } = props

  return (
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
  )
}
