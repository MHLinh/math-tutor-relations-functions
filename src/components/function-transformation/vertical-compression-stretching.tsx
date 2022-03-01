import React, { useState, useCallback } from "react"
import {
  Box,
  Container,
  Grid,
  Slider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center } from "theme/styles"
import { generateSliderMarks, getFunctionEquation } from "utils"
import FunctionPlotComponent from "components/function-plot/function-plot-component"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { FunctionEquationSelection } from "components/function-equation/function-equation-selection"
import { Equation } from "components/function-equation/function-equation-types"

const step = 0.2
const min = 0
const max = 2
const marks = generateSliderMarks(step, min, max)

const plotMin = -6
const plotMax = 6

/**
 * A component displaying a graph of a function
 * which can be vertically compressed or stretched.
 */
export function VerticalCompressionStretching() {
  const [param, setParam] = useState(1)
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
    
  const equation = "$y = C \\cdot f(x)$"
  const paramValue = `$C = ${param}$`

  const plotEquation = getFunctionEquation(
    functionType, param, 1, 0, 0, "", ""
  )

  const options: FunctionPlotOptions = {
    target: "#plot",
    width: size,
    height: size,
    xAxis: {
      label: "X",
      domain: [plotMin, plotMax]
    },
    yAxis: {
      label: "Y",
      domain: [plotMin, plotMax]
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
  
  
  const handleChange = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setParam(value as number)
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Vertical compression/stretching of a function
        </Typography>
      </Box>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        <Grid item md={6}>
          <Box className={classes.center}>
            <FunctionPlotComponent 
              options={options}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="center" className={classes.latex}>
              <Latex>{equation}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{paramValue}</Latex>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box className={classes.center}>
            <Box className={classes.slider}>
              <Typography>
                Constant C value
              </Typography>
              <Slider 
                aria-label="c-value"
                value={param}
                onChangeCommitted={handleChange}
                step={step}
                min={min}
                max={max}
                marks={marks}
              />
            </Box>
          </Box>
          <Box className={classes.centerBox}>
            <FunctionEquationSelection
              selectedType={functionType}
              setSelectedType={wrapperSetFunctionType}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="left">
              Compress or stretch the function vertically by using the slider.
              <br />
              {"C > 1"} stretches the function.
              <br />
              {"0 < C < 1"} compresses the function. 
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