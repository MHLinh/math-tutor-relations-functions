// Code modified according to usage for React example 
// at https://mauriciopoppe.github.io/function-plot/ accessed 24.02.2022
// by Mauricio Poppe

import React, { useEffect, useRef } from "react"
import functionPlot from "function-plot"
import { FunctionPlotOptions } from "./function-plot-types"

export interface IFunctionPlot {
  options?: FunctionPlotOptions
}

function FunctionPlot (props: IFunctionPlot) {
  const { options } = props
  const rootEl = useRef(null)

  useEffect(() => {
    try {
      functionPlot({ 
          ...options, 
          target: rootEl.current 
          ? rootEl.current 
          : "null" 
        })
    } catch (e) {
      console.log(e)
    }
  })

  return (<div ref={rootEl} />)
}

export default FunctionPlot