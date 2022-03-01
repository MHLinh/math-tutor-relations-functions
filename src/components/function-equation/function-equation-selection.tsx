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
import { Equation } from "./function-equation-types"

const functionTypes = [
  { id: Equation.Linear, name: "Linear Function" },
  { id: Equation.Quadratic, name: "Quadratic Function" },
  { id: Equation.Cubic, name: "Cubic Function" },
  { id: Equation.Sine, name: "Sine Function" },
  { id: Equation.Cosine, name: "Cosine Function" }
]

interface IFunctionEquationSelection {
  selectedType: string,                     // The selected type of function equation
  setSelectedType: (type: Equation) => void   // The function to set the selected type of function equation
}

/**
 * A component displaying modal dialog box for function equation type selection.
 * The user should be able to select the type of function equation to show. 
 */
export function FunctionEquationSelection (props: IFunctionEquationSelection) {
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
    id: Equation,
  ) => {
    setSelectedType(id)
    setOpen(false)
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Change type of function
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="function-selection-title"
        aria-describedby="function-selection-types"
      >
        <Box className={classes.boxModal}>
          <Grid container direction="column">
            <Grid item>
              <Typography id="function-selection-title" align="center" className={classes.title}>
                Select a type of function
              </Typography>
            </Grid>
            <Grid item>
              <List aria-label="function-selection-types">
                {functionTypes.map(({ id, name }) => (
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
    backgroundColor: theme.palette.common.white,
    border: "2px solid #000",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(2),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(400),
    },
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