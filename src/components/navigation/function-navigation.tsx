import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study functions.
 */
export function FunctionNavigation() {
  const text = "Study functions"

  const paths = [
    { name: "Properties of a function", path: "/function-properties" },
    { name: "Vertical line test", path: "/vertical-line-test" },
    { name: "Slope of a linear function", path: "/linear-function-slope" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
