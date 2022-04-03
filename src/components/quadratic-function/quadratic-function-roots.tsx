/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles,
 * react-number-format, katex, and react-latex-next.
 */
import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import makeStyles from "@mui/styles/makeStyles"
import NumberFormat from "react-number-format"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center, buttonStyle } from "theme/styles"
import { roundToTwoDecimal } from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { CustomAlert } from "components/custom-alert/custom-alert"

/**
 * A component allowing the user to modify the quadratic function
 * to see the change in the roots.
 */
export function QuadraticFunctionRoots() {
  const [inputParams, setInputParams] = useState({
    a: 1,
    b: 2,
    c: 1
  })
  const [params, setParams] = useState({
    a: 1,
    b: 2,
    c: 1
  })
  const [alert, setAlert] = useState(false)

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400

  const equation = "$f(x) = ax^2 + bx + c$"
  const deltaEquation = "$\\Delta = b^2 - 4ac$"
  const deltaSmaller = "$\\Delta < 0 \\rightarrow$ there are no real roots"
  const deltaEqual = "$\\Delta = 0 \\rightarrow$ there is one real root"
  const deltaLarger = "$\\Delta > 0 \\rightarrow$ there is two real roots"
  const rootsEquation = "$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$"

  const delta = params.b**2 - 4 * params.a * params.c

  const deltaValue = `$\\Delta = ${roundToTwoDecimal(delta)}$`

  let points: number[][] = []
  let roots = "There are no real roots"
  if(delta === 0) {
    const x = -params.b/(2 * params.a)
    points = [[x, 0]]
    roots = `$x = ${roundToTwoDecimal(x)}$`
  } else if(delta > 0) {
    const x1 = (-params.b - Math.sqrt(delta))/(2 * params.a)
    const x2 = (-params.b + Math.sqrt(delta))/(2 * params.a)
    points = [[x1, 0], [x2, 0]]
    roots = `$x_1 = ${roundToTwoDecimal(x1)} \\\\ x_2 = ${roundToTwoDecimal(x2)}$`
  }

  const options: FunctionPlotOptions = {
    target: "#plot",
    width: size,
    height: size,
    xAxis: {
      label: "X",
    },
    yAxis: {
      label: "Y",
    },
    grid: true,
    data: [
      {
        fn: `${params.a}x^2 + ${params.b}x + ${params.c}`,
        graphType: "polyline"
      },
      {
        points,
        color: "red",
        fnType: "points",
        graphType: "scatter",
        attr: {
          opacity: 1,
          r: 5            // Radius of points
        }
      },
    ]
  }

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParams({
      ...inputParams, 
      a: parseInt(event.target.value, 10)
    })
  }

  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParams({
      ...inputParams, 
      b: parseInt(event.target.value, 10)
    })
  }

  const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParams({
      ...inputParams, 
      c: parseInt(event.target.value, 10)
    })
  }

  const handleClick = () => {
    if(Number.isNaN(inputParams.a) || 
       Number.isNaN(inputParams.b) || 
       Number.isNaN(inputParams.c)
    ) {
      setAlert(true)
      return
    }
    setParams(inputParams)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlert(false)
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Roots of a quadratic function
        </Typography>
      </Box>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        {/* Function graph and roots. */}
        <Grid item md={5}>
          <Box className={classes.center}>
            <FunctionPlot 
              options={options}
            />
          </Box>
          <Box className={classes.box}>
            <Typography align="center" className={classes.latex}>
              <Latex>{deltaValue}</Latex>
            </Typography>
            <Typography align="center" className={classes.latex}>
              <Latex>{roots}</Latex>
            </Typography>
          </Box>
        </Grid>
        {/* Parameters input. */}
        <Grid item md={5}>
          <Box className={classes.center}>
            <Grid 
              container
              justifyContent="center"
              direction="column"
              spacing={2}
            >        
              <Grid
                container
                item
                direction="column"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography className={classes.latex}>
                    <Latex>{equation}</Latex>
                  </Typography>
                </Grid>
                {/* Parameter a. */}
                <Grid 
                  container
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography className={classes.param}>
                      a =
                    </Typography>
                  </Grid>
                  <Grid item>
                    <NumberFormat
                      id="input-a"
                      value={inputParams.a}
                      customInput={TextField} 
                      variant="outlined"
                      autoComplete="off"
                      onChange={handleChangeA}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
                {/* Parameter b. */}
                <Grid 
                  container 
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography className={classes.param}>
                      b =
                    </Typography>
                  </Grid>
                  <Grid item>
                    <NumberFormat
                      id="input-b"
                      value={inputParams.b}
                      customInput={TextField} 
                      variant="outlined"
                      autoComplete="off"
                      onChange={handleChangeB}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
                {/* Parameter c. */}
                <Grid 
                  container 
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography className={classes.param}>
                      c =
                    </Typography>
                  </Grid>
                  <Grid item>
                    <NumberFormat
                      id="input-c"
                      value={inputParams.c}
                      customInput={TextField} 
                      variant="outlined"
                      autoComplete="off"
                      onChange={handleChangeC}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* Equations */}
              <Grid
                container
                item
                justifyContent="center"  
              >
                <Grid item>
                  <Typography className={classes.latex}>
                    <Latex>{deltaEquation}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{deltaSmaller}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{deltaEqual}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{deltaLarger}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{rootsEquation}</Latex>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.centerBox}>
            <Button
              variant="contained"
              onClick={handleClick}
              className={classes.button}
            >
              Compute
            </Button>
          </Box>
          <Box className={classes.box}>
            <Typography variant="caption">
              Note: Please only input integer values.
              The view of the graph can be moved and zoomed.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Alert messages. */}
      <CustomAlert 
        open={alert}
        handleClose={handleClose}
        severity="error"
        text="Please input values for all parameters a, b, and c."
      />
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
  input: {
    width: theme.typography.pxToRem(100),
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
  param: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(20),
    },
  }
}))
