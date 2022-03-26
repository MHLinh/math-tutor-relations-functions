import React, { useState, useCallback } from "react"
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
import _ from "lodash"
import "katex/dist/katex.min.css"
import { center } from "theme/styles"
import { 
  generateSliderMarks,
  getFunctionPoints,
  generateNumbers
} from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { FunctionEquationSelection } from "components/function-equation/function-equation-selection"
import { Equation } from "components/function-equation/function-equation-types"
import { CustomAlert } from "components/custom-alert/custom-alert"

const step = 1
const min = -6
const max = 6
const marks = generateSliderMarks(step, min, max)

/**
 * A component allowing the user to modify the discrete domain 
 * of a function to see the change in range of function.
 */
export function FunctionDomainDiscrete() {
  const [domain, setDomain] = useState<[number, number]>([min, max])
  const [functionType, setFunctionType] = useState(Equation.Linear)
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

  const numbers = generateNumbers(start, end)

  // const domainLatex = `Domain $= ${startBracket}${start},${end}${endBracket}$`
  const domainString = `[${numbers.join(", ")}]`
  const points = getFunctionPoints(functionType, 1, 1, 0, 0, numbers)

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
        color: "steelblue",
        fnType: "points",
        graphType: "scatter",
        attr: {
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
            <FunctionPlot 
              options={options}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="center" className={classes.latex}>
              Domain = 
              <br />
              {domainString}
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
        text="Start value cannot be greater than end value"
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
