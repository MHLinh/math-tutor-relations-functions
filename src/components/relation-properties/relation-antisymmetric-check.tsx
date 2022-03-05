import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { checkAntisymmetric } from "utils"

interface IRelationAntisymmetricCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying whether the relation 
 * has pairs that make the relation not antisymmetric.
 */
export function RelationAntisymmetricCheck(props: IRelationAntisymmetricCheck) {
  const { matrix } = props
  const pairs = checkAntisymmetric(matrix)
  const antisymmetric = pairs.length === 0
  const stringPairs = pairs.join(", ")
  const verb = pairs.length > 1
    ? "are "
    : "is "

  return (
    <Box>
      <Typography>
        A relation R on a set A is ANTISYMMETRIC if (a,b) and (b,a)
        are not both in R unless a = b, for all elements a,b ∈ A.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {antisymmetric
        ? <Typography>
          The above relation is ANTISYMMETRIC.
        </Typography>
        : <Typography>
          The above relation is NOT ANTISYMMETRIC because {stringPairs} {verb} 
          in the relation at the same time.
        </Typography>
      }
    </Box>
  )
}