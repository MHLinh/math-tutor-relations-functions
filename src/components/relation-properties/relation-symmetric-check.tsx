/**
 * This code uses following libraries: 
 * react and @mui/material.
 */
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { checkSymmetric } from "utils"

interface IRelationSymmetricCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying whether the relation 
 * is missing pairs for the relation to be symmetric.
 */
export function RelationSymmetricCheck(props: IRelationSymmetricCheck) {
  const { matrix } = props
  const missingPairs = checkSymmetric(matrix)
  const symmetric = missingPairs.length === 0
  const stringPairs = missingPairs.join(", ")
  const verb = missingPairs.length > 1
    ? "are"
    : "is"

  return (
    <Box>
      <Typography>
        A relation R on a set A is SYMMETRIC if (b,a) ∈ R whenever (a,b) ∈ R for all elements a,b ∈ A.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {symmetric
        ? <Typography>
          The above relation is SYMMETRIC.
        </Typography>
        : <Typography>
          The above relation is NOT SYMMETRIC because {stringPairs} {verb} missing.
        </Typography>
      }
    </Box>
  )
}