/**
 * This code uses following libraries: 
 * lodash.
 */
import uniqWith from "lodash/uniqWith"
import isEqual from "lodash/isEqual"

/**
 * A function for generating a list of random points.
 * @param min - min coordinate to be generated
 * @param max - max coordinate to be generated
 * @param amount - amount of points to be generated
 * @returns a list of points
 */
export function generatePoints(min: number, max: number, amount: number): number[][] {
  const points: number[][] = []
  for(let i = 0; i < amount; i++) {
    const x = Math.floor(Math.random() * (max - min + 1) + min)
    const y = Math.floor(Math.random() * (max - min + 1) + min)
    points.push([x, y])
  }

  const uniquePoints = uniqWith(points, isEqual)

  return uniquePoints
}
