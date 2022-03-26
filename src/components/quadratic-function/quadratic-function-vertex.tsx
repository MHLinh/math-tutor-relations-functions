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
 * to see the change in the vertex.
 */
export function QuadraticFunctionVertex() {
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
  const vertexEquation = "$f(x) = a(x - h)^2 + k$"
  const vertexGeneral = "Vertex $= (h,k)$"
  const hEquation = "$h = \\frac{-b}{2a}$"
  const kEquation = "$k = f(h) = \\\\= a(\\frac{-b}{2a})^2 + b(\\frac{-b}{2a}) + c$"

  const h = -params.b / (2 * params.a)
  const k = params.a * h**2 + params.b * h  + params.c

  const vertex = `Vertex $= (${roundToTwoDecimal(h)},${roundToTwoDecimal(k)})$`
  const points = [[h,k]]
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
    // disableZoom: true,
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
          Vertex of a quadratic function
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
              <Latex>{vertex}</Latex>
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
                xs={6}
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
                xs={6}  
              >
                <Grid item>
                  <Typography className={classes.latex}>
                    <Latex>{vertexEquation}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{vertexGeneral}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{hEquation}</Latex>
                  </Typography>
                  <Typography className={classes.latex}>
                    <Latex>{kEquation}</Latex>
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
