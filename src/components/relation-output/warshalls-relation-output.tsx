/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { MatrixOutput } from "components/matrix-output/matrix-output"
import { OrderedPairs } from "components/ordered-pairs/ordered-pairs"
import { DirectedGraph } from "components/directed-graph/directed-graph"

interface IWarshallsRelationOutput {
  text: string,               // Header text for all output
  matrix: number[][],         // Relation stored as a matrix
  type: string                // Type of output for displaying relation
}

/**
 * A component displaying the output for the relation with the selected type,
 * a matrix, ordered pairs of numbers, or directed graph.
 */
export function WarshallsRelationOutput(props: IWarshallsRelationOutput) {
  const { text, matrix, type } = props

  switch(type) {
    case "matrix":
      return (
        <MatrixOutput 
          text={text}
          matrix={matrix} 
        />
      )
    case "pairs":
      return (
        <OrderedPairs
          text={text}
          matrix={matrix} 
        />
      )
    case "graph":
      return (
        <DirectedGraph
          text={text}
          matrix={matrix} 
        />
      )
    default:
      return null
  }
}
