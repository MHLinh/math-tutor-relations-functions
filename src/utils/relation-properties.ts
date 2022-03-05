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
 * A function to determine whether a relation 
 * is missing loops (pairs of the same element) for it to be reflexive.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns an array of missing loops
 */
export function checkReflexive(matrix: number[][]): string[] {
  const pairs: string[] = []
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][i] !== 1) {
      pairs.push(`(${i+1},${i+1})`)
    }
  }
  return pairs
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
 * A function to determine whether a relation 
 * has loops (pairs of the same element) that make it not irreflexive.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns an array of loops in the relation
 */
export function checkIrreflexive(matrix: number[][]): string[] {
  const pairs: string[] = []
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][i] !== 0) {
      pairs.push(`(${i+1},${i+1})`)
    }
  }
  return pairs
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
 * A function to determine whether a relation 
 * is missing pairs of elements for it to be symmetric.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns an array of missing pairs
 */
export function checkSymmetric(matrix: number[][]): string[] {
  const pairs: string[] = []
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix.length; j++) {
      if(matrix[i][j] !== matrix[j][i]) {
        if(matrix[i][j] === 1) {
          pairs.push(`(${j+1},${i+1})`)
        } else {
          pairs.push(`(${i+1},${j+1})`)
        }
      }
    }
  }
  return pairs
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
 * A function to determine whether a relation 
 * has pairs of elements that make it not antisymmetric.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns an array of pairs in the relation
 */
export function checkAntisymmetric(matrix: number[][]): string[] {
  const pairs: string[] = []
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix.length; j++) {
      if(i !== j && matrix[i][j] === matrix[j][i] && matrix[i][j] === 1) {
        pairs.push(`(${i+1},${j+1})`)
        pairs.push(`(${j+1},${i+1})`)
      }
    }
  }
  return pairs
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
          if(matrix[j][k] === 1 && matrix[i][k] === 0) {
            return false
          }
        }
      }
    }
  }
  return true
}

/**
 * A function to determine whether a relation 
 * is missing pairs of elements for it to be transitive.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns an array of missing pairs
 */
export function checkTransitive(matrix: number[][]): string[] {
  const pairs: string[] = [] 
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === 1) {
        for(let k = 0; k < matrix.length; k++) {
          if(matrix[j][k] === 1 && matrix[i][k] === 0) {
            pairs.push(`(${i+1},${k+1})`)
          }
        }
      }
    }
  }
  return pairs
}

/**
 * A function to determine whether a relation has all pairs of elements.
 * Either has (a,b) or (b,a).
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation has all pairs of elements
 */
export function isAllPairs(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix.length; j++) {
      if(matrix[i][j] !== 1) {
        if(matrix[j][i] !== 1) {
          return false
        }
      }
    }
  }
  return true
}
