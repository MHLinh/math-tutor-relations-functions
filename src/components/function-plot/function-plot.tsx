import React, { useState, useEffect, useRef } from "react"
import { Box } from "@mui/material"
import functionPlot from "function-plot"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { FunctionPlotOptions } from "./function-plot-types"

export interface IFunctionPlot {
  options?: FunctionPlotOptions   // Options used to plot the graphs
}

/**
 * A component used to plot graphs of functions.
 * 
 * The code of the component was written based example code of the function-plot library 
 * at https://mauriciopoppe.github.io/function-plot/ (accessed 24.02.2022)
 * written by Mauricio Poppe.
 */
function FunctionPlot (props: IFunctionPlot) {
  const { options } = props
  const [alert, setAlert] = useState(false)
  const [errorText, setErrorText] = useState("")
  const rootEl = useRef(null)

  const handleClose = () => {
    setAlert(false)
    setErrorText("")
  }

  useEffect(() => {
    try {
      functionPlot({ 
          ...options, 
          target: rootEl.current 
          ? rootEl.current 
          : "null" 
        })
    } catch (error) {
      console.log(error)
      if(error instanceof Error) {
        setAlert(true)
        setErrorText(error.message)
      }
    }
  }, [options])

  return (
    <Box>
      <CustomAlert
        open={alert}
        handleClose={handleClose}
        severity="error"
        text={`An error occurred while plotting the graph: ${errorText}`}
      />
      <div ref={rootEl} />
    </Box>
  )
}

export default FunctionPlot