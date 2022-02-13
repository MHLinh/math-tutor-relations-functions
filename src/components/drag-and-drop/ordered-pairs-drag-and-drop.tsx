/** The code was modified based on the following library use example 
  * https://github.com/abeaudoin2013/react-beautiful-dnd-multi-list-typescript-example/blob/master/src/App.tsx
  */
import React, { useContext } from "react"
import {
  Box,
  Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,

  DropResult,
  DroppableStateSnapshot, DraggableProvided, DraggableStateSnapshot
} from "react-beautiful-dnd"
import { getDragAndDropState } from "utils"
import { palette } from "theme"
import { MatrixContext } from "components/matrix-context/matrix-context"
import { IItem } from "./drag-and-drop-interface"

/**
 * A component displaying pairs of numbers to drag and drop for inputting a relation.
 */
export function OrderedPairsDragAndDrop() {
  const { matrix, setter } = useContext(MatrixContext)
  const state = getDragAndDropState(matrix)
  const classes = useStyles()

  const getList = (id: string): IItem[] => state[id]

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result

    // Dropped outside the list
    if (!destination) {
      return
    }

    // Dropped into different lists
    if (source.droppableId !== destination.droppableId) {
      const tempMatrix = [...matrix]

      // Dragging from items to selected means adding pair to the relation.
      // Otherwise we are removing a pair from the relation.
      const sourceList = getList(source.droppableId)
      const { rowIndex, colIndex }  = sourceList[source.index]
      if(source.droppableId === "items") {
        tempMatrix[rowIndex-1][colIndex-1] = 1
      } else {
        tempMatrix[rowIndex-1][colIndex-1] = 0
      }
      setter(tempMatrix)
    }
  }

  return (
    <Box>
      <Typography align="center" className={classes.text}>
        Drag and drop pairs of numbers to modify the relation
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box className={classes.box}>
          <Typography>
            Pairs of numbers in the relation:
          </Typography>
          <Droppable droppableId="selected" direction="horizontal">
            {(providedDroppable2:DroppableProvided, snapshotDroppable2:DroppableStateSnapshot) => (
              <div
                ref={providedDroppable2.innerRef}
                style={getListStyle(snapshotDroppable2.isDraggingOver)}>
                {state.selected.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}>
                    {(providedDraggable2:DraggableProvided, snapshotDraggable2:DraggableStateSnapshot) => (
                      <div>
                        <div
                          ref={providedDraggable2.innerRef}
                          {...providedDraggable2.draggableProps}
                          {...providedDraggable2.dragHandleProps}
                          style={getItemStyle(
                            providedDraggable2.draggableProps.style,
                            snapshotDraggable2.isDragging
                          )}>
                          {item.content}
                        </div>
                        {providedDraggable2.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {providedDroppable2.placeholder}
              </div>
            )}
          </Droppable>
        </Box>
        <Box className={classes.box}>
          <Typography>
            Pairs of numbers not in the relation:
          </Typography>
          <Droppable droppableId="items" direction="horizontal">
            {(provided:DroppableProvided, snapshot:DroppableStateSnapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(providedDraggable:DraggableProvided, snapshotDraggable:DraggableStateSnapshot) => (
                        <div>
                          <div
                            ref={providedDraggable.innerRef}
                            {...providedDraggable.draggableProps}
                            {...providedDraggable.dragHandleProps}
                            style={getItemStyle(
                              providedDraggable.draggableProps.style,
                              snapshotDraggable.isDragging
                            )}
                          >
                            {item.content}
                          </div>
                          {providedDraggable.placeholder}
                        </div>
                      )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Box>
      </DragDropContext>
    </Box>
  )
}

const grid = 8

const getItemStyle = (draggableStyle: any, isDragging: boolean): {} => ({
  userSelect: "none",
  padding: 2 * grid,
  margin: `0 ${grid / 2}px 0 ${grid / 2}px`,
  background: isDragging
    ? palette.lightGreen
    : palette.grey,
  ...draggableStyle
})

const getListStyle = (isDraggingOver: boolean): {} => ({
  background: isDraggingOver
    ? palette.lightBlue
    : palette.lightGrey,
  display: "flex",
  padding: `${grid}px ${grid}px 0 ${grid}px`,
  overflow: "auto",
  height: 80
})

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(22),
    },
  }
}))