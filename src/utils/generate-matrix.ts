/**
 * A function to generate a square matrix with given initial value.
 * @param size - the size of the matrix
 * @param initialValue - the value to generate the matrix with
 * @returns a square matrix filled with given initial value
 */
export function generateMatrix(size: number, initialValue: number = 0): number[][] {
  const matrix = new Array(size).fill(initialValue)
                      .map(() => new Array(size).fill(initialValue))
  return matrix
}

/**
  * A function to generate a rectangular matrix with given initial value.
  * @param rows - the number of columns in the matrix 
  * @param columns - the y size of the matrix
  * @param initialValue - the value to generate the matrix with
  * @returns a rectangular matrix filled with given initial value
  */
export function generateRectMatrix(rows: number, columns: number, initialValue: number = 0): number[][] {
 const matrix = new Array(rows).fill(initialValue)
                     .map(() => new Array(columns).fill(initialValue))
 return matrix
}
