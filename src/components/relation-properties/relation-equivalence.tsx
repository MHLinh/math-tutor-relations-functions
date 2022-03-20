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
import { DataServiceRelation } from "components/database/data-service-relation"
import { RelationEquivalenceCheck } from "./relation-equivalence-check"

/**
 * A component displaying whether the relation is an equivalence relation.
 * Displays missing properties for it to be an equivalence relation.
 * Allows user to choose input type for the relation.
 * Allows user to clear, save, and load the relation.
 */
export function RelationEquivalence() {
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
        <RelationEquivalenceCheck matrix={relation} />
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
        <DataServiceRelation 
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