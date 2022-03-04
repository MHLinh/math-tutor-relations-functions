import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study domain of a function.
 */
export function FunctionDomainNavigation() {
  const text = "Study the domain of a function"

  const paths = [
    { name: "Continuous domain", path: "/function-domain-continuous" },
    { name: "Discrete domain", path: "/function-domain-discrete" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
