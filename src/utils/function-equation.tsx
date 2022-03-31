import { Equation } from "components/function-equation/function-equation-types"

/**
 * A function that returns the equation the user selected.
 * @param type - the type of the equation
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param xSign - sign for reflecting along x-axis
 * @param ySign - sign for reflecting along x-axis
 * @returns the string equation
 */
export function getFunctionEquation(
  type: Equation,     
  a: number,          
  b: number,          
  c: number,          
  d: number,          
  xSign: string,      
  ySign: string       
): string {
  const linear = `${xSign}${a}(${ySign}${b}(x + ${c})) + ${d}`
  const quadratic = `${xSign}${a}(${ySign}${b}(x + ${c}))^2 + ${d}`
  const cubic = `${xSign}${a}(${ySign}${b}(x + ${c}))^3 + ${d}`
  const sine = `${xSign}${a}sin(${ySign}${b}(x + ${c})) + ${d}`
  const cosine = `${xSign}${a}cos(${ySign}${b}(x + ${c})) + ${d}`

  switch(type) {
    case Equation.Linear:
      return linear
    case Equation.Quadratic:
      return quadratic
    case Equation.Cubic:
      return cubic
    case Equation.Sine:
      return sine
    case Equation.Cosine:
      return cosine
    default:
      return ""
  }
}

/**
 * A function that returns the start point of a function, given domain.
 * @param type - the type of the equation
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param start - start of the domain
 * @returns the start point
 */
export function getFunctionStart (
  type: Equation,     
  a: number,          
  b: number,          
  c: number,          
  d: number,     
  start: number,             
): number[] {

  switch(type) {
    case Equation.Linear: {
      const y = linearValue(a, b, c, d, start)
      return [start, y]
    }
    case Equation.Quadratic: {
      const y = quadraticValue(a, b, c, d, start)
      return [start, y]
    }
    case Equation.Cubic: {
      const y = cubicValue(a, b, c, d, start)
      return [start, y]
    }
    case Equation.Sine: {
      const y = sineValue(a, b, c, d, start)
      return [start, y]
    }
    case Equation.Cosine: {
      const y = cosineValue(a, b, c, d, start)
      return [start, y]
    }
    default:
      return []
  }
}

/**
 * A function that returns the end point of a function, given domain.
 * @param type - the type of the equation
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param end - end of the domain
 * @returns the end point
 */
export function getFunctionEnd (
  type: Equation,     
  a: number,          
  b: number,          
  c: number,          
  d: number,         
  end: number         
): number[] {

  switch(type) {
    case Equation.Linear: {
      const y = linearValue(a, b, c, d, end)
      return [end, y]
    }
    case Equation.Quadratic: {
      const y = quadraticValue(a, b, c, d, end)
      return [end, y]
    }
    case Equation.Cubic: {
      const y = cubicValue(a, b, c, d, end)
      return [end, y]
    }
    case Equation.Sine: {
      const y = sineValue(a, b, c, d, end)
      return [end, y]
    }
    case Equation.Cosine: {
      const y = cosineValue(a, b, c, d, end)
      return [end, y]
    }
    default:
      return []
  }
}

/**
 * A function that returns the start point of a function, given domain.
 * @param type - the type of the equation
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param numbers - the discrete domain
 * @returns the points
 */
 export function getFunctionPoints (
  type: Equation,     
  a: number,          
  b: number,          
  c: number,          
  d: number,     
  numbers: number[],             
): number[][] {
  
  switch(type) {
    case Equation.Linear: {
      return numbers.map((x) => [x, linearValue(a, b, c, d, x)])
    }
    case Equation.Quadratic: {
      return numbers.map((x) => [x, quadraticValue(a, b, c, d, x)])
    }
    case Equation.Cubic: {
      return numbers.map((x) => [x, cubicValue(a, b, c, d, x)])
    }
    case Equation.Sine: {
      return numbers.map((x) => [x, sineValue(a, b, c, d, x)])
    }
    case Equation.Cosine: {
      return numbers.map((x) => [x, cosineValue(a, b, c, d, x)])
    }
    default:
      return []
  }
}

/**
 * Function to calculate linear function value.
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param x - input for the function
 * @returns the value of the linear function
 */
function linearValue(
  a: number,          
  b: number,          
  c: number,          
  d: number,          
  x: number           
): number {
  return a*(b*(x + c)) + d
}

/**
 * Function to calculate quadratic function value.
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param x - input for the function
 * @returns the value of the quadratic function
 */
function quadraticValue(
  a: number,          
  b: number,          
  c: number,          
  d: number,          
  x: number  
): number {
  return a*(b*(x + c))**2 + d
}

/**
 * Function to calculate cubic function value.
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param x - input for the function
 * @returns the value of the cubic function
 */
function cubicValue(
  a: number,          
  b: number,          
  c: number,          
  d: number,          
  x: number  
): number {
  return a*(b*(x + c))**3 + d
}

/**
 * Function to calculate sine function value.
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param x - input for the function
 * @returns the value of the sine function
 */
function sineValue(
  a: number,          
  b: number,          
  c: number,          
  d: number,          
  x: number  
): number {
  return a*Math.sin(b*(x + c)) + d
}

/**
 * Function to calculate cosine function value.
 * @param a - constant A of the equation
 * @param b - constant B of the equation
 * @param c - constant C of the equation
 * @param d - constant D of the equation
 * @param x - input for the function
 * @returns the value of the cosine function
 */
function cosineValue(
  a: number,          
  b: number,          
  c: number,          
  d: number,          
  x: number  
): number {
  return a*Math.cos(b*(x + c)) + d
}
