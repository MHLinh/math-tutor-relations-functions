/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study functions.
 */
export function FunctionNavigation() {
  const text = "Study functions"

  const paths = [
    { name: "Vertical line test", path: "/vertical-line-test" },
    { name: "Domain of a function", path: "/function-domain" },
    { name: "Properties of a function", path: "/function-properties" },
    { name: "Slope of a linear function", path: "/linear-function-slope" },
    { name: "Quadratic function", path: "/quadratic-function" },
    { name: "Function transformation", path: "/function-transformation" },
    { name: "Function composition", path: "/function-composition" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
