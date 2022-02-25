import React, { useState, useCallback, useMemo } from "react"
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
import {  center, paddingStyle  } from "theme/styles"
import { generateSliderMarks, verticalLineTest, generatePoints } from "utils"
import FunctionPlotComponent from "components/function-plot/function-plot-component"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { IPointsContext } from "components/points-context/points-context"
import { SaveAndLoadPoints } from "components/database/save-and-load-points"

export function VerticalLineTest() {
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const step = 1
  const min = -6
  const max = 6
  const size = small 
                ? 300
                : 500
  const [position, setPosition] = useState(min)
  const [points, setPoints] = useState(generatePoints(min - 1, max - 1, 10))

  const classes = useStyles()
  
  const marks = generateSliderMarks(step, min, max)

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
    setPoints(generatePoints(min + 1, max - 1, 10))
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
        <FunctionPlotComponent 
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
        <Button variant="contained" onClick={handleGenerate}>
          Generate points
        </Button>
      </Box>
      <Box className={classes.box}>
        <SaveAndLoadPoints
          pointsContextValue={contextValue}
          type="points" 
        />
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