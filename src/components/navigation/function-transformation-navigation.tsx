/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study function transformation.
 */
export function FunctionTransformationNavigation() {
  const text = "Study the function transformation"

  const paths = [
    { name: "Vertical translation", path: "/function-transformation-vertical-translation" },
    { name: "Horizontal translation", path: "/function-transformation-horizontal-translation" },
    { name: "Vertical compression / stretching", path: "/function-transformation-vertical-compression-stretching" },
    { name: "Horizontal compression / stretching", path: "/function-transformation-horizontal-compression-stretching" },
    { name: "Reflection along axis", path: "/function-transformation-reflection" },
    { name: "All function transformations", path: "/function-transformation-all" },
    
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
