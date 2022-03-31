/**
 * This code uses following libraries: 
 * react and @mui/material.
 */
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { checkReflexive } from "utils"

interface IRelationReflexiveCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying whether the relation 
 * is missing pairs for the relation to be reflexive.
 */
export function RelationReflexiveCheck(props: IRelationReflexiveCheck) {
  const { matrix } = props
  const missingPairs = checkReflexive(matrix)
  const reflexive = missingPairs.length === 0
  const stringPairs = missingPairs.join(", ")
  const verb = missingPairs.length > 1
    ? "are"
    : "is"

  return (
    <Box>
      <Typography>
        A relation R on a set A is REFLEXIVE if (a,a) ∈ R for every element a ∈ A.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {reflexive
        ? <Typography>
          The above relation is REFLEXIVE.
        </Typography>
        : <Typography>
          The above relation is NOT REFLEXIVE because {stringPairs} {verb} missing.
        </Typography>
      }
    </Box>
  )
}