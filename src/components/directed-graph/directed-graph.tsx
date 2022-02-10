import React from "react"
import {
  Box,
  Container
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import Graph from "react-graph-vis"
import { v4 as uuidv4 } from "uuid"

interface IDirectedGraphNode {
  id: number | string,
  label: string,
  x?: number,
  y?: number
}

export interface IDirectedGraphEdge {
  id: number | string,
  from: number | string,
  to: number | string,
  color?: string
  label?: string
}

interface IDirectedGraph {
  nodes: IDirectedGraphNode[],
  edges: IDirectedGraphEdge[]
}

/**
 * A component displaying the relation as a directed graph.
 * @param props - nodes and edges for generating the directed graph
 */
export function DirectedGraph(props: IDirectedGraph) {
  const { nodes, edges } = props
  const classes = useStyles()

  const width = 800
  const height = 500
  const id = uuidv4()
  const options = {
    autoResize: true,
    width: "100%",
    height: "100%",
    nodes: {
      font: {
        align: "center",
        size: 50
      },
      widthConstraint: {
        minimum: 50
      },
      shape: "circle"
    },
    edges: {
      smooth: false,
      width: 2,
      arrows: {
        to: {
          scaleFactor: 1.5,
          type: "triangle"
        }
      }
    },
    physics: false,
    interaction: {
      dragNodes: false,// do not allow dragging nodes
      zoomView: false, // do not allow zooming
      dragView: false,  // do not allow dragging
      selectable: false // do not allow selecting nodes
    },
    layout: {
      hierarchical: false
    },
  }

  return(
    <Box className={classes.box}>
      <Container className={classes.graph}>
        <Graph
          key={id}
          graph={{nodes, edges}}
          options={options}
        />
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  graph: {
    width: "min(80vw, 25rem)", // 400 px in rem
    height: "min(40vh, 25rem)", // 400 px in rem
  }
 }))
