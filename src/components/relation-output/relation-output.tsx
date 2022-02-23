import React from "react"
import { MatrixOutput } from "components/matrix-output/matrix-output"
import { OrderedPairs } from "components/ordered-pairs/ordered-pairs"
import { DirectedGraph } from "components/directed-graph/directed-graph"

interface IRelationOutput {
  matrix: number[][],           // Relation stored as a matrix
  type: string                  // Type of output for displaying relation
}

/**
 * A component displaying the output for the relation with the selected type,
 * a matrix, ordered pairs of numbers, or directed graph.
 */
export function RelationOutput(props: IRelationOutput) {
  const { matrix, type } = props

  switch(type) {
    case "matrix":
      return (
        <MatrixOutput 
          text="Relation as a matrix:"
          matrix={matrix} 
        />
      )
    case "pairs":
      return (
        <OrderedPairs
          text="Relation as a set of ordered pairs:"
          matrix={matrix} 
        />
      )
    case "graph":
      return (
        <DirectedGraph
          text="Relation as a directed graph:"
          matrix={matrix} 
        />
      )
    default:
      return null
  }
}
