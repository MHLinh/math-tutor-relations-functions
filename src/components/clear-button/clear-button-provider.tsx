/**
 * This code uses following libraries: 
 * react.
 */
import React from "react"
import { MatrixContext, IMatrixContext } from "components/matrix-context/matrix-context"
import { ClearButton } from "./clear-button"

interface IClearButtonProvider {
  matrixContextValue: IMatrixContext, // Matrix context for accessing the matrix and its setter
}

/**
 * A component providing the matrix context to the clear button.
 * Allows for accessing the matrix and clearing it.
 */
export function ClearButtonProvider(props: IClearButtonProvider) {
  const { matrixContextValue } = props

  return (
    <MatrixContext.Provider value={matrixContextValue}>
      <ClearButton />
    </MatrixContext.Provider>
  )
}
