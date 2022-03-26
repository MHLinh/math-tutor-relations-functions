import _ from "lodash"

/**
 * A function to check if there are multiple points on the graph in a vertical line.
 * @param points - the x position
 * @param points - the point on the graph
 * @returns whether there are multiple points in a vertical line.
 */
export function verticalLineTest(position :number, points: number[][]): boolean {
  const filtered = points.filter(point => point[0] === position)
  const uniqueFiltered = _.uniqWith(filtered, _.isEqual)

  return uniqueFiltered.length > 1
}
