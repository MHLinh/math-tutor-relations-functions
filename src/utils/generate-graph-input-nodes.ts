import { Node, Position } from "react-flow-renderer"

export function generateGraphInputNodes(elementsNumber: number): Node[] {
  const elements: Node[] = []
  for(let i = 0; i < elementsNumber; i++) {
    elements.push({
      id: `Input-${i+1}`,
      position: {
        x: 0,
        y: 100 * i
      },
      data: {
        label: `${i+1}`
      },
      type: "input",
      sourcePosition: Position.Right,
    })
  }
  for(let i = 0; i < elementsNumber; i++) {
    elements.push({
      id: `Output-${i+1}`,
      position: {
        x: 500,
        y: 100 * i
      },
      data: {
        label: `${i+1}`
      },
      type: "output",
      targetPosition: Position.Left,
    })
  }
  return elements
}