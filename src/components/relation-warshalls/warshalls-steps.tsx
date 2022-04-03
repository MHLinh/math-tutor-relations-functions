/**
 * This code uses following libraries: 
 * react, @mui/material @mui/styles, and @mui/icons-material.
 */
import React, { useState, useCallback } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import makeStyles from "@mui/styles/makeStyles"
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

  const hasPrev = round > 0
  const hasNext = round < maxRound

  const handlePrev = () => {
    if(hasPrev) {
      setRound(round - 1)
    }
  }

  const handleNext = () => {
    if(hasNext) {
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
        : <Stack 
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Stack 
              direction={small 
                ? "column"
                : "row"
              }
              spacing={small 
                ? 2
                : 3
              }
            >
              <Box className={classes.box}>
                <WarshallsRelationOutput
                  text="Initial relation"
                  matrix={steps[0]} 
                  type={outputType}
                />
              </Box>
              <Box className={classes.box}>
                <WarshallsRelationOutput
                  text="Final relation"
                  matrix={steps[maxRound - 1]} 
                  type={outputType}
                />
              </Box>
            </Stack>
            <Box>
              <RelationOutputSelection 
                selectedType={outputType}
                setSelectedType={wrapperSetOutputType}
              />
            </Box>
          </Stack>
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
              disabled={!hasPrev}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              onClick={handleNext}
              className={classes.button}
              disabled={!hasNext}
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
    width: theme.typography.pxToRem(124)
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
}))