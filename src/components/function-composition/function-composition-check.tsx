import React, { useState } from "react"
import {
  Box,
  Container,
  Grid,
  FormControl,
  MenuItem,
  Typography,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import _ from "lodash"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import {  center, paddingStyle  } from "theme/styles"
import { isCompositionValid } from "utils"
import { NumberSet } from "./function-composition-types"

const setSymbols = [
  { id: NumberSet.Natural, symbol: "$\\mathbb{N}$" },
  { id: NumberSet.IntegersPositive, symbol: "$\\mathbb{Z^+}$" },
  { id: NumberSet.IntegersNegative, symbol: "$\\mathbb{Z^-}$" },
  { id: NumberSet.Integers, symbol: "$\\mathbb{Z}$" },
  { id: NumberSet.RationalPositive, symbol:"$\\mathbb{Q^+}$" },
  { id: NumberSet.RationalNegative, symbol:"$\\mathbb{Q^-}$" },
  { id: NumberSet.Rational, symbol: "$\\mathbb{Q}$" },
  { id: NumberSet.RealPositive, symbol: "$\\mathbb{R^+}$" },
  { id: NumberSet.RealNegative, symbol:"$\\mathbb{R^-}$" },
  { id: NumberSet.Real, symbol:"$\\mathbb{R}$" },
]

const arrow = "$\\rightarrow$"

/**
 * A component for checking if two functions 
 * can be composed given domains and codomains.
 */
export function FunctionCompositionCheck() {
  const [domainF, setDomainF] = useState(NumberSet.Natural)
  const [codomainF, setCodomainF] = useState(NumberSet.Natural)
  const [domainG, setDomainG] = useState(NumberSet.Natural)
  const [codomainG, setCodomainG] = useState(NumberSet.Natural)

  const classes = useStyles()

  const validCompositionFG = isCompositionValid(domainF, codomainG)
  const validCompositionGF = isCompositionValid(domainG, codomainF)
  
  const compositionFG = validCompositionFG
                          ? "$(f \\circ g)(x)$ is a valid composition"
                          : "$(f \\circ g)(x)$ is an invalid composition"

  const compositionGF = validCompositionGF
                          ? "$(g \\circ f)(x)$ is a valid composition"
                          : "$(g \\circ f)(x)$ is an invalid composition"

  const handleChangeDomainF = (event: SelectChangeEvent) => {
    setDomainF(event.target.value as NumberSet)
  }

  const handleChangeCodomainF = (event: SelectChangeEvent) => {
    setCodomainF(event.target.value as NumberSet)
  }
  
  const handleChangeDomainG = (event: SelectChangeEvent) => {
    setDomainG(event.target.value as NumberSet)
  }

  const handleChangeCodomainG = (event: SelectChangeEvent) => {
    setCodomainG(event.target.value as NumberSet)
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Function composition check
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography>
          <Latex>
            Function $f$ and $g$ can be composed $(f \circ g)(x)$, 
            if the codomain of function $g$ is a subset of the domain of $f$
          </Latex>.
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography>
          Change the domain and codomain of the functions to see if a composition is possible.
        </Typography>
      </Box>
      <Box className={classes.box}>
        {/* Domain and codomain inputs */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid 
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Typography className={classes.function}>
                <Latex>$f:$</Latex>
              </Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <Select
                  id="domain-f-select"
                  value={domainF}
                  onChange={handleChangeDomainF}
                >
                  {setSymbols.map(({ id, symbol}) => (
                    <MenuItem value={id} key={id}>
                      <Latex>{symbol}</Latex>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography align="center" className={classes.arrow}>
                <Latex>{arrow}</Latex>
              </Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <Select
                  id="codomain-f-select"
                  value={codomainF}
                  onChange={handleChangeCodomainF}
                >
                  {setSymbols.map(({ id, symbol}) => (
                    <MenuItem value={id} key={id}>
                      <Latex>{symbol}</Latex>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid 
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Typography className={classes.function}>
                <Latex>$g:$</Latex>
              </Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <Select
                  id="domain-g-select"
                  value={domainG}
                  onChange={handleChangeDomainG}
                >
                  {setSymbols.map(({ id, symbol}) => (
                    <MenuItem value={id} key={id}>
                      <Latex>{symbol}</Latex>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
            <Typography align="center" className={classes.arrow}>
                <Latex>{arrow}</Latex>
              </Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <Select
                  id="codomain-g-select"
                  value={codomainG}
                  onChange={handleChangeCodomainG}
                >
                  {setSymbols.map(({ id, symbol}) => (
                    <MenuItem value={id} key={id}>
                      <Latex>{symbol}</Latex>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.box}>
        <Typography align="center" className={classes.composition}>
          <Latex>{compositionFG}</Latex>
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography align="center" className={classes.composition}>
          <Latex>{compositionGF}</Latex>
        </Typography>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  arrow: {
    fontSize: theme.typography.pxToRem(24),
  },
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  center: {
    ...center,
  },
  container: {
    ...paddingStyle,
  },
  function: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(20),
    },
  },
  latex: {
    fontSize: theme.typography.pxToRem(16),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  },
  composition: {
    fontSize: theme.typography.pxToRem(16),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(18),
    },
  },
}))
