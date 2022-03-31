/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study properties of a relation.
 */
export function RelationPropertiesNavigation() {
  const text = "Study properties of a relation"

  const paths = [
    { name: "Reflexive relation", path: "/relation-properties-reflexive" },
    { name: "Ireflexive relation", path: "/relation-properties-irreflexive" },
    { name: "Symmetric relation", path: "/relation-properties-symmetric" },
    { name: "Antisymmetric relation", path: "/relation-properties-antisymmetric" },
    { name: "Transitive relation", path: "/relation-properties-transitive" },
    { name: "Equivalence relation", path: "/relation-properties-equivalence" },
    { name: "Partial order", path: "/relation-properties-partial-order" },
    { name: "Total order", path: "/relation-properties-total-order" },
    { name: "All properties", path: "/relation-properties-all" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
