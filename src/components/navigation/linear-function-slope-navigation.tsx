import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study the slope of a linear function.
 */
export function LinearFunctionSlopeNavigation() {
  const text = "Study the slope of a linear function"

  const paths = [
    { name: "Slope of linear function change in X/Y", path: "/linear-function-slope-change" },
    { name: "Slope of linear function two points", path: "/linear-function-slope-points" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
