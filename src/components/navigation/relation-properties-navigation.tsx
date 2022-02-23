import React from "react"
import { NavLink } from "react-router-dom"
import { Navigation } from "./navigation"

/**
 * A component displaying buttons for navigating to
 * different pages to study properties of a relation.
 */
export function RelationPropertiesNavigation() {
  const text = "Study properties of a relation"

  const paths = [
    { name: "All properties", path: "/relation-properties-all" },
    { name: "Reflexive relation", path: "/relation-properties-reflexive" },
    { name: "Ireflexive relation", path: "/relation-properties-irreflexive" },
    { name: "Symmetric relation", path: "/relation-properties-symmetric" },
    { name: "Antisymmetric relation", path: "/relation-properties-antisymmetric" },
    { name: "Transitive relation", path: "/relation-properties-transitive" },
  ]

  return (
    <Navigation text={text} paths={paths} />
  )
}
