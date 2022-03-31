/**
 * This code uses following libraries: 
 * react.
 */
import React, { createContext } from "react"


export interface IRelationsListContext {
  selected: number,                     // Index of selected relation in list
  setter: (selected: number) => void    // Function to set the relation
  deleteFunction: (id: string) => void  // Function to delete the relation
}

/**
 * React context used to access the selected relation, 
 * modify the current relation, and delete saved relations in children components.
 */
export const RelationsListContext = createContext<IRelationsListContext>({
  selected: -1,
  setter: (selected: number) => {},
  deleteFunction: (id: string) => {}
})
