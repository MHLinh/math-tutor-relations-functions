import React from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { isReflexive, isSymmetric, isTransitive } from "utils"

interface IRelationEquivalenceCheck {
 matrix: number[][] // Relation stored as matrix
}

/**
 * A component displaying which properties are missing 
 * for the relation to be an equivalence relation.
 */
export function RelationEquivalenceCheck(props: IRelationEquivalenceCheck) {
  const { matrix } = props

  const reflexive = isReflexive(matrix)
  const symmetric = isSymmetric(matrix)
  const transitive = isTransitive(matrix)
  const equivalenceRelation = reflexive && symmetric && transitive
  const missing: string[] = []
  let missingString = ""
  if(!equivalenceRelation) {
    if(!reflexive) {
      missing.push("reflexive")
    }

    if(!symmetric) {
      missing.push("symmetric")
    }

    if(!transitive) {
      missing.push("transitive")
    }

    missingString = missing.join(", ")
  }

  return (
    <Box>
      <Typography>
        A relation R on a set A is an EQUIVALENCE RELATION if it is reflexive, symmetric, and transitive.
        <br />
        {"Let A = {1, 2, 3, 4}"}
      </Typography>
      {equivalenceRelation
        ? <Typography>
          The above relation is an EQUIVALENCE RELATION.
        </Typography>
        : <Typography>
          The above relation is NOT AN EQUIVALENCE RELATION because it is not {missingString}.
        </Typography>
      }
    </Box>
  )
}