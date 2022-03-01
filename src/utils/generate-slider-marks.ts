import { roundToTwoDecimal } from "./round-to-two-decimal"

interface Mark {
  value: number,
  label: string
}

/**
 * Function to generate marks for slider
 * @param step - the step between marks
 * @param min - the min mark
 * @param max - the max mark
 * @returns an array of marks
 */
export function generateSliderMarks(step: number, min: number, max: number): Mark[] {
  const marks: Mark[] = []
  for(let i = min; i <= max; i = roundToTwoDecimal(i + step)) {
    marks.push({
      value: i,
      label: `${i}`
    })
  }
  return marks
}