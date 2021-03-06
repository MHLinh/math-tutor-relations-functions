/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles,
 * katex, and react-latex-next.
 */
import React, { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import makeStyles from "@mui/styles/makeStyles"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center } from "theme/styles"
import { generateSliderMarks, roundToTwoDecimal } from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"

// Slider and plot settings.
const step = 1
const min = -6
const max = 6
const marksY = generateSliderMarks(step, min, max)
const marksX = marksY.filter(mark => mark.value !== 0)

/**
 * A component allowing the user to modify the change in X and Y,
 * to modify the slope of the given linear function.
 */
export function LinearFunctionSlopeChange() {
  const [xChange, setXChange] = useState(1)
  const [yChange, setYChange] = useState(1)
  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400

  const gradient = yChange / xChange
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
        fn: `${gradient}x + 2`,
        graphType: "polyline"
      }
    ]
  }
  
  const slopeText = `Slope $= \\frac{\\Delta Y}{\\Delta X} = \\frac{${yChange}}{${xChange}} \\approx ${roundToTwoDecimal(gradient)}$`
  const xLabel = "$\\Delta X$"
  const yLabel = "$\\Delta Y$"

  const handleXChange = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    const inValue = value as number
    if(inValue !== 0) {
      setXChange(inValue)
    }

  }

  const handleYChange = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setYChange(value as number)
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Slope of a linear function by
          modifying the change in X and Y
        </Typography>
      </Box>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        {/* Function graph and slope. */}
        <Grid item md={6} lg={5}>
          <Box className={classes.center}>
            <FunctionPlot 
              options={options}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="center" className={classes.latex}>
              <Latex>{slopeText}</Latex>
            </Typography>
          </Box>
        </Grid>
        {/* Slope change input. */}
        <Grid item md={6} lg={5}>
          <Box className={classes.center}>
            <Box className={classes.slider}>
              <Typography>
                <Latex>{xLabel}</Latex>
              </Typography>
              <Slider 
                aria-label="x-change"
                value={xChange}
                onChangeCommitted={handleXChange}
                min={min}
                max={max}
                marks={marksX}
              />
              <Typography>
                <Latex>{yLabel}</Latex>
              </Typography>
              <Slider 
                aria-label="y-change"
                value={yChange}
                onChangeCommitted={handleYChange}
                min={min}
                max={max}
                marks={marksY}
              />
              <Box className={classes.box}>
                <Typography align="left">
                  Modify the change in X and Y to modify the slope of the function.
                </Typography>
              </Box>
            </Box>
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
  slider: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(500),
    },
  },
}))