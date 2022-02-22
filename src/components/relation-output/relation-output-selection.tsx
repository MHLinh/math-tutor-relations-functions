import React, { useState } from "react"
import {
  Box,
  Button,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Modal,  
} from "@mui/material"
import { makeStyles } from "@mui/styles"

export const relationOutputTypes = [
  { id: "matrix", name: "Matrix" },
  { id: "pairs", name: "Ordered pairs" },
  { id: "graph", name: "Directed graph" }
]

interface IRelationOutputSelection {
  selectedType: string,                     // The selected type of output
  setSelectedType: (type: string) => void   // The function to set the selected type of output
}

/**
 * A component displaying modal dialog box for output type selection.
 * The user should be able to select to output the relation as 
 * a matrix, ordered pairs of numbers, or directed graph. 
 */
export function RelationOutputSelection(props: IRelationOutputSelection) {
  const { selectedType, setSelectedType } = props
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string,
  ) => {
    setSelectedType(id)
    setOpen(false)
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Change relation output
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="output-selection-title"
        aria-describedby="out-selection-types"
      >
        <Box className={classes.boxModal}>
          <Grid container direction="column">
            <Grid item>
              <Typography id="output-selection-title" align="center" className={classes.title}>
                Select a relation representation type for output
              </Typography>
            </Grid>
            <Grid item>
              <List aria-label="out-selection-types">
                {relationOutputTypes.map(({ id, name }) => (
                  <ListItemButton
                    key={id}
                    selected={selectedType === id}
                    onClick={(event) => handleListItemClick(event, id)}
                    className={classes.listItem}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  )
}


const useStyles = makeStyles((theme: any) => ({
  boxModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.common.white,
    border: "2px solid #000",
    padding: theme.spacing(2)
  },
  listItem: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.custom.lightBlue,
    },
    "&:hover": {
      backgroundColor: theme.palette.custom.lightGrey,
    }
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
  }
 }))