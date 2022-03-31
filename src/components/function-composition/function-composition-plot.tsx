/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles,
 * mathjs, katex, and react-latex-next.
 */
import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import makeStyles from "@mui/styles/makeStyles"
import { parse, simplify } from "mathjs"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"
import { center, buttonStyle } from "theme/styles"
import FunctionPlot from "components/function-plot/function-plot"
import { FunctionPlotOptions } from "components/function-plot/function-plot-types"
import { CustomAlert } from "components/custom-alert/custom-alert"

/**
 * A component allowing the user to plot a valid function compositions.
 */
export function FunctionCompositionPlot() {
  const [inputFunctionF, setInputFunctionF] = useState("")
  const [inputFunctionG, setInputFunctionG] = useState("")
  const [functionF, setFunctionF] = useState("")
  const [functionG, setFunctionG] = useState("")
  const [functionFG, setFunctionFG] = useState({
    str: "",
    tex: ""
  })
  const [functionGF, setFunctionGF] = useState({
    str: "",
    tex: ""
  })
  const [alertF, setAlertF] = useState(false)
  const [alertG, setAlertG] = useState(false)
  const [alertFG, setAlertFG] = useState(false)
  const [alertGF, setAlertGF] = useState(false)

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const size = small 
                ? 300
                : 400

  const latexFG = functionFG.tex === ""
                    ? "$(f \\circ g)(x) = \\; ?$"
                    : `$(f \\circ g)(x) = ${functionFG.tex}$`
  const latexGF = functionGF.tex === ""
                    ? "$(f \\circ g)(x) = \\; ?$"
                    : `$(g \\circ f)(x) = ${functionGF.tex}$`

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
        fn: functionF === ""
              ? "0"
              : functionF,
        color: "steelblue",
        graphType: "polyline",
        attr: {
          opacity: functionF === "" 
            ? 0
            : 1
        }
      },
      {
        fn: functionG === ""
              ? "0"
              : functionG,
        color: "red",
        graphType: "polyline",
        attr: {
          opacity: functionG === "" 
            ? 0
            : 1
        }
      },
      {
        fn: functionFG.str === ""
              ? "0"
              : functionFG.str,
        color: "green",
        graphType: "polyline",
        attr: {
          opacity: functionFG.str === "" 
            ? 0
            : 1
        }
      },
      {
        fn: functionGF.str === ""
              ? "0"
              : functionGF.str,
        color: "orange",
        graphType: "polyline",
        attr: {
          opacity: functionGF.str === "" 
            ? 0
            : 1
        }
      },
    ]
  }

  const handleChangeF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFunctionF(event.target.value.toLowerCase())
  }

  const handleChangeG = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFunctionG(event.target.value.toLowerCase())
  }

  const handleClick = () => {
    // Check if function f has valid syntax.
    if(inputFunctionF !== "") {
      try {
        parse(inputFunctionF)
        setFunctionF(inputFunctionF)
      } catch (err) {
        setFunctionF("")
        setFunctionFG({
          str: "",
          tex: ""
        })
        setFunctionGF({
          str: "",
          tex: ""
        })
        setAlertF(true)
        return
      }
    } else {
      setAlertF(true)
      return
    }

    // Check if function g has valid syntax.
    if(inputFunctionG !== "") {
      try {
        parse(inputFunctionG)
        setFunctionG(inputFunctionG)
      } catch (err) {
        setFunctionG("")
        setFunctionFG({
          str: "",
          tex: ""
        })
        setFunctionGF({
          str: "",
          tex: ""
        })
        setAlertG(true)
        return
      }
    } else {
      setAlertG(true)
      return
    }

    // Try to compose f(g(x))
    try {
      const compositionFG = inputFunctionF.replace("x", `(${inputFunctionG})`)
      const simplifiedFG = simplify(compositionFG)
      setFunctionFG({
        str: simplifiedFG.toString(),
        tex: simplifiedFG.toTex()
      })
    } catch (err) {
      setFunctionFG({
        str: "",
        tex: ""
      })
      setAlertFG(true)
      return
    }

    // Try to compose g(f(x))
    try {
      const compositionGF = inputFunctionG.replace("x", `(${inputFunctionF})`)
      const simplifiedGF = simplify(compositionGF)
      setFunctionGF({
        str: simplifiedGF.toString(),
        tex: simplifiedGF.toTex()
      })
    } catch (err) {
      setFunctionGF({
        str: "",
        tex: ""
      })
      setAlertFG(true)
    }
  }

  const handleCloseAlertF = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlertF(false)
  }

  const handleCloseAlertG = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlertG(false)
  }

  const handleCloseAlertFG = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlertFG(false)
  }

  const handleCloseAlertGF = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setAlertGF(false)
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Typography align="center" className={classes.text}>
          Plot function compositions
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
            <Typography
              align="center" 
              className={classes.latex} 
              sx={{color: "green"}}
            >
              <Latex>{latexFG}</Latex>
            </Typography>
          </Box>
          <Box className={classes.box}>
            <Typography
              align="center" 
              className={classes.latex} 
              sx={{color: "orange"}}
            >
              <Latex>{latexGF}</Latex>
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
              {/* Functions input. */}
              <Grid
                container
                item
                direction="column"
                alignItems="center"
                spacing={2}
                xs={6}
              >
                {/* Function f. */}
                <Grid 
                  container
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography 
                      className={classes.function} 
                      sx={{color: "steelblue"}}
                    >
                      <Latex>$f(x) =$</Latex>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="input-function-f"
                      value={inputFunctionF}
                      variant="outlined"
                      autoComplete="off"
                      autoCapitalize="none"
                      onChange={handleChangeF}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
                {/* Function g. */}
                <Grid 
                  container 
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography 
                      className={classes.function} 
                      sx={{color: "red"}}
                    >
                      <Latex>$g(x) =$</Latex>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="input-function-g"
                      value={inputFunctionG}
                      variant="outlined"
                      autoComplete="off"
                      autoCapitalize="none"
                      onChange={handleChangeG}
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.center}>
            <Button
              variant="contained"
              onClick={handleClick}
              className={classes.button}
            >
              Compute
            </Button>
          </Box>
          {/* Extra instructions. */}
          <Box>
            <ul id="plot-info">
              <li>
                <Typography align="left">
                  Please only use &quot;x&quot; as variable name.
                </Typography>
              </li>
              <li>
                <Typography align="left">
                  Use +, -, *, / for addition, subtraction, multiplication, and division.
                </Typography>
              </li>
              <li>
                <Typography align="left">
                  Use x^n for <Latex>$x^n$</Latex>, replacing n with any number.
                </Typography>
              </li>
              <li>
                <Typography align="left">
                  Use sqrt(x) for <Latex>{"$\\sqrt{x}$"}</Latex>.
                </Typography>
              </li>
            </ul>
            <Typography variant="caption">
              Note: The view of the graph can be moved and zoomed.
              If a function composition is not plotted then it is invalid.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Alert messages. */}
      <CustomAlert 
        open={alertF}
        handleClose={handleCloseAlertF}
        severity="error"
        text="Function f has invalid syntax"
      />
      <CustomAlert 
        open={alertG}
        handleClose={handleCloseAlertG}
        severity="error"
        text="Function g has invalid syntax"
      />
      <CustomAlert 
        open={alertFG}
        handleClose={handleCloseAlertFG}
        severity="error"
        text="There was a problem with creating the composition (f ∘ g)(x)"
      />
      <CustomAlert 
        open={alertGF}
        handleClose={handleCloseAlertGF}
        severity="error"
        text="There was a problem with creating the composition (g ∘ f)(x)"
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
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  function: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(20),
    },
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
}))
