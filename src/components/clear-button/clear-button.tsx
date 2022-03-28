import React, { useContext } from "react"
import {
  Button,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { buttonStyle } from "theme"
import { generateMatrix } from "utils"
import { MatrixContext } from "components/matrix-context/matrix-context"

/**
 * A button to clear the inputted relation.
 */
export function ClearButton() {
  const { matrix, setter } = useContext(MatrixContext)
  const classes = useStyles()
  
  // Generate a new empty matrix and set it to be the current matrix
  const handleClick = () => {
    setter(generateMatrix(matrix.length))
  }

  return (
    <Button
      data-testid="clear-relation-button" 
      variant="contained" 
      onClick={handleClick}
      className={classes.button}
    >
      Clear relation
    </Button>
  )
}

const useStyles = makeStyles((theme: any) => ({
  button: {
    ...buttonStyle
  }
 }))
 