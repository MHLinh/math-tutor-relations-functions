import Dexie, { Table } from "dexie"

export interface IRelation {
  id?: string         // The id of the relation
  name: string        // The name of the relation set by user
  type: string        // The type for saving in the database
  matrix: number[][]  // The relation stored in a matrix
}

export interface IPoints {
  id?: string         // The id of the list of points
  name: string        // The name of the list of points set by user
  type: string        // The type for saving in the database
  points: number[][]  // The points stored as a list
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
    this.version(2).stores({
      relations: "++id, name, type, matrix",
      points: "++id, name, type, matrix"
    })
  }
}

export const db = new DatabaseDexie()
