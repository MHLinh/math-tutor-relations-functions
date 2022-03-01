import { Equation } from "components/function-equation/function-equation-types"

/**
 * A function that returns the equation the user selected.
 */
export function getFunctionEquation(
  type: Equation,     // The type of the equation
  a: number,          // Constant A of the equation
  b: number,          // Constant B of the equation
  c: number,          // Constant C of the equation
  d: number,          // Constant D of the equation
  xSign: string,   // Sign for reflecting along x-axis
  ySign: string    // Sign for reflecting along x-axis
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
