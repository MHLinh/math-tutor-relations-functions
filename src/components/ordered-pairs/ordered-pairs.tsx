import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { computeOrderedPairs } from "utils"

interface IOrderedPairs {
  matrix: number[][]
}

/**
 * A component displaying the relation as list of ordered pairs.
 * @param props -  matrix representing the relation
 */
export function OrderedPairs(props: IOrderedPairs) {
  const { matrix } = props
  const classes = useStyles()
  
  const pairs = computeOrderedPairs(matrix)
  const tuplePairs = pairs.map(([a, b]) => `(${a},${b})`)
  const stringPairs = tuplePairs.join(", ")
  const divide = tuplePairs.length > 8
  const middle = Math.ceil(tuplePairs.length / 2)
  const stringPairs1 = tuplePairs.slice(0, middle).join(", ")
  const stringPairs2 = tuplePairs.slice(-middle).join(", ")
  return (
    <Box>
      <Typography align="center" className={classes.text}>
        Relation as a set of ordered pairs:
      </Typography>
      {tuplePairs.length > 0
         ? <Typography align="center">
            {divide
              ? <span>{stringPairs1} <br/> {stringPairs2}</span>
              : stringPairs
            }
          </Typography>
         : <Typography align="center">
            Empty relation
          </Typography>
      }
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
 }))
 