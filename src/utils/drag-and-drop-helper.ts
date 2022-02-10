import { IItem, IState } from "components"

// Item generator for drag and drop.
/**
 * A function for generating a drag and drop item.
 * @param rowIndex - row index in the matrix starting from 1
 * @param colIndex - column index in the matrix starting from 1
 * @param order - order of the item
 * @returns an item for drag and drop list
 */
const generateItem = (rowIndex:number, colIndex: number, order: number): IItem => ({
    id: `Pair ${rowIndex}-${colIndex}`,
    content: `(${rowIndex},${colIndex})`,
    order,
    rowIndex, // row index
    colIndex // column index,
  })

/**
 * A function for converting a relation as a matrix into list of drag and drop items.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns 
 */
export const getDragAndDropState = (matrix: number[][]): IState => {
  const items: IItem[] = []
  const selected: IItem[] = []
  let count = 0
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === 0) {
        items.push(generateItem(i+1, j+1, count))
      } else {
        selected.push(generateItem(i+1, j+1, count))
      }
      count++
    }
  }
  return { items, selected }
}