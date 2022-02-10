import React from "react"

export interface IMatrixContext {
  matrix: number[][],
  setter: (matrix: number[][]) => void
}

/**
 * React context used to access the matrix and modify in children components.
 */
export const MatrixContext = React.createContext<IMatrixContext>({
  matrix: [[]],
  setter: (matrix: number[][]) => {}
})
