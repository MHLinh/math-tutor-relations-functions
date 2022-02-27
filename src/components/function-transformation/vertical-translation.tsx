import React, { useState } from "react"
import {
  Box,
  Container,
  Slider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import {  center, paddingStyle  } from "theme/styles"
import { generateSliderMarks } from "utils"
import FunctionPlotComponent from "components/function-plot/function-plot-component"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"

const step = 1
const min = -6
const max = 6
const marks = generateSliderMarks(step, min, max)

/**
 * A component displaying a graph of a function
 * which can be vertically translated.
 */
export function VerticalTranslation() {
  const [param, setParam] = useState(0)
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400
  
  const classes = useStyles()
  
  const equation = "$y = f(x) + C$"
  const paramValue = `$C = ${param}$`
  const options: FunctionPlotOptions = {
    target: "#plot",
    width: size,
    height: size,
    xAxis: {
      label: "X",
      domain: [min, max]
    },
    yAxis: {
      label: "Y",
      domain: [min, max]
    },
    disableZoom: true,
    grid: true,
    data: [
      {
        fn: `x^2 - 4 + ${param}`,
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
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Vertical translation of a function
        </Typography>
      </Box>
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
          <Typography align="left">
            Translate the function vertically by using the slider.
            <br />
            Positive constant translates the function upwards.
            <br />
            Negative constant translates the function downward. 
          </Typography>
        </Box>
      </Box>
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
  container: {
    ...paddingStyle,
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