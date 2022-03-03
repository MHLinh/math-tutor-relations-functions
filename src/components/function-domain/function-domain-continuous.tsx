import React, { useState, useCallback } from "react"
import {
  Box,
  Container,
  Grid,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
  Select,
  SelectChangeEvent,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import _ from "lodash"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center } from "theme/styles"
import { 
  generateSliderMarks,
  getFunctionEquation,
  getFunctionStart,
  getFunctionEnd
} from "utils"
import FunctionPlotComponent from "components/function-plot/function-plot-component"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { FunctionEquationSelection } from "components/function-equation/function-equation-selection"
import { Equation } from "components/function-equation/function-equation-types"
import { CustomAlert } from "components/custom-alert/custom-alert"

const step = 1
const min = -6
const max = 6
const marks = generateSliderMarks(step, min, max)

/**
 * A component allowing the user to modify the continuous domain 
 * of a function to see the change in range of function.
 */
export function FunctionDomainContinuous() {
  const [domain, setDomain] = useState<[number, number]>([min, max])
  const [functionType, setFunctionType] = useState(Equation.Linear)
  const [startInterval, setStartInterval] = useState("closed")
  const [endInterval, setEndInterval] = useState("closed")
  const [alert, setAlert] = useState(false)

  const wrapperSetFunctionType = useCallback((type: Equation) => {
    setFunctionType(type)
  }, [setFunctionType])

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400

  const start = domain[0]
  const end = domain[1]

  const startBracket = startInterval === "closed" 
                        ? "["
                        : "("

  const endBracket = endInterval === "closed"
                        ? "]"
                        : ")"

  const domainLatex = `Domain $= ${startBracket}${start},${end}${endBracket}$`
  const plotEquation = getFunctionEquation(functionType, 1, 1, 0, 0, "", "")
  const startPoint = getFunctionStart(functionType, 1, 1, 0, 0, start)
  const endPoint = getFunctionEnd(functionType, 1, 1, 0, 0, end)

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
        fn: plotEquation,
        graphType: "polyline",
        range: domain
      },
      {
        points: [startPoint],
        color: "steelblue",
        fnType: "points",
        graphType: "scatter",
        attr: {
          fill: startInterval === "closed"
                  ? "steelblue"
                  : "white",
          opacity: 1,
          r: 5            // Radius of points
        }
      },
      {
        points: [endPoint],
        color: "steelblue",
        fnType: "points",
        graphType: "scatter",
        attr: {
          fill: endInterval === "closed"
                  ? "steelblue"
                  : "white",
          opacity: 1,
          r: 5            // Radius of points
        }
      },
    ]
  }
  
  const handleChangeStart = (event: SelectChangeEvent) => {
    const newStart = parseInt(event.target.value, 10)

    if(newStart <= end) {
      setDomain([newStart, end])
    } else {
      setAlert(true)
    }
    
  }

  const handleChangeEnd = (event: SelectChangeEvent) => {
    const newEnd = parseInt(event.target.value, 10)

    if(start <= newEnd) {
      setDomain([start, newEnd])
    } else {
      setAlert(true)
    }
  }

  const handleChangeStartInterval = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartInterval((event.target as HTMLInputElement).value)
  }

  const handleChangeEndInterval = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndInterval((event.target as HTMLInputElement).value)
  }

  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlert(false)
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Domain of a function
        </Typography>
      </Box>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        <Grid item md={6} lg={5}>
          <Box className={classes.center}>
            <FunctionPlotComponent 
              options={options}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="center" className={classes.latex}>
              <Latex>{domainLatex}</Latex>
            </Typography>
          </Box>
        </Grid>
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
                    Domain
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={1}
                >
                  <Grid item>
                    <FormControl>
                      <InputLabel id="domain-start-select-label">Start</InputLabel>
                      <Select
                        labelId="domain-start-select-label"
                        id="domain-start-select"
                        value={start.toString()}
                        label="Start"
                        onChange={handleChangeStart}
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
                      <InputLabel id="domain-end-select-label">End</InputLabel>
                      <Select
                        labelId="domain-end-select-label"
                        id="domain-end-select"
                        value={end.toString()}
                        label="End"
                        onChange={handleChangeEnd}
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
          <Box className={classes.box}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
            >
              <Grid item>
                <FormControl>
                  <FormLabel id="domain-start-radio-buttons-group-label">Domain start</FormLabel>
                    <RadioGroup
                      aria-labelledby="domain-start-radio-buttons-group-label"
                      name="domain-start-radio-buttons-group"
                      value={startInterval}
                      onChange={handleChangeStartInterval}
                    >
                      <FormControlLabel value="closed" control={<Radio />} label="Closed" />
                      <FormControlLabel value="open" control={<Radio />} label="Open" />
                    </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <FormLabel id="domain-end-radio-buttons-group-label">Domain end</FormLabel>
                    <RadioGroup
                      aria-labelledby="domain-end-radio-buttons-group-label"
                      name="domain-end-radio-buttons-group"
                      value={endInterval}
                      onChange={handleChangeEndInterval}
                    >
                      <FormControlLabel value="closed" control={<Radio />} label="Closed" />
                      <FormControlLabel value="open" control={<Radio />} label="Open" />
                    </RadioGroup>
                </FormControl>
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
              Change the start and end of the domain interval to modify the range of the function
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <CustomAlert 
        open={alert}
        handleClose={handleCloseAlert}
        severity="error"
        text="Start value cannot be larger than end value"
      />
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
}))
