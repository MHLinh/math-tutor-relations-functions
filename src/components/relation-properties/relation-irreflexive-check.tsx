import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { checkIrreflexive } from "utils"

interface IRelationIrreflexiveCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying whether the relation 
 * has pairs that make the relation not irreflexive.
 */
export function RelationIrreflexiveCheck(props: IRelationIrreflexiveCheck) {
  const { matrix } = props
  const pairs = checkIrreflexive(matrix)
  const irreflexive = pairs.length === 0
  const stringPairs = pairs.join(", ")
  const verb = pairs.length > 1
    ? "are"
    : "is"

  return (
    <Box>
      <Typography>
        A relation R on a set A is IRREFLEXIVE if (a,a) ∉ R for every element a ∈ A.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {irreflexive
        ? <Typography>
          The above relation is IRREFLEXIVE.
        </Typography>
        : <Typography>
          The above relation is NOT IRREFLEXIVE because {stringPairs} {verb} in the relation.
        </Typography>
      }
    </Box>
  )
}