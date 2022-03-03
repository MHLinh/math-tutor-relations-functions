/**
 * Function to generate array of numbers
 * @param min - the min mark
 * @param max - the max mark
 * @returns an array of numbers
 */
export function generateNumbers(min: number, max: number): number[] {
  const numbers: number[] = []
  for(let i = min; i <= max; i++) {
    numbers.push(i)
  }

  return numbers
}
