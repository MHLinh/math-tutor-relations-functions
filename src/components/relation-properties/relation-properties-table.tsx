import React from "react"
import {
  Box,
  Grid,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {
  isReflexive,
  isIrreflexive,
  isSymmetric,
  isAntisymmetric,
  isTransitive,
  isAllPairs
} from "utils"
import { palette, center } from "theme"

interface IRelationPropertiesTable {
  matrix: number[][]  // Relation stored as matrix
}

/**
 * A component displaying the properties of a relation.
 */
export function RelationPropertiesTable(props: IRelationPropertiesTable) {
  const { matrix } = props
  const classes = useStyles()

  const reflexive = isReflexive(matrix)
  const irreflexive = isIrreflexive(matrix)
  const symmetric = isSymmetric(matrix)
  const antisymmetric = isAntisymmetric(matrix)
  const transitive = isTransitive(matrix)
  const equivalenceRelation = reflexive && symmetric && transitive
  const partialOrder = reflexive && antisymmetric && transitive
  const totalOrder  = partialOrder && isAllPairs(matrix)

  const properties = [
    { property: "Reflexive", status: reflexive},
    { property: "Irreflexive", status: irreflexive },
    { property: "Symmetric", status: symmetric },
    { property: "Antisymmetric", status: antisymmetric },
    { property: "Transitive", status: transitive },
    { property: "Equivalence relation", status: equivalenceRelation },
    { property: "Partial order", status: partialOrder },
    { property: "Total order", status: totalOrder },
  ]

  return (
    <Box>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          The properties of the above relation:
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {properties.map(({ property, status }) => (
          <Grid item key={property} xs={6}>
            <Box 
              className={classes.property}
              sx={{
                backgroundColor: status 
                  ? palette.green
                  : palette.red
              }}
            >
              <Typography align="center" className={classes.propertyText}>
                {property}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1)
  },
  property: {
    ...center,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      height: theme.typography.pxToRem(40),
    },
  },
  propertyText: {
    fontSize: theme.typography.pxToRem(12),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
 }))
 