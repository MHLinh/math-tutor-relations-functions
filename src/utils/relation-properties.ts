/**
 * A function to determine whether a relation is reflexive.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation is reflexive
 */
export function isReflexive(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][i] !== 1) {
      return false
    }
  }
  return true
}

/**
 * A function to determine whether a relation is irreflexive.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation is irreflexive
 */
 export function isIrreflexive(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][i] !== 0) {
      return false
    }
  }
  return true
}

/**
 * A function to determine whether a relation is symmetric.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation is symmetric
 */
 export function isSymmetric(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] !== matrix[j][i]) {
        return false
      }
    }
  }
  return true
}

/**
 * A function to determine whether a relation is antisymmetric.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation is antisymmetric
 */
 export function isAntisymmetric(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(i !== j && matrix[i][j] === matrix[j][i] && matrix[i][j] === 1) {
        return false
      }
    }
  }
  return true
}

/**
 * A function to determine whether a relation is transitive.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation is transitive
 */
 export function isTransitive(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === 1) {
        for(let k = 0; k < matrix.length; k++) {
          if(matrix[j][k] && matrix[i][k]) {
            return false
          }
        }
      }
    }
  }
  return true
}