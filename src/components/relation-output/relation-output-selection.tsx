/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles
 */
import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { buttonStyle } from "theme"

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
      <Button 
        data-testid="output-change-button"
        variant="contained" 
        onClick={handleOpen}
        className={classes.button}
      >
        Change relation output
      </Button>
      {/* Selection window. */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="output-selection-title"
        aria-describedby="output-selection-types"
      >
        <Box className={classes.boxModal}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                data-testid="output-selection-title"
                id="output-selection-title" 
                align="center" 
                className={classes.title}
              >
                Select a relation representation type for output
              </Typography>
            </Grid>
            <Grid item>
              <List aria-label="out-selection-types">
                {relationOutputTypes.map(({ id, name }) => (
                  <ListItemButton
                    data-testid={id}
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
  button: {
    ...buttonStyle
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