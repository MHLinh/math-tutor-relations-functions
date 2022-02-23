/**
 * A function to determine whether a relation is a function.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the relation is a function
 */
export function isFunction(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    let found = false
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 1) {
        // f(x) can only have 2 values
        if(!found) {
          found = true
        } else {
          return false
        }
      }
    }
  }
  return true
}

/**
 * A function to determine whether a function is an onto function.
 * Prerequisite: relation is a function.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the function is an onto function
 */
export function isOnto(matrix: number[][]): boolean {
  // f maps an element x to every element y
  for(let j = 0; j < matrix[0].length; j++) {
    let found = false
    for(let i = 0; i < matrix.length; i++) {
      if(matrix[i][j] === 1) {
        found = true
        break
      }
    }
    if(!found) {
      return false
    }
  }
  return true
}

/**
 * A function to determine whether a function is a one-to-one function.
 * Prerequisite: relation is a function.
 * @param matrix - a matrix of 0's and 1's representing a function
 * @returns whether the function is a one-to-one function
 */
 export function isOneToOne(matrix: number[][]): boolean {
  // f maps distinct elements to distinct elements
  for(let i = 0; i < matrix.length; i++) {
    let found = false
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 1) {
        // f(x) can only have 2 values
        if(!found) {
          found = true
        } else {
          return false
        }
      }
    }
  }
  return true
}

/**
 * A function to determine whether a function is a many-to-one function.
 * Prerequisite: relation is a function.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether the function is a many-to-one function
 */
 export function isManyToOne(matrix: number[][]): boolean {
  // f maps multiple x to the same y
  for(let j = 0; j < matrix[0].length; j++) {
    let found = false
    for(let i = 0; i < matrix.length; i++) {
      if(matrix[i][j] === 1) {
        if(!found) {
          found = true
        } else {
          return true
        }
      }
    }
  }
  return false
}

/**
 * A function to determine whether a function is an identity function.
 * Prerequisite: relation is a function.
 * @param matrix - a matrix of 0's and 1's representing a function
 * @returns whether the function is an identity function
 */
 export function isIdentity(matrix: number[][]): boolean {
  // f maps distinct elements to distinct elements
  // Has to map at least one element
  let found = false
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 1) {
        if(i === j) {
          found = true
        } else {
          return false
        }
      }
    }
  }

  return found
}