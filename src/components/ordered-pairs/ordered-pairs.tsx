import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"

interface IOrderedPairs {
  pairs: number[][]
}

/**
 * A component displaying the relation as list of ordered pairs.
 * @param props - pairs of numbers that represent the relation
 */
export function OrderedPairs(props: IOrderedPairs) {
  const { pairs } = props
  const classes = useStyles()
  const tuplePairs = pairs.map(([a, b]) => `(${a},${b})`)
  const stringPairs = tuplePairs.join(", ")
  const divide = tuplePairs.length > 8
  const middle = Math.ceil(tuplePairs.length / 2)
  const stringPairs1 = tuplePairs.splice(0, middle).join(", ")
  const stringPairs2 = tuplePairs.splice(-middle).join(", ")

  return (
    <Box className={classes.box}>
      <Typography align="center" className={classes.text}>
        Relation as a set of ordered pairs:
      </Typography>
      <Typography align="center">
        {divide
          ? <span>{stringPairs1} <br/> {stringPairs2}</span>
          : stringPairs
        }
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.typography.pxToRem(10),
    paddingTop: theme.typography.pxToRem(10),
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(24),
    },
  }
 }))
 