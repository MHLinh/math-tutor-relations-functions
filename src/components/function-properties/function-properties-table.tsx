import React from "react"
import {
  Box,
  Grid,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {
  isDomainMapped,
  isOneMapping,
  isOnto,
  isOneToOne,
  isIdentity
} from "utils"
import { palette, center } from "theme"

interface IFunctionPropertiesTable {
  matrix: number[][]  // Relation stored as matrix
}

/**
 * A component displaying the function properties of a relation.
 */
export function FunctionPropertiesTable(props: IFunctionPropertiesTable) {
  const { matrix } = props
  const classes = useStyles()

  const oneMapping = isOneMapping(matrix)

  const isFunction = isDomainMapped(matrix) && oneMapping

  const onto = isFunction && isOnto(matrix)

  const oneToOneValue = isOneToOne(matrix)
  const oneToOne = isFunction &&  oneToOneValue
  const manyToOne = isFunction && !oneToOneValue

  const identity = isFunction && isIdentity(matrix)

  const bijection = onto && oneToOne

  const manyToMany = !oneMapping && !oneToOneValue

  const properties = [
    { property: "Relation", status: true},
    { property: "Function", status: isFunction },
    { property: "Onto", status: onto },
    { property: "One-to-one", status: oneToOne },
    { property: "Bijection", status: bijection },
    { property: "Many-to-one", status: manyToOne },
    { property: "Many-to-many", status: manyToMany },
    { property: "Identity", status: identity },
  ]

  return (
    <Box>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          The properties of the relation/function:
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
 