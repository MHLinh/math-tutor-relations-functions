import React from "react"
import { Group, Text } from "react-konva"
import { Label } from "utils"

interface IConnectedSetsLabel {
  label: Label,   // The label data
  size: number,       // The size of the label
}
export function ConnectedSetsLabel(props: IConnectedSetsLabel) {
  const { label, size } = props
  const { groupX, groupY, text } = label

  return (
    <Group
      x={groupX} 
      y={groupY}
    >
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
