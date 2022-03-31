/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles,
 * katex, and react-latex-next.
 */
import React, { useState, useCallback, useMemo } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import makeStyles from "@mui/styles/makeStyles"
import cloneDeep from "lodash/cloneDeep"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center } from "theme/styles"
import { generateSliderMarks, roundToTwoDecimal } from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { IPointsContext } from "components/points-context/points-context"
import { PointsDataService } from "components/database/points-data-service"

// Slider and plot settings.
const step = 1
const min = -6
const max = 6
const marks = generateSliderMarks(step, min, max)

/**
 * A component allowing the user to choose coordinates of two points,
 * to determine the slope of a function going through thw two points.
 */
export function LinearFunctionSlopePoints() {
  const [points, setPoints] = useState([[-1, -1], [1, 1]])

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400

  // Points and slope calculations.
  const x1 = points[0][0]
  const y1 = points[0][1]
  const x2 = points[1][0]
  const y2 = points[1][1]
  const xChange = x1 - x2
  const yChange = y1 - y2
  const gradient = yChange / xChange
  const c = y1 - gradient * x1

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
        graphType: "polyline",
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
  const slopeText = `Slope $= \\frac{\\Delta Y}{\\Delta X} = \\frac{${yChange}}{${xChange}} \\approx ${
    xChange === 0
    ? "Undefined"
    : roundToTwoDecimal(gradient)
  }$`
  

  const handleChangeX1 = (event: SelectChangeEvent) => {
    const tempPoints =  cloneDeep(points)
    tempPoints[0][0] = parseInt(event.target.value, 10)
    setPoints(tempPoints)
  }

  const handleChangeY1 = (event: SelectChangeEvent) => {
    const tempPoints =  cloneDeep(points)
    tempPoints[0][1] = parseInt(event.target.value, 10)
    setPoints(tempPoints)
  }

  const handleChangeX2 = (event: SelectChangeEvent) => {
    const tempPoints =  cloneDeep(points)
    tempPoints[1][0] = parseInt(event.target.value, 10)
    setPoints(tempPoints)
  }

  const handleChangeY2 = (event: SelectChangeEvent) => {
    const tempPoints =  cloneDeep(points)
    tempPoints[1][1] = parseInt(event.target.value, 10)
    setPoints(tempPoints)
  }

  const wrapperSetPoints = useCallback((newPoints: number[][]) => {
    setPoints(newPoints)
  }, [setPoints])

  const contextValue: IPointsContext = useMemo(() => ({
    points, 
    setter: wrapperSetPoints
  }), [points])

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Slope of a linear function by selecting two points
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
              <Latex>{xText}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{yText}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{slopeText}</Latex>
            </Typography>
          </Box>
        </Grid>
        {/* Points coordinates input. */}
        <Grid item md={6} lg={5}>
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
          <Box className={classes.center}>
            <PointsDataService
              pointsContextValue={contextValue}
              type="slope" 
            />
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
  textBox: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(500),
    },
  },
}))
