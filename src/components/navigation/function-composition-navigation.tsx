/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study function composition.
 */
export function FunctionCompositionNavigation() {
  const text = "Study the function composition"

  const paths = [
    { name: "Function composition check", path: "/function-composition-check" },
    { name: "Function composition plot", path: "/function-composition-plot" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
