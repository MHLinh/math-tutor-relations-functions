import React, { useState, useCallback, useMemo } from "react"
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { 
  NUM_OF_ELEMENTS,
  generateMatrix,
  computeWarshalls 
} from "utils"
import { paddingStyle, buttonStyle } from "theme"
import { IMatrixContext } from "components/matrix-context/matrix-context"
import { RelationInput } from "components/relation-input/relation-input"
import { 
  relationInputTypes, 
  RelationInputSelection 
} from "components/relation-input/relation-input-selection"
import { ClearButtonProvider } from "components/clear-button/clear-button-provider"
import { RelationDataService } from "components/database/relation-data-service"
import { WarshallsSteps } from "./warshalls-steps"

const emptyRelation = generateMatrix(NUM_OF_ELEMENTS)

/**
 * A component displaying the input and steps in the Warshall's algorithm 
 * for computing the transitive closure.
 * Allows user to select type of input.
 * Allows user to clear, save, and load the relation.
 */
export function RelationWarshalls() {
  const [relation, setRelation] = useState<number[][]>(emptyRelation)
  const [inputType, setInputType] = useState(relationInputTypes[0].id)
  const [computing, setComputing] = useState(false)
  const [steps, setSteps] = useState<number[][][]>([])
  const classes = useStyles()
  const { breakpoints } = useTheme()
  const medium = useMediaQuery(breakpoints.down("md"))

  const wrapperSetRelation = useCallback((matrix: number[][]) => {
    setRelation(matrix)
  }, [setRelation])
  
  const wrapperSetInputType = useCallback((type: string) => {
    setInputType(type)
  }, [setInputType])

  const contextValue: IMatrixContext = useMemo(() => ({
    matrix: relation, 
    setter: wrapperSetRelation
  }), [relation])
  
  const handleCompute = () => {
    setSteps(computeWarshalls(relation))
    setComputing(true)
    
  }

  const handleBackToInput = () => {
    setComputing(false)
    setSteps([])
  }

  const handleReset = () => {
    setComputing(false)
    setSteps([])
    setRelation(emptyRelation)
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Warshall&apos;s algorithm for computing transitive closure
        </Typography>
      </Box>
      {!computing
      ? <Box>
          <Box className={classes.box}>
            <RelationInput 
              matrixContextValue={contextValue}
              matrix={relation}
              type={inputType}
            />
          </Box>
          <Grid
            container
            justifyContent="center"
            direction={medium 
              ? "column"
              : "row"
            }
            spacing={medium 
              ? 0
              : 1
            }
          >
            <Grid 
              container
              item
              justifyContent="center"
              md={6}
            >
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
              <Button 
                variant="contained" 
                onClick={handleCompute}
                className={classes.button}
              >
                Compute transitive closure
              </Button>
            </Box>
            </Grid>
            <Grid 
              container
              item
              justifyContent="center"
              md={6}
            >
              <RelationDataService 
                matrixContextValue={contextValue}
                type="relation" 
              />
            </Grid>
          </Grid>
        </Box>
      : <Box>
          <Box className={classes.box}>
            <WarshallsSteps steps={steps}/>
          </Box>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center" 
            spacing={2}
          >
            <Grid item> 
              <Button 
                variant="contained" 
                onClick={handleBackToInput}
                className={classes.button}
              >
                Back to input
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                onClick={handleReset}
                className={classes.button}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Box>
      }
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  button: {
    ...buttonStyle
  },
  container: {
    ...paddingStyle,
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
}))
