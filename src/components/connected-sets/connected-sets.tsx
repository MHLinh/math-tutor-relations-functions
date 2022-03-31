/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles, lodash, konva, and react-konva.
 */
import React, { useState, useEffect, useContext } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import makeStyles from "@mui/styles/makeStyles"
import cloneDeep from "lodash/cloneDeep"
import Konva from "konva"
import { Stage, Layer } from "react-konva"
import { center } from "theme"
import { MatrixContext } from "components/matrix-context/matrix-context"
import { 
  generateConnectedSetsLabels,
  generateConnectedSetsNodes, 
  generateConnectedSetsEdges 
} from "utils"
import { ConnectedSetsInfo } from "./connected-sets-info"
import { ConnectedSetsLabel } from "./connected-sets-label"
import { ConnectedSetsNode } from "./connected-sets-node"
import { ConnectedSetsEdge } from "./connected-sets-edge"

/**
 * A component displaying pairs of numbers to drag and drop for inputting a relation.
 */
export function ConnectedSets() {
  const { matrix, setter } = useContext(MatrixContext)
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  const [selectedNodes, setSelectedNodes] = useState({
    start: -1,
    end: -1
  })
  const [selectedEdge, setSelectedEdge] = useState("")

  const classes = useStyles()

  const xElements = matrix.length
  const yElements = matrix[0].length  // Note that the matrix always is 2-dimensional

  const size = 16
  const distance = 50
  const width = small 
                  ? 300
                  : 500
  const height = distance * (Math.max(xElements, yElements) + 1)
  const labels = generateConnectedSetsLabels(width, size)
  const { startNodes, endNodes } = 
    generateConnectedSetsNodes(xElements, yElements, width, size, distance)
  const edges = generateConnectedSetsEdges(matrix, startNodes, endNodes)

  // Update the relation is nodes were selected.
  useEffect(() => {
    if(selectedNodes.start >= 0 && selectedNodes.end >= 0) {
      const tempMatrix = cloneDeep(matrix)
      const rowIndex = startNodes[selectedNodes.start].id
      const colIndex = endNodes[selectedNodes.end].id

      if(matrix[rowIndex][colIndex] === 0) {
        tempMatrix[rowIndex][colIndex] = 1
      } else {
        tempMatrix[rowIndex][colIndex] = 0
      }
      setter(tempMatrix)

      // Deselect nodes.
      setSelectedNodes({
        start: -1,
        end: -1
      })

      // Deselect edge.
      setSelectedEdge("")
    }
  }, [selectedNodes])

  const handleClickStart = (
    event: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<Event>,
    id: number
  ) => {
    // If not selected then select, else deselect.
    if(selectedNodes.start !== id){
      setSelectedNodes({
        ...selectedNodes,
        start: id
      })
    } else {
      setSelectedNodes({
        ...selectedNodes,
        start: -1
      })
    }
  }

  const handleClickEnd = (
    event: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<Event>,
    id: number
  ) => {
    // If not selected then select, else deselect.
    if(selectedNodes.end !== id){
      setSelectedNodes({
        ...selectedNodes,
        end: id
      })
    } else {
      setSelectedNodes({
        ...selectedNodes,
        end: -1
      })
    }
  }

  const handleClickEdge = (
    event: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<Event>,
    key: string
  ) => {
    // If not selected then select, else deselect.
    if(selectedEdge !== key){
      setSelectedEdge(key)
    } else {
      setSelectedEdge("")
    }
    
  }

  return (
    <Box data-testid="directed-graph-output">
      <Typography align="center" className={classes.text}>
        Select numbers on the left and right to modify the relation
      </Typography>
      <Box className={classes.box}>
        <Stack direction="row-reverse">
          <ConnectedSetsInfo />
        </Stack>
      </Box>
      <Box className={classes.center}>
        <Stage width={width} height={height}>
          <Layer>
            {labels.map((label) => (
              <ConnectedSetsLabel
                key={label.key} 
                label={label} 
                size={size} 
              />
            ))}
            {startNodes.map((node) => (
               <ConnectedSetsNode 
                key={node.key} 
                node={node} 
                size={size} 
                setSelected={handleClickStart}
                selected={selectedNodes.start === node.id}
               />
            ))}
            {endNodes.map((node) => (
               <ConnectedSetsNode 
                key={node.id} 
                node={node} 
                size={size} 
                setSelected={handleClickEnd}
                selected={selectedNodes.end === node.id}
              />
            ))}
            {edges.map((edge) => (
               <ConnectedSetsEdge
                key={edge.key} 
                edge={edge} 
                setSelected={handleClickEdge}
                selected={selectedEdge === edge.key}
               />
            ))}
          </Layer>
        </Stage>
      </Box>
    </Box>

  )
}
const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  center: {
    ...center,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
 }))
