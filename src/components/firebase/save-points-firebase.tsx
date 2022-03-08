import React, { useState, useContext } from "react"
import {
  Box,
  Button,
  Grid,
  Modal, 
  TextField,
  Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {
  setDoc,
  doc,
  collection,
  Timestamp,
} from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import _ from "lodash"
import { PointsContext } from "components/points-context/points-context"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { auth, db } from "./firebase"

// Status deciding what alert to show.
const Status = {
  idle: "IDLE",
  successSave: "SUCCESS_SAVE",
  errorSave: "ERROR_SAVE"
}

interface ISavePointsFirebase {
  type: string, // The type of points to be saved
}

/**
 * A component handling the saving of a points to Firebase 
 */
export function SavePointsFirebase (props: ISavePointsFirebase ) {
  const { type } = props
  const [user] = useAuthState(auth)
  const [name, setName] = useState("Unnamed")
  const [openSave, setOpenSave] = useState(false)
  const [status, setStatus] = useState(Status.idle)
  const { points } = useContext(PointsContext)

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
    if(name !== "" && user) {
      try {
        // Save the points
        const ref = doc(collection(db, "users", user.uid, "points"))
        await setDoc(ref, {
          id: ref.id,
          type,
          name,
          points: _.toPlainObject(points),
          timestamp: Timestamp.now()
        })
        
        setName("Unnamed")
        setOpenSave(false)
        setStatus(Status.successSave)
      } catch (error) {
        console.log(error)
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
        variant="contained"
        onClick={handleOpenSave}
      >
        Save points
      </Button>
      <Modal
        open={openSave}
        onClose={handleCloseSave}
        aria-labelledby="save-points-title"
      >
        <Box className={classes.boxModal}>
          <Grid 
            container 
            direction="column" 
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography id="save-points-title" align="center" className={classes.title}>
                Save the current points
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                id="points-name"
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
                variant="contained"
                onClick={handleSave}
                className={classes.button}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <CustomAlert 
        open={openSuccess}
        handleClose={handleClose}
        severity="success"
        text="The points were saved successfully."
      />
      <CustomAlert 
        open={openError}
        handleClose={handleClose}
        severity="error"
        text="An error occurred while saving the points. Please try again."
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
    width: theme.typography.pxToRem(100)
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
  }
 }))