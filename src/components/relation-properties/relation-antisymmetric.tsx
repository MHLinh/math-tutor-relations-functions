import React, { useState, useCallback, useMemo } from "react"
import {
  Box,
  Container
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { 
  NUM_OF_ELEMENTS,
  generateMatrix, 
} from "utils"
import { paddingStyle } from "theme/styles"
import { IMatrixContext } from "components/matrix-context/matrix-context"
import { RelationOutput } from "components/relation-output/relation-output"
import { relationOutputTypes } from "components/relation-output/relation-output-selection"
import { RelationInput } from "components/relation-input/relation-input"
import {  relationInputTypes} from "components/relation-input/relation-input-selection"
import { RelationButtons } from "components/relation-buttons/relation-buttons"
import { RelationAntisymmetricCheck } from "./relation-antisymmetric-check"

/**
 * A component displaying whether the relation is antisymmetric.
 * Displays pairs that make the relation not antisymmetric.
 * Allows user to choose input type for the relation.
 * Allows user to clear, save, and load the relation.
 */
export function RelationAntisymmetric() {
  const [relation, setRelation] = useState<number[][]>(generateMatrix(NUM_OF_ELEMENTS))
  const [outputType, setOutputType] = useState(relationOutputTypes[1].id)
  const [inputType, setInputType] = useState(relationInputTypes[0].id)
  const classes = useStyles()

  const wrapperSetRelation = useCallback((matrix: number[][]) => {
    setRelation(matrix)
  }, [setRelation])
  
  const wrapperSetOutputType = useCallback((type: string) => {
    setOutputType(type)
  }, [setOutputType])

  const wrapperSetInputType = useCallback((type: string) => {
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
          type={outputType}
        />
      </Box>
      <Box className={classes.box}>
        <RelationAntisymmetricCheck matrix={relation} />
      </Box>
      <Box className={classes.box}>
        <RelationInput 
          matrixContextValue={contextValue}
          matrix={relation}
          type={inputType}
        />
      </Box>
      <Box className={classes.box}>
        <RelationButtons 
          selectedOutputType= {outputType}
          setSelectedOutputType={wrapperSetOutputType}
          selectedInputType={inputType}
          setSelectedInputType={wrapperSetInputType}
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
