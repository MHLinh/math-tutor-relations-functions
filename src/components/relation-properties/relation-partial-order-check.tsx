import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { isReflexive, isAntisymmetric, isTransitive } from "utils"

interface IRelationPartialOrderCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying which properties are missing 
 * for the relation to be a partial order.
 */
export function RelationPartialOrderCheck(props: IRelationPartialOrderCheck) {
  const { matrix } = props

  const reflexive = isReflexive(matrix)
  const antisymmetric = isAntisymmetric(matrix)
  const transitive = isTransitive(matrix)
  const partialOrder = reflexive && antisymmetric && transitive
  const missing: string[] = []
  let missingString = ""
  if(!partialOrder) {
    if(!reflexive) {
      missing.push("reflexive")
    }

    if(!antisymmetric) {
      missing.push("antisymmetric")
    }

    if(!transitive) {
      missing.push("transitive")
    }

    missingString = missing.join(", ")
  }

  return (
    <Box>
      <Typography>
        A relation R on a set A is a PARTIAL ORDER if it is reflexive, antisymmetric, and transitive.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {partialOrder
        ? <Typography>
          The above relation is a PARTIAL ORDER .
        </Typography>
        : <Typography>
          The above relation is NOT A PARTIAL ORDER because it is not {missingString}.
        </Typography>
      }
    </Box>
  )
}