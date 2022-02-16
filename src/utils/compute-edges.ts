import { IDirectedGraphEdge } from "components"

/**
 * A function to compute the edges for a directed graph.
 * @param matrix - a matrix of 0's and 1's
 * @returns an array of edges
 */
export function computeDirectedGraphEdges(matrix: number[][]): IDirectedGraphEdge[] {
  const edges: IDirectedGraphEdge[] = []
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === 1) {
        const edge = {}
        if(i === j) {
          edges.push({
            id: `${i+1}-${j+1}`,
            from: i + 1,
            to: j + 1,
            color: "red"
          })
        } else {
          edges.push({
            id: `${i+1}-${j+1}`,
            from: i + 1,
            to: j + 1
          })
        }
      }
    }
  }
  return edges
}
