import React, { createContext } from "react"


export interface IPointsListContext {
  selected: number,                     // Index of selected list of points
  setter: (selected: number) => void    // Function to set the points
  deleteFunction: (string: string) => void  // Function to delete the points
}

/**
 * React context used to access the selected points, 
 * modify the current points, and delete saved points in children components.
 */
export const PointsListContext = createContext<IPointsListContext>({
  selected: -1,
  setter: (selected: number) => {},
  deleteFunction: (id: string) => {}
})
