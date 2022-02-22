import React from "react"
import Konva from "konva"
import { Arrow } from "react-konva"
import { Edge } from "utils"
import { palette } from "theme"

interface IConnectedSetsEdge {
  edge: Edge,         // The edge data
  setSelected: (
    event: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<Event>, 
    key: string
  ) => void,          // Function to set the edge as selected
  selected: boolean   // Whether the edge is selected
}

export function ConnectedSetsEdge(props: IConnectedSetsEdge) {
  const { edge, setSelected, selected } = props
  const { key, startX, startY, endX, endY } = edge

  return (
    <Arrow 
      stroke={selected
        ? palette.red
        : palette.black
      } 
      strokeWidth={3}
      fill={selected
        ? palette.red
        : palette.black
      } 
      points={[startX, startY, endX, endY]}
      onClick={(event) => setSelected(event, key)}
      onTap={(event) => setSelected(event, key)}
    />
  )
}
