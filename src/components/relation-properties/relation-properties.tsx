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
  generateMatrix, 
} from "utils"
import { paddingStyle } from "theme/styles"
import { IMatrixContext } from "components/matrix-context/matrix-context"
import { RelationOutput } from "components/relation-output/relation-output"
import { 
  relationOutputTypes, 
  RelationOutputSelection 
} from "components/relation-output/relation-output-selection"
import { RelationInput } from "components/relation-input/relation-input"
import { 
  relationInputTypes, 
  RelationInputSelection 
} from "components/relation-input/relation-input-selection"
import { ClearButtonProvider } from "components/clear-button/clear-button-provider"
import { SaveAndLoadRelation } from "components/database/save-and-load-relation"
import { RelationPropertiesTable } from "./relation-properties-table"

/**
 * A component displaying all the properties of the inputted relation.
 * Allows user to select input and output type of the relation.
 * Allows user to clear, save, and load the relation.
 */
export function RelationProperties() {
  const [relation, setRelation] = useState<number[][]>(generateMatrix(NUM_OF_ELEMENTS))
  const [outputType, setOutputType] = useState(relationOutputTypes[0].id)
  const [inputType, setInputType] = useState(relationInputTypes[0].id)
  const classes = useStyles()

  const wrapperSetRelation= useCallback((matrix: number[][]) => {
    setRelation(matrix)
  }, [setRelation])
  
  const wrapperSetOutputType= useCallback((type: string) => {
    setOutputType(type)
  }, [setOutputType])

  const wrapperSetInputType= useCallback((type: string) => {
    setInputType(type)
  }, [setInputType])

  const contextValue: IMatrixContext = useMemo(() => ({
    matrix: relation, 
    setter: wrapperSetRelation
  }), [relation])
 
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <RelationOutput 
          matrix={relation} 
          nodes={directedGraphNodes} 
          type={outputType}
        />
      </Box>
      <Box className={classes.box}>
        <RelationPropertiesTable matrix={relation} />
      </Box>
      <Box className={classes.box}>
        <RelationInput 
          matrixContextValue={contextValue}
          matrix={relation}
          type={inputType}
        />
      </Box>
      <Box className={classes.box}>
        <RelationOutputSelection 
          selectedType={outputType}
          setSelectedType={wrapperSetOutputType}
        />
      </Box>
      <Box className={classes.box}>
        <RelationInputSelection 
          selectedType={inputType}
          setSelectedType={wrapperSetInputType}
        />
      </Box>
      <Box className={classes.box}>
        <ClearButtonProvider matrixContextValue={contextValue} />
      </Box>
      <Box className={classes.box}>
        <SaveAndLoadRelation 
          matrixContextValue={contextValue}
          type="relation" 
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
