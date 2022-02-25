/**
 * A function to round number to two decimal places.
 * @param x - a number to round
 * @returns a number rounded to two decimal places
 */
export function roundToTwoDecimal(x: number) {
  return Math.round(x * 100 + Number.EPSILON ) / 100
}
