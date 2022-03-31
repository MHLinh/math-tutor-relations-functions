/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React, { useState, useCallback, useMemo } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import makeStyles from "@mui/styles/makeStyles"
import { center, paddingStyle, buttonStyle } from "theme/styles"
import { generateSliderMarks, verticalLineTest, generatePoints } from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { IPointsContext } from "components/points-context/points-context"
import { PointsDataService } from "components/database/points-data-service"

// Slider and plot settings.
const step = 1
const min = -6
const max = 6
const marks = generateSliderMarks(step, min, max)

const minCord = min + 1
const maxCord = max - 1
const numPoints = 7

/**
 * A component displaying a graph of points a moveable vertical line
 * for the vertical line test to check whether a relation is a function.
 */
export function VerticalLineTest() {
  const [position, setPosition] = useState(min)
  const [points, setPoints] = useState(generatePoints(minCord, maxCord, numPoints))
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))
  const medium = useMediaQuery(breakpoints.down("md"))

  const size = small 
                ? 300
                : 400
  
  const classes = useStyles()
  
  const multiplePoints = verticalLineTest(position, points)

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
        points,
        color: "black",
        fnType: "points",
        graphType: "scatter",
        attr: {
          opacity: 1,
          r: 5            // Radius of points
        }
      },
      {
        points: [
          [position, min],
          [position, max]
        ],
        color: multiplePoints 
                ? "red"
                : "green",
        fnType: "points",
        graphType: "polyline",
        attr: {
          "stroke-width": 5
        }
      }
    ]
  }
  
  
  const handleChange = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    setPosition(value as number)
  }

  const handleGenerate = () => {
    setPoints(generatePoints(minCord, maxCord, numPoints))
  }

  const wrapperSetPoints = useCallback((newPoints: number[][]) => {
    setPoints(newPoints)
  }, [setPoints])

  const contextValue: IPointsContext = useMemo(() => ({
    points, 
    setter: wrapperSetPoints
  }), [points])

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Vertical line test
        </Typography>
      </Box>
      <Box className={classes.center}>
        <FunctionPlot 
          options={options}
        />
      </Box>
      <Box className={classes.center}>
        <Box className={classes.slider}>
          <Typography>
            X position of vertical line
          </Typography>
          <Slider 
            aria-label="x-position"
            value={position}
            onChangeCommitted={handleChange}
            step={step}
            min={min}
            max={max}
            marks={marks}
          />
          <Typography align="left">
            Check if the relation is a function by moving the vertical line through all of the points.
            If the vertical line crosses multiple points at the same time (turns red),
            then the relation is not a function.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.box}>
        <Grid
          container
          justifyContent="center"
          direction={medium 
            ? "column"
            : "row"
          }
          spacing={medium 
            ? 0
            : 1
          }
        >
          <Grid 
            container
            item
            justifyContent="center"
            md={6}
          >
            <Box className={classes.box}>
              <Button 
                variant="contained" 
                onClick={handleGenerate}
                className={classes.button}
              >
                Generate points
              </Button>
            </Box>
          </Grid>
          <Grid 
            container
            item
            justifyContent="center"
            md={6}
          >
            <PointsDataService
              pointsContextValue={contextValue}
              type="points" 
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  button: {
    ...buttonStyle
  },
  center: {
    ...center,
  },
  container: {
    ...paddingStyle,
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