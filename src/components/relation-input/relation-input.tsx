import React from "react"
import { MatrixContext, IMatrixContext } from "components/matrix-context/matrix-context"
import { ConnectedSets } from "components/connected-sets/connected-sets"
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

  const input = (inputType: string) => {
    switch(inputType) {
      case "matrix":
        return <MatrixTapGrid matrix={matrix} />
      case "pairs":
        return <OrderedPairsDragAndDrop />
      case "sets":
        return <ConnectedSets numOfElements={numOfElements}/>
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
