import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { checkTransitive } from "utils"

interface IRelationTransitiveCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying whether the relation 
 * is missing pairs for the relation to be transitive.
 */
export function RelationTransitiveCheck(props: IRelationTransitiveCheck) {
  const { matrix } = props
  const missingPairs = checkTransitive(matrix)
  const transitive = missingPairs.length === 0
  const stringPairs = missingPairs.join(", ")
  const verb = missingPairs.length > 1
    ? "are"
    : "is"

  return (
    <Box>
      <Typography>
        A relation R on a set A is TRANSITIVE if both (a,b) ∈ R  and (b,c) ∈ R then (a,c) ∈ R for all elements a,b,c ∈ A.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {transitive
        ? <Typography>
          The above relation is TRANSITIVE.
        </Typography>
        : <Typography>
          The above relation is NOT TRANSITIVE because {stringPairs} {verb} missing.
        </Typography>
      }
    </Box>
  )
}