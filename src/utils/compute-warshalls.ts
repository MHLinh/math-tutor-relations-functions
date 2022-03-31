/**
 * This code uses following libraries: 
 * lodash.
 */
import cloneDeep from "lodash/cloneDeep"

/**
 * A function to compute the transitive closure of a relation using Warshall's algorithm
 * @param matrix - a matrix of 0's and 1's
 * @returns an array of 2-element arrays (tuples), pairs of numbers in the relation
 */
export function computeWarshalls(matrix: number[][]): number[][][]{
  const steps: number[][][] = []
  const stepMatrix = cloneDeep(matrix)
  steps.push(cloneDeep(stepMatrix))
  for(let k = 0; k < stepMatrix.length; k++) {
    for(let i = 0; i < stepMatrix.length; i++) {
      for(let j = 0; j < stepMatrix.length; j++) {
        if(i !== k && j !== k && stepMatrix[i][j] === 0
          && stepMatrix[i][k] === 1 && stepMatrix[k][j] === 1) {
          stepMatrix[i][j] =  1
        }
      }
    }
    steps.push(cloneDeep(stepMatrix))
  }
  return steps
}
