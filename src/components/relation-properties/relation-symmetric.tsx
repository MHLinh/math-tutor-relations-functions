import React, { useState, useCallback, useMemo } from "react"
import {
  Box,
  Container
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
import { RelationInput } from "components/relation-input/relation-input"
import { 
  relationInputTypes, 
  RelationInputSelection 
} from "components/relation-input/relation-input-selection"
import { ClearButtonProvider } from "components/clear-button/clear-button-provider"
import { SaveAndLoadRelation } from "components/database/save-and-load-relation"
import { RelationSymmetricCheck } from "./relation-symmetric-check"

/**
 * A component displaying whether the relation is symmetric.
 * Displays missing pairs for the relation to be symmetric.
 * Allows user to choose input type for the relation.
 * Allows user to clear, save, and load the relation.
 */
export function RelationSymmetric() {
  const [relation, setRelation] = useState<number[][]>(generateMatrix(NUM_OF_ELEMENTS))
  const [inputType, setInputType] = useState(relationInputTypes[0].id)
  const classes = useStyles()

  const wrapperSetRelation= useCallback((matrix: number[][]) => {
    setRelation(matrix)
  }, [setRelation])
  
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
          type="pairs"
        />
      </Box>
      <Box className={classes.box}>
        <RelationSymmetricCheck matrix={relation} />
      </Box>
      <Box className={classes.box}>
        <RelationInput 
          matrixContextValue={contextValue}
          matrix={relation}
          numOfElements={NUM_OF_ELEMENTS}
          type={inputType}
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
          type="relation-properties-symmetric" 
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