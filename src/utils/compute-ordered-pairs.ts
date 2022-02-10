/**
 * A function to compute all the pairs of numbers in the relation.
 * @param matrix - a matrix of 0's and 1's
 * @returns an array of 2-element arrays (tuples), pairs of numbers in the relation
 */
export function computeOrderedPairs(matrix: number[][]): number[][] {
  const pairs: number[][] = []
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === 1) {
        pairs.push([i+1, j+1])
      }
    }
  }
  return pairs
}