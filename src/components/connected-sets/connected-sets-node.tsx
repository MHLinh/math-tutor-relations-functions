/**
 * This code uses following libraries: 
 * react, konva, and react-konva.
 */
import React from "react"
import Konva from "konva"
import { Group, Circle, Text } from "react-konva"
import { Node } from "utils"
import { palette } from "theme"

interface IConnectedSetsNode {
  node: Node,         // The node data
  size: number,       // The size of the node
  setSelected: (
    event: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<Event>, 
    id: number
  ) => void,          // Function to set the node as selected
  selected: boolean   // Whether the node is selected
}
export function ConnectedSetsNode(props: IConnectedSetsNode) {
  const { node, size, setSelected, selected } = props
  const { id, groupX, groupY, circleX, circleY, text } = node

  return (
    <Group
      x={groupX} 
      y={groupY}
      onClick={(event) => setSelected(event, id)}
      onTap={(event) => setSelected(event, id)}
    >
      <Circle 
        x={circleX} 
        y={circleY}
        radius={size} 
        fill={selected
          ? palette.green
          : palette.lightGrey
        } 
      />
      <Text 
        text={text}
        fontSize={18} 
        align="center"
        verticalAlign="middle"
        width={size}
      />
    </Group>
  )
}
