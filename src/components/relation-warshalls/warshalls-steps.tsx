import React, { useState } from "react"
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { WarshallsMatrix } from "components/matrix/warshalls-matrix"
import { Matrix } from "components/matrix/matrix"

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
  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  // Steps contains initial matrix + matrices resulting from the algorithm.
  // To get the max index we need to subtract 2.
  const maxRound = steps.length - 2
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
        <Typography align="center" className={classes.text}>
          Round {round + 1}
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Grid 
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
      </Box>
      <Box className={classes.box}>
        <Grid 
          container 
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