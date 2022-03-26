import React, { useState } from "react"
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import NumberFormat from "react-number-format"
import _ from "lodash"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center } from "theme/styles"
import { roundToTwoDecimal } from "utils"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"

/**
 * A component allowing the user to modify the quadratic function
 * to see the change in the roots.
 */
export function QuadraticFunctionRoots() {
  const [params, setParams] = useState({
    a: 1,
    b: 2,
    c: 1
  })

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
    setParams({
      ...params, 
      a: parseInt(event.target.value, 10)
    })
  }

  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params, 
      b: parseInt(event.target.value, 10)
    })
  }

  const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params, 
      c: parseInt(event.target.value, 10)
    })
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
        <Grid item md={5}>
          <Box className={classes.center}>
            <Grid 
              container
              justifyContent="center"
              direction="column"
              spacing={2}
            >
              {/* Parameters input */}
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
                      value={params.a}
                      customInput={TextField} 
                      variant="outlined"
                      autoComplete="off"
                      onChange={handleChangeA}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
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
                      value={params.b}
                      customInput={TextField} 
                      variant="outlined"
                      autoComplete="off"
                      onChange={handleChangeB}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
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
                      value={params.c}
                      customInput={TextField} 
                      variant="outlined"
                      autoComplete="off"
                      onChange={handleChangeC}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
              </Grid>
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
