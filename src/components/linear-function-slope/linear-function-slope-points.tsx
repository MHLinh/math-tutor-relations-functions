import React, { useState, useCallback, useMemo } from "react"
import {
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Select,
  SelectChangeEvent,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import {  center, paddingStyle  } from "theme/styles"
import { generateSliderMarks, roundToTwoDecimal } from "utils"
import FunctionPlotComponent from "components/function-plot/function-plot-component"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"

const step = 1
const min = -6
const max = 6
const marks = generateSliderMarks(step, min, max)

/**
 * A component allowing the user to choose coordinates of two points,
 * to determine the slope of a function going through thw two points.
 */
export function LinearFunctionSlopePoints() {
  const [x1, setX1] = useState(-1)
  const [y1, setY1] = useState(-1)
  const [x2, setX2] = useState(1)
  const [y2, setY2] = useState(1)

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400

  const xChange = x1 - x2
  const yChange = y1 - y2
  const gradient = yChange / xChange
  const c = y1 - gradient * x1

  const points = [[x1, y1], [x2, y2]]
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
        fn: xChange === 0 
          ? "0"
          : `${gradient}x + ${c}`,
        attr: {
          opacity: xChange === 0 
            ? 0
            : 1
        }
      },
      {
        points,
        color: "black",
        fnType: "points",
        graphType: "scatter",
        attr: {
          opacity: 1,
          r: 5            // Radius of points
        }
      },
    ]
  }
  
  const xText = `$\\Delta X = ${x1} - ${x2} = ${xChange}$`
  const yText = `$\\Delta Y = ${y1} - ${y2} = ${yChange}$`
  const slopeText = `Slope $= \\frac{\\Delta Y}{\\Delta X} = \\frac{${yChange}}{${xChange}} \\approx ${roundToTwoDecimal(gradient)}$`
  

  const handleChangeX1 = (event: SelectChangeEvent) => {
    setX1(parseInt(event.target.value, 10))
  }

  const handleChangeY1 = (event: SelectChangeEvent) => {
    setY1(parseInt(event.target.value, 10))
  }

  const handleChangeX2 = (event: SelectChangeEvent) => {
    setX2(parseInt(event.target.value, 10))
  }

  const handleChangeY2 = (event: SelectChangeEvent) => {
    setY2(parseInt(event.target.value, 10))
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Slope of a linear function by selecting two points
        </Typography>
      </Box>
      <Box className={classes.center}>
        <FunctionPlotComponent 
          options={options}
        />
      </Box>
      <Box className={classes.box}>
        <Typography align="center" className={classes.latex}>
          <Latex>{xText}</Latex>
        </Typography>
        <Typography align="center" className={classes.latex}>
          <Latex>{yText}</Latex>
        </Typography>
        <Typography align="center" className={classes.latex}>
          <Latex>{slopeText}</Latex>
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid item>
            <Box className={classes.box}>
              <Typography>
                Point A
              </Typography>
            </Box>
            <Grid
              container
              spacing={1}
            >
              <Grid item>
                <FormControl>
                  <InputLabel id="point-a-x-select-label">X</InputLabel>
                  <Select
                    labelId="point-a-x-select-label"
                    id="point-a-x-select"
                    value={x1.toString()}
                    label="X"
                    onChange={handleChangeX1}
                  >
                    {marks.map(({ value, label}) => (
                      <MenuItem value={value} key={label}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="point-a-y-select-label">Y</InputLabel>
                  <Select
                    labelId="point-a-y-select-label"
                    id="point-a-y-select"
                    value={y1.toString()}
                    label="Y"
                    onChange={handleChangeY1}
                  >
                    {marks.map(({ value, label}) => (
                      <MenuItem value={value} key={label}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box className={classes.box}>
              <Typography>
                Point B
              </Typography>
            </Box>
            <Grid
              container
              spacing={1}
            >
              <Grid item>
                <FormControl>
                  <InputLabel id="point-b-x-select-label">X</InputLabel>
                  <Select
                    labelId="point-b-x-select-label"
                    id="point-b-x-select"
                    value={x2.toString()}
                    label="X"
                    onChange={handleChangeX2}
                  >
                    {marks.map(({ value, label}) => (
                      <MenuItem value={value} key={label}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="point-b-y-select-label">Y</InputLabel>
                  <Select
                    labelId="point-b-y-select-label"
                    id="point-b-y-select"
                    value={y2.toString()}
                    label="Y"
                    onChange={handleChangeY2}
                  >
                    {marks.map(({ value, label}) => (
                      <MenuItem value={value} key={label}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.center}>
        <Box className={classes.textBox}>
          <Typography align="left">
            Change the coordinates of the points to modify the slope of the function.
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
  textBox: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(500),
    },
  },
}))
