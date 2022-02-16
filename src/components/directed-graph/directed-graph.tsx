import React from "react"
import {
  Box,
  Container,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import Graph from "react-graph-vis"
import { v4 as uuidv4 } from "uuid"
import { computeDirectedGraphEdges } from "utils"

export interface IDirectedGraphNode {
  id: number | string,  // Id of the node
  label: string,        // Label of the node
  x?: number,           // x-coordinate of the node
  y?: number            // y-coordinate of the node
}

export interface IDirectedGraphEdge {
  id: number | string,    // Id of the edge
  from: number | string,  // Id of the starting node
  to: number | string,    // Id of the end node
  color?: string          // Color of the edge
  label?: string          // Label of the edge
}

interface IDirectedGraph {
  matrix: number[][],           // Matrix representing the relation
  nodes: IDirectedGraphNode[]   // Nodes for generating the directed graph
}

/**
 * A component displaying the relation as a directed graph.
 */
export function DirectedGraph(props: IDirectedGraph) {
  const { matrix, nodes } = props
  const classes = useStyles()

  const edges = computeDirectedGraphEdges(matrix)

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
    <Box>
      <Typography align="center" className={classes.text}>
        Relation as a directed graph:
      </Typography>
      <Box className={classes.boxGraph}>
        <Container className={classes.graph}>
          <Graph
            key={id}
            graph={{nodes, edges}}
            options={options}
          />
        </Container>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  boxGraph: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  graph: {
    width: "min(80vw, 25rem)", // 400 px in rem
    height: "min(40vh, 25rem)", // 400 px in rem
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
 }))
