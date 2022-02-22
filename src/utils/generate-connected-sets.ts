
export interface Node {
  key: string,      // Key for the node
  id: number,       // Id for the node (acts as an index for the node array)
  groupX: number,   // X-coordinate for Group component
  groupY: number,   // Y-coordinate for Group component
  circleX: number,  // X-coordinate for Circle component
  circleY: number,  // Y-coordinate for Circle component
  text: string      // Text for the node
}

export interface Nodes {
  startNodes: Node[], // Start nodes (x set)
  endNodes: Node[],   // End nodes (y set)
}

/**
 * A function to generate all the nodes for the connecting sets for inputting a relation.
 * @param xElements - number of elements in x set
 * @param yElements - number of elements in y set
 * @param width - width of the canvas
 * @param size - size of the node (number)
 * @param distance - distance between each node (number)
 * @returns an object list arrays of start and end nodes
 */
export function generateConnectedSetsNodes(
  xElements: number, 
  yElements: number, 
  width: number, 
  size: number, 
  distance: number
): Nodes {
  const startNodes: Node[] = []
  const endNodes: Node[] = []
  console.log(yElements)
  for(let i = 0; i < xElements; i++) {
    startNodes.push({
      key: `start-${i}`,
      id: i,
      groupX: width/4 - size/2,
      groupY: size/2 + distance * i,
      circleX: size/2,
      circleY: size/2,
      text: `${i + 1}`
    })
  }

  for(let i = 0; i < yElements; i++) {
    endNodes.push({
      key: `end-${i}`,
      id: i,
      groupX: width/4 * 3 - size/2,
      groupY: size/2 + distance * i,
      circleX: size/2,
      circleY: size/2,
      text: `${i + 1}`
    })
  }

  return { startNodes, endNodes }
}


export interface Edge {
  key: string,      // Key for the edge
  startX: number,   // X-coordinate of the start of the edge
  startY: number,   // Y-coordinate of the start of the edge
  endX: number,     // X-coordinate of the end of the edge
  endY: number      // Y-coordinate of the end of the edge
}

/**
 * A function to generate all the edges for the connecting sets for inputting a relation.
 * @param matrix - a matrix of 0's and 1's
 * @param startNodes - an array of start nodes (x set)
 * @param endNodes - an array of end nodes (y set)
 * @returns an array of edges
 */
export function generateConnectedSetsEdges(
  matrix: number[][],
  startNodes: Node[],
  endNodes: Node[],
): Edge[] {
  const edges: Edge[] = []

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 1) {
        edges.push({
          key: `edge-${i}-${j}`,
          startX: startNodes[i].groupX + startNodes[i].circleX * 3,
          startY: startNodes[i].groupY + startNodes[i].circleY,
          endX: endNodes[j].groupX - endNodes[j].circleX,
          endY: endNodes[j].groupY + endNodes[j].circleY
        })
      }
    }
  }

  return edges
}