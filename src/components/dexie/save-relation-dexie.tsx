/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React, { useState, useContext } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import makeStyles from "@mui/styles/makeStyles"
import { buttonStyle } from "theme"
import { MatrixContext } from "components/matrix-context/matrix-context"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { db } from "./dexie"

// Status deciding what alert to show.
const Status = {
  idle: "IDLE",
  successSave: "SUCCESS_SAVE",
  errorSave: "ERROR_SAVE"
}

interface ISaveRelationDexie {
  type: string, // The type of relation to be saved
}

/**
 * A component handling the saving of a relation to IndexedDB.
 */
export function SaveRelationDexie(props: ISaveRelationDexie) {
  const { type } = props
  const [name, setName] = useState("Unnamed")
  const [openSave, setOpenSave] = useState(false)
  const [status, setStatus] = useState(Status.idle)
  const { matrix } = useContext(MatrixContext)

  // Status of data saving.
  const openSuccess = status === Status.successSave
  const openError = status === Status.errorSave

  const classes = useStyles()

  const handleOpenSave = () => {
    setOpenSave(true)
  }

  const handleCloseSave = () => {
    setOpenSave(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSave = async () => {
    if(name !== "") {
      try {
        // Save the relation
        await db.relations.add({
          name,
          type,
          matrix,
          timestamp: new Date()
        })

        setName("Unnamed")
        setOpenSave(false)
        setStatus(Status.successSave)
      } catch (error) {
        setOpenSave(false)
        setStatus(Status.errorSave)
      }
    }
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setStatus(Status.idle)
  }

  return (
    <Box>
      <Button
        data-testid="save-relation-button"
        variant="contained"
        onClick={handleOpenSave}
        className={classes.button}
      >
        Save relation
      </Button>
      {/* Save data window */}
      <Modal
        open={openSave}
        onClose={handleCloseSave}
        aria-labelledby="save-relation-title"
      >
        <Box className={classes.boxModal}>
          <Grid 
            container 
            direction="column" 
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography 
                data-testid="save-relation-title" 
                id="save-relation-title" 
                align="center" 
                className={classes.title}
              >
                Save the current relation
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                id="relation-name"
                label="Name"
                defaultValue={name}
                onChange={handleChange}
                error={name === ""}
                helperText = {name === ""
                  ? "Please fill in this field"
                  : ""
                }
              />
            </Grid>
            <Grid item>
              <Button
                data-testid="save-button"
                variant="contained"
                onClick={handleSave}
                className={classes.buttonModal}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* Alert messages. */}
      <CustomAlert 
        open={openSuccess}
        handleClose={handleClose}
        severity="success"
        text="The relation was saved successfully."
      />
      <CustomAlert 
        open={openError}
        handleClose={handleClose}
        severity="error"
        text="An error occurred while saving the relation. Please try again."
      />
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
    padding: theme.spacing(2),
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(300),
    },
  },
  button: {
    ...buttonStyle
  },
  buttonModal: {
    width: theme.typography.pxToRem(100)
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
  }
 }))
 