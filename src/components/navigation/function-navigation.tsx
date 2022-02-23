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
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
