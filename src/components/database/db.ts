import Dexie, { Table } from "dexie"

export interface IRelation {
  id?: number         // The id of the relation
  name: string        // The name of the relation set by user
  type: string        // The type of the relation (for displaying in correct pages)
  matrix: number[][]  // The relation stored in a matrix
}

/**
 * The database for managing saving and loading 
 * relations into and from IndexedDB
 */
export class DatabaseDexie extends Dexie {
  relations!: Table<IRelation> 

  constructor() {
    super("myDatabase")
    this.version(1).stores({
      relations: "++id, name, type, matrix"
    })
  }
}

export const db = new DatabaseDexie()