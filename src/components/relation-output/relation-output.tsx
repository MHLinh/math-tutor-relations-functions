import React from "react"
import { MatrixOutput } from "components/matrix-output/matrix-output"
import { OrderedPairs } from "components/ordered-pairs/ordered-pairs"
import { DirectedGraph, IDirectedGraphNode } from "components/directed-graph/directed-graph"

interface IRelationOutput {
  matrix: number[][],           // Relation stored as a matrix
  nodes: IDirectedGraphNode[],  // The initial nodes of the directed graph
  type: string                  // Type of output for displaying relation
}

/**
 * A component displaying the output for the relation with the selected type,
 * a matrix, ordered pairs of numbers, or directed graph.
 */
export function RelationOutput(props: IRelationOutput) {
  const { matrix, nodes, type } = props

  switch(type) {
    case "matrix":
      return <MatrixOutput matrix={matrix} />
    case "pairs":
      return <OrderedPairs matrix={matrix} />
    case "graph":
      return <DirectedGraph nodes={nodes} matrix={matrix} />
    default:
      return null
  }
}
