import React from "react"
import { generateGraphInputNodes } from "utils"
import { MatrixContext, IMatrixContext } from "components/matrix-context/matrix-context"
// import { GraphInput } from "components/graph-input/graph-input"
import { MatrixTapGrid } from "components/matrix-tap/matrix-tap-grid"
import { OrderedPairsDragAndDrop } from "components/drag-and-drop/ordered-pairs-drag-and-drop"

interface IRelationInput {
  matrixContextValue: IMatrixContext,   // Matrix context for accessing the matrix and its setter
  matrix: number[][],                   // Relation stored as a matrix
  numOfElements: number,                // Number of elements in the set
  type: string                          // Type of input for displaying relation
}

/**
 * A component displaying the input for the relation with the selected type,
 * a matrix, ordered pairs of numbers, or connecting sets.
 */
export function RelationInput(props: IRelationInput) {
  const { matrixContextValue, matrix, numOfElements, type } = props

  const elements = generateGraphInputNodes(numOfElements)

  const input = (inputType: string) => {
    switch(inputType) {
      case "matrix":
        return <MatrixTapGrid matrix={matrix} />
      case "pairs":
        return <OrderedPairsDragAndDrop />
      // case "sets":
      //   return <GraphInput elementsIn={elements} />
      default:
        return null
    }
  }

  return (
    <MatrixContext.Provider value={matrixContextValue}>
      {input(type)}
    </MatrixContext.Provider>
  )
  
}
