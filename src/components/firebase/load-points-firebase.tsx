import React, { 
  useState, 
  useEffect, 
  useContext, 
  useCallback, 
  useMemo 
} from "react"
import {
  Box,
  Button,
  Grid,
  Modal, 
  Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {
  setDoc,
  doc,
  collection,
  query, 
  orderBy,
  deleteDoc,
  Timestamp,
} from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import _ from "lodash"
import { buttonStyle } from "theme"
import { PointsContext} from "components/points-context/points-context"
import { IPointsListContext, PointsListContext } from "components/points-list/points-list-context"
import { PointsList } from "components/points-list/points-list"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { CustomAlertDelete } from "components/custom-alert/custom-alert-delete"
import { auth, db, IPointsFirebase } from "./firebase"

// Status deciding what alert to show.
const Status = {
  idle: "IDLE",
  successLoad: "SUCCESS_LOAD",
  errorLoad: "ERROR_LOAD",
  missingLoad: "MISSING_LOAD",
  successDelete: "SUCCESS_DELETE",
  errorDelete: "ERROR_DELETE",
  errorUndo: "ERROR_UNDO"
}

interface ILoadPointsFirebase  {
  type: string, // The type of points to be loaded
}

/**
 * A component handling the loading of a points from Firebase,
 * with the possibility to delete saved points.
 */
export function LoadPointsFirebase (props: ILoadPointsFirebase ) {
  const { type } = props
  const [user] = useAuthState(auth)
  const [openLoad, setOpenLoad] = useState(false)
  const [status, setStatus] = useState(Status.idle)
  const [selected, setSelected] = useState(-1)
  const [points, setPoints] = useState<IPointsFirebase[]>([])
  const [recentlyDeleted, setRecentlyDeleted] = useState<IPointsFirebase>({
    id: "",
    name: "",
    type,
    points: [],
    timestamp: Timestamp.now()
  })

  const { setter } = useContext(PointsContext)

  const classes = useStyles()

  const openSuccessLoad = status === Status.successLoad
  const openErrorLoad = status === Status.errorLoad
  const openMissingLoad = status === Status.missingLoad
  const openSuccessDelete = status === Status.successDelete
  const openErrorDelete = status === Status.errorDelete
  const openErrorUndo = status === Status.errorDelete

  const [data, loading, error] = useCollectionData(
    query(collection(db, `users/${user?.uid}/points`), orderBy("timestamp"))
  )

  if(error) {
    setStatus(Status.errorLoad)
  }

  useEffect(() => {
    if(data) {
      setPoints(data as IPointsFirebase[])
    }
  }, [data])

  const wrapperSetSelected = useCallback((selectedIndex: number) => {
    setSelected(selectedIndex)
  }, [setSelected])

  const handleDelete = async (id: string) => {
    if(user) {
      try {
        //  Save the recently deleted points to allow for undoing deletion
        const toDelete = points.find(element => element.id)
        if(toDelete) {
          setRecentlyDeleted(toDelete)
        }

        await deleteDoc(doc(db, "users", user.uid, "points", id))
        setStatus(Status.successDelete)
      } catch (err) {
        console.log(err)
        setStatus(Status.errorDelete)
      }
    }
  }

  // Context provided to points list to allow loading the relation
  // and deleting chosen points.
  const contextValue: IPointsListContext = useMemo(() => ({
    selected, 
    setter: wrapperSetSelected,
    deleteFunction: handleDelete
  }), [selected])

  const handleOpenLoad = () => {
    setOpenLoad(true)
  }

  const handleCloseLoad = () => {
    setOpenLoad(false)
    setSelected(-1)
  }

  const handleLoad = async () => {
    try {
      const newPoints = points
        ? _.values(points[selected].points)
        : []

      setter(newPoints)
      setStatus(Status.successLoad)
      handleCloseLoad()
    } catch(err) {
      console.log(err)
      setStatus(Status.missingLoad)
    }
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setStatus(Status.idle)
  }

  const handleUndo = async () => {
    if(recentlyDeleted.points !== [] && user) {
      try {
        await setDoc(doc(db, "users", user.uid, "points", recentlyDeleted.id), recentlyDeleted)
        setStatus(Status.idle)
      } catch (err) {
        console.log(err)
        setStatus(Status.errorUndo)
      }
    }
  }

  return (
    <Box>
      <Button
        data-testid="load-points-button"
        variant="contained"
        onClick={handleOpenLoad}
        className={classes.button}
      >
        Load points
      </Button>
      <Modal
        open={openLoad}
        onClose={handleCloseLoad}
        aria-labelledby="load-points-title"
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
                data-testid="load-points-title"
                id="load-points-title" 
                align="center" 
                className={classes.title}
              >
                Select points to load
              </Typography>
            </Grid>
            <Grid item>
              <PointsListContext.Provider value={contextValue}>
                <PointsList data={points || [] } />
              </PointsListContext.Provider>
            </Grid>
            <Grid item>
              <Button
                data-testid="load-button"
                variant="contained"
                onClick={handleLoad}
                className={classes.buttonModal}
              >
                Load
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <CustomAlert 
        open={openSuccessLoad}
        handleClose={handleClose}
        severity="success"
        text="The points were loaded successfully."
      />
      <CustomAlert 
        open={openErrorLoad}
        handleClose={handleClose}
        severity="error"
        text="An error occurred while loading the points. Please try again."
      />
      <CustomAlert 
        open={openMissingLoad}
        handleClose={handleClose}
        severity="error"
        text="Please select a points to load."
      />
      <CustomAlertDelete
        open={openSuccessDelete}
        handleClose={handleClose}
        handleUndo={handleUndo}
        severity="success"
        text="The points was deleted successfully."
      />
      <CustomAlert 
        open={openErrorDelete}
        handleClose={handleClose}
        severity="error"
        text="An error occurred while deleting the points. Please try again."
      />
      <CustomAlertDelete 
        open={openErrorUndo}
        handleClose={handleClose}
        handleUndo={handleUndo}
        severity="error"
        text="An error occurred while undoing the deletion. Please try again."
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