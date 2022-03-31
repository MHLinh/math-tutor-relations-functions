/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study relations.
 */
export function RelationNavigation() {
  const text = "Study relations"

  const paths = [
    { name: "Representations of a relation", path: "/relation-representation" },
    { name: "Properties of a relation", path: "/relation-properties" },
    { name: "Warshall's algorithm", path: "/relation-warshalls" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
