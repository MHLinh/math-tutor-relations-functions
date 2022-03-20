import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { isReflexive, isAntisymmetric, isTransitive, isAllPairs } from "utils"

interface IRelationTotalOrderCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying which properties are missing 
 * for the relation to be a total order.
 */
export function RelationTotalOrderCheck(props: IRelationTotalOrderCheck) {
  const { matrix } = props

  const reflexive = isReflexive(matrix)
  const antisymmetric = isAntisymmetric(matrix)
  const transitive = isTransitive(matrix)
  const partialOrder = reflexive && antisymmetric && transitive
  const allPairs = isAllPairs(matrix)
  const totalOrder = partialOrder && allPairs

  const notPartialOrder = "it is not a partial order"
  const notAllPairs = "not for all a,b ∈ A, either (a,b) ∈ R or (b,a) ∈ R"
  let explanation = ""
  
  if(!totalOrder) {
    if(!partialOrder && !allPairs) {
      explanation = `${notPartialOrder} and\n${notAllPairs}`
    } else if (!partialOrder) {
      explanation = notPartialOrder
    } else {
      explanation = notAllPairs
    }
  }

  return (
    <Box>
      <Typography>
        A relation R on a set A is a TOTAL ORDER if it is a partial order and
        <br />
        for all a,b ∈ A, either (a,b) ∈ R or (b,a) ∈ R.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {totalOrder
        ? <Typography>
          The above relation is a TOTAL ORDER .
        </Typography>
        : <Typography sx={{ whiteSpace: "pre-line" }}>
          The above relation is NOT A TOTAL ORDER because {explanation}.
        </Typography>
      }
    </Box>
  )
}