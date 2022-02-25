import React, { useState, useCallback } from "react"
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { WarshallsMatrix } from "components/matrix/warshalls-matrix"
import { Matrix } from "components/matrix/matrix"
import { WarshallsRelationOutput } from "components/relation-output/warshalls-relation-output"
import { 
  relationOutputTypes, 
  RelationOutputSelection 
} from "components/relation-output/relation-output-selection"
import { WarshallsInfo } from "./warshalls-info"

interface IWarshallsSteps {
  steps: number[][][] // A list of relations stored as matrices
}

/**
 * A component displaying steps in the Warshall's algorithm 
 * for computing the transitive closure.
 */
export function WarshallsSteps(props: IWarshallsSteps) {
  const { steps } = props
  const [round, setRound] = useState(0)
  const [outputType, setOutputType] = useState(relationOutputTypes[0].id)

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const wrapperSetOutputType = useCallback((type: string) => {
    setOutputType(type)
  }, [setOutputType])

  // Steps contains initial matrix and matrices resulting from the algorithm
  const maxRound = steps.length - 1
  const handlePrev = () => {
    if(round > 0) {
      setRound(round - 1)
    }
  }

  const handleNext = () => {
    if(round < maxRound) {
      setRound(round + 1)
    }
  }

  return (
    <Box>
      <Box className={classes.box}>
        <Stack direction="row-reverse">
          <WarshallsInfo />
        </Stack>
        {round !== maxRound
          ? <Typography align="center" className={classes.text}>
              Round {round + 1}
            </Typography>
          : null
        }
      </Box>
      <Box className={classes.boxGrid}>
        {round !== maxRound
        ?  <Grid 
              container 
              direction={small 
                ? "column"
                : "row"
              }
              justifyContent="center"
              alignItems="center" 
              spacing={1}
            >
              <Grid item>
                <WarshallsMatrix matrix={steps[round]} round={round} />
              </Grid>
              <Grid item>
                {small 
                  ? <ArrowDownwardIcon fontSize="large"/>
                  : <ArrowForwardIcon fontSize="large"/>
                }
              </Grid>
              <Grid item>
                <Matrix matrix={steps[round + 1]} />
              </Grid>
            </Grid>
        : <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center" 
          spacing={1}
        >
          <Grid 
            container
            item 
            direction={small 
              ? "column"
              : "row"
            }
          >
            <Grid item xs={6}>
              <Box className={classes.box}>
                <WarshallsRelationOutput
                  text="Initial relation"
                  matrix={steps[0]} 
                  type={outputType}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.box}>
                <WarshallsRelationOutput
                  text="Final relation"
                  matrix={steps[maxRound - 1]} 
                  type={outputType}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box className={classes.box}>
              <RelationOutputSelection 
                selectedType={outputType}
                setSelectedType={wrapperSetOutputType}
              />
            </Box>
          </Grid>
          </Grid>
        }
      </Box>
      <Box className={classes.box}>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center" 
          spacing={1}
        >
          <Grid item>
            <Button 
              variant="contained" 
              onClick={handlePrev}
              className={classes.button}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  boxGrid: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  button: {
    width: theme.typography.pxToRem(100)
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
}))