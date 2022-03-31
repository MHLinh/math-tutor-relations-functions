/**
 * This code uses following libraries: 
 * dexie and dexie-observable.
 */
import Dexie, { Table } from "dexie"
import "dexie-observable"

export interface IRelation {
  id?: string         // The id of the relation
  name: string        // The name of the relation set by user
  type: string        // The type for saving in the database
  matrix: number[][]  // The relation stored in a matrix
  timestamp: Date     // The time the relation was saved
}

export interface IPoints {
  id?: string         // The id of the list of points
  name: string        // The name of the list of points set by user
  type: string        // The type for saving in the database
  points: number[][]  // The points stored as a list
  timestamp: Date     // The time the points were saved
}

/**
 * The database for managing saving and loading 
 * relations into and from IndexedDB
 */
export class DatabaseDexie extends Dexie {
  relations!: Table<IRelation>
  
  points!: Table<IPoints>

  constructor() {
    super("myDatabase")
    this.version(3).stores({
      relations: "$$id, name, type, matrix, timestamp",
      points: "$$id, name, type, matrix, timestamp"
    })
  }
}

export const db = new DatabaseDexie()
