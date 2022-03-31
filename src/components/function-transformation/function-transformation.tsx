/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles,
 * katex, and react-latex-next.
 */
import React, { useState, useCallback } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"
import makeStyles from "@mui/styles/makeStyles"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center } from "theme/styles"
import { generateSliderMarks, getFunctionEquation } from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { FunctionEquationSelection } from "components/function-equation/function-equation-selection"
import { Equation } from "components/function-equation/function-equation-types"

// Slider and plot settings.
const step1 = 0.2
const min1 = 0
const max1 = 2
const marks1 = generateSliderMarks(step1, min1, max1)

const step2 = 1
const min2 = -6
const max2 = 6
const marks2 = generateSliderMarks(step2, min2, max2)

/**
 * A component displaying a graph of a function
 * which can be transformed.
 */
export function FunctionTransformation() {
  const [params, setParams] = useState({
    a: 1,
    b: 1,
    c: 0,
    d: 0
  })
  const [xReflect, setXReflect] = useState(1)
  const [yReflect, setYReflect] = useState(1)
  const [functionType, setFunctionType] = useState(Equation.Linear)

  
  const wrapperSetFunctionType = useCallback((type: Equation) => {
    setFunctionType(type)
  }, [setFunctionType])

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400
  
  const xSign = xReflect === 1
                  ? ""
                  : "-"
  const ySign = yReflect === 1
                  ? ""
                  : "-"

  const equation = `$y = ${xSign}A \\cdot f(${ySign}B \\cdot (x + C)) + D$`
  const paramA = `$A = ${params.a}$`
  const paramB = `$B = ${params.b}$`
  const paramC = `$C = ${params.c}$`
  const paramD = `$D = ${params.d}$`

  const plotEquation = getFunctionEquation(
    functionType, params.a, params.b, params.c, params.d, xSign, ySign
  )

  const options: FunctionPlotOptions = {
    target: "#plot",
    width: size,
    height: size,
    xAxis: {
      label: "X",
      domain: [min2, max2]
    },
    yAxis: {
      label: "Y",
      domain: [min2, max2]
    },
    disableZoom: true,
    grid: true,
    data: [
      {
        fn: plotEquation,
        graphType: "polyline"
      }
    ]
  }
  
  const handleChangeA = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setParams({...params, a: value as number})
  }

  const handleChangeB = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setParams({...params, b: value as number})
  }

  const handleChangeC = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setParams({...params, c: value as number})
  }

  const handleChangeD = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setParams({...params, d: value as number})
  }

  const handleXReflect = () => {
    setXReflect(-xReflect)
  }

  const handleYReflect = () => {
    setYReflect(-yReflect)
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Function transformation
        </Typography>
      </Box>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        {/* Function graph, equation, and parameter values. */}
        <Grid item md={6}>
          <Box className={classes.center}>
            <FunctionPlot 
              options={options}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="center" className={classes.latex}>
              <Latex>{equation}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{paramA}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{paramB}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{paramC}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{paramD}</Latex>
            </Typography>
          </Box>
        </Grid>
        {/* Function transformation controls. */}
        <Grid item md={6}>
          <Box className={classes.centerBox}>
            <Box className={classes.slider}>
              <Typography>
                Constant A value
              </Typography>
              <Slider 
                aria-label="a-value"
                value={params.a}
                onChangeCommitted={handleChangeA}
                step={step1}
                min={min1}
                max={max1}
                marks={marks1}
              />
              <Typography>
                Constant B value
              </Typography>
              <Slider 
                aria-label="b-value"
                value={params.b}
                onChangeCommitted={handleChangeB}
                step={step1}
                min={min1}
                max={max1}
                marks={marks1}
              />
              <Typography>
                Constant C value
              </Typography>
              <Slider 
                aria-label="c-value"
                value={params.c}
                onChangeCommitted={handleChangeC}
                step={step2}
                min={min2}
                max={max2}
                marks={marks2}
              />
              <Typography>
                Constant D value
              </Typography>
              <Slider 
                aria-label="d-value"
                value={params.d}
                onChangeCommitted={handleChangeD}
                step={step2}
                min={min2}
                max={max2}
                marks={marks2}
              />
            </Box>
          </Box>
          <Box className={classes.box}>
            <Grid 
              container
              direction="row"
              justifyContent="center"
              alignItems="center" 
              spacing={1}
            >
              <Grid item>
                <Button 
                  variant="contained" 
                  onClick={handleXReflect}
                >
                  Reflect along x-axis
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  onClick={handleYReflect}
                >
                  Reflect along y-axis
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.centerBox}>
            <FunctionEquationSelection
              selectedType={functionType}
              setSelectedType={wrapperSetFunctionType}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="left">
              Transform the function using the sliders and buttons.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  center: {
    ...center,
  },
  centerBox: {
    ...center,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  latex: {
    fontSize: theme.typography.pxToRem(16),
    paddingBottom: theme.spacing(1),
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
  slider: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(500),
    },
  },
}))