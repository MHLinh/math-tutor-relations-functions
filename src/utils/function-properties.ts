/**
 * A function to determine whether all elements 
 * in the domain have been mapped to an element in the codomain.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether all domain elements have been mapped.
 */
 export function isDomainMapped(matrix: number[][]): boolean {
  for(let i = 0; i < matrix.length; i++) {
    let found = false
    for(let j = 0; j < matrix[0].length; j++) {
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
 * A function to determine whether elements of a domain 
 * map to more than one element in the codomain.
 * @param matrix - a matrix of 0's and 1's representing a relation
 * @returns whether an element in the domain is mapped to two different elements.
 */
export function isOneMapping(matrix: number[][]): boolean {
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
  for(let j = 0; j < matrix[0].length; j++) {
    let found = false
    for(let i = 0; i < matrix.length; i++) {
      if(matrix[i][j] === 1) {
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