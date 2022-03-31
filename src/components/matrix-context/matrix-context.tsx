/**
 * This code uses following libraries: 
 * react.
 */
import React, { createContext } from "react"

export interface IMatrixContext {
  matrix: number[][],
  setter: (matrix: number[][]) => void
}

/**
 * React context used to access the matrix and modify it in children components.
 */
export const MatrixContext = createContext<IMatrixContext>({
  matrix: [[]],
  setter: (matrix: number[][]) => {}
})
