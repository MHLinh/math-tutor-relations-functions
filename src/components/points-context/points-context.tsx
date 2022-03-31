/**
 * This code uses following libraries: 
 * react.
 */
import React, { createContext } from "react"

export interface IPointsContext {
  points: number[][],
  setter: (points: number[][]) => void
}

/**
 * React context used to access the points and modify it in children components.
 */
export const PointsContext = createContext<IPointsContext>({
  points: [[]],
  setter: (points: number[][]) => {}
})
