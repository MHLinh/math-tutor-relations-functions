import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study about the quadratic function.
 */
export function QuadraticFunctionNavigation() {
  const text = "Study the quadratic function"

  const paths = [
    { name: "Vertex of a quadratic function", path: "/quadratic-function-vertex" },
    { name: "Roots of a quadratic function", path: "/quadratic-function-roots" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
