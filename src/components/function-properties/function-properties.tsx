import React, { useState, useCallback, useEffect, useMemo } from "react"
import {
  Box,
  Container,
  Button
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { 
  NUM_OF_ELEMENTS,
  directedGraphNodes,
  generateRectMatrix, 
} from "utils"
import { paddingStyle } from "theme/styles"
import { MatrixContext, IMatrixContext } from "components/matrix-context/matrix-context"
import { ConnectedSets } from "components/connected-sets/connected-sets"
import { ClearButtonProvider } from "components/clear-button/clear-button-provider"
import { SaveAndLoadRelation } from "components/database/save-and-load-relation"
import { SetSliders } from "components/set-sliders/set-sliders"
import { FunctionPropertiesTable } from "./function-properties-table"

/**
 * A component displaying all the function properties of the inputted relation.
 * Allows user to clear, save, and load the relation.
 */
export function FunctionProperties() {
  const [xSize, setXSize] = useState(4)
  const [ySize, setYSize] = useState(4)
  const [relation, setRelation] = useState<number[][]>(generateRectMatrix(xSize, ySize))
  const classes = useStyles()

  const wrapperSetXSize= useCallback((value: number) => {
    setXSize(value)
  }, [setXSize])

  const wrapperSetYSize= useCallback((value: number) => {
    setYSize(value)
  }, [setYSize])

  const wrapperSetRelation= useCallback((matrix: number[][]) => {
    setRelation(matrix)
  }, [setRelation])
  
  const contextValue: IMatrixContext = useMemo(() => ({
    matrix: relation, 
    setter: wrapperSetRelation
  }), [relation])
 
  useEffect(() => {
    setRelation(generateRectMatrix(xSize, ySize))
  }, [xSize, ySize])


  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <FunctionPropertiesTable matrix={relation} />
      </Box>
      <Box className={classes.box}>
        <MatrixContext.Provider value={contextValue}>
          <ConnectedSets />
        </MatrixContext.Provider>
        <SetSliders 
          xSize={xSize}
          ySize={ySize}
          xSetter={wrapperSetXSize}
          ySetter={wrapperSetYSize}
        />
      </Box>
      <Box className={classes.box}>
        <ClearButtonProvider matrixContextValue={contextValue} />
      </Box>
      <Box className={classes.box}>
        <SaveAndLoadRelation 
          matrixContextValue={contextValue}
          type="function" 
        />
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  container: {
    ...paddingStyle,
  }
}))
