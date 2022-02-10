import React, { useState, useEffect, useContext } from "react"
import { 
  Button,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { MatrixContext } from "components/matrix-context/matrix-context"

interface IMatrixTapButton {
  rowIndex: number, // row index
  colIndex: number, // column index,
}
/**
 * A matrix button component having a value of 0 or 1.
 * Tapping the button changes the value.
 */
export function MatrixTapButton (props: IMatrixTapButton) {
  const { rowIndex, colIndex } = props
  const { matrix, setter } = useContext(MatrixContext)
  const [value, setValue] = useState(matrix[rowIndex][colIndex])
  const classes = useStyles()

  const handleClick = () => {
    const tempMatrix = [...matrix]
    if(value === 0) {
      setValue(1)
      tempMatrix[rowIndex][colIndex] = 1
    } else {
      setValue(0)
      tempMatrix[rowIndex][colIndex] = 0
    }
    setter(tempMatrix)
  }

  return (
    <Button 
      variant="contained" 
      onClick={handleClick}
      className={classes.button}
    >
      {value}
    </Button>
  )
}

const useStyles = makeStyles((theme: any) => ({
  button: {
    backgroundColor: theme.palette.neutral.main,
    color: theme.palette.common.black,
    "&:hover": {
      backgroundColor: theme.palette.neutral.darker,
      color: theme.palette.common.white
    },
    maxHeight: theme.typography.pxToRem(35),
    minHeight: theme.typography.pxToRem(35),
    maxWidth: theme.typography.pxToRem(35),
    minWidth: theme.typography.pxToRem(35),
  }
}))
