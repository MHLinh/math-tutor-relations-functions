/**
 * A function to generate a square matrix with given initial value.
 * @param size - the size of the matrix
 * @param initialValue - the value to generate the matrix with
 * @returns a square matrix fill with given initial value
 */
export function generateMatrix(size: number, initialValue: number = 0): number[][] {
  const matrix = new Array(size).fill(initialValue)
                      .map(() => new Array(size).fill(initialValue))
  return matrix
}