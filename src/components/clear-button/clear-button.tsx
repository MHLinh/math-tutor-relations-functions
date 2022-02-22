import React, { useContext } from "react"
import {
  Button,
} from "@mui/material"
import { generateMatrix } from "utils"
import { MatrixContext } from "components/matrix-context/matrix-context"

/**
 * A button to clear the inputted relation.
 */
export function ClearButton() {
  const { matrix, setter } = useContext(MatrixContext)
  
  // Generate a new empty matrix and set it to be the current matrix
  const handleClick = () => {
    setter(generateMatrix(matrix.length))
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      Clear relation
    </Button>
  )
}
