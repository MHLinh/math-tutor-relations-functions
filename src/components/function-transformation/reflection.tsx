import React, { useState } from "react"
import {
  Box,
  Button,
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
 * which can be reflected along the x-axis and y-axis.
 */
export function Reflection() {
  const [xReflect, setXReflect] = useState(1)
  const [yReflect, setYReflect] = useState(1)

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400
  
  const signX = xReflect === 1
                  ? ""
                  : "-"
  const ySign = yReflect === 1
                  ? ""
                  : "-"
  const equation = `$y = ${signX}f(${ySign}x) + C$`

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
        fn: `${xReflect}((${yReflect}x-1)^3 - 1)`,
        graphType: "polyline"
      }
    ]
  }
  
  
  const handleXReflect = () => {
    setXReflect(-xReflect)
  }

  const handleYReflect = () => {
    setYReflect(-yReflect)
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Reflection along the x-axis and y-axis
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
      </Box>
      <Box className={classes.buttonBox}>
        <Button 
          variant="contained" 
          onClick={handleXReflect}
        >
          Reflect along x-axis
        </Button>
      </Box>
      <Box className={classes.buttonBox}>
        <Button 
          variant="contained" 
          onClick={handleYReflect}
        >
          Reflect along y-axis
        </Button>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  buttonBox: {
    ...center,
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