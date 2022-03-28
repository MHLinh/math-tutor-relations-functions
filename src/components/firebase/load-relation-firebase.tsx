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
import { NUM_OF_ELEMENTS, generateMatrix } from "utils"
import { MatrixContext } from "components/matrix-context/matrix-context"
import { IRelationsListContext, RelationsListContext } from "components/relations-list/relations-list-context"
import { RelationsList } from "components/relations-list/relations-list"
import { CustomAlert } from "components/custom-alert/custom-alert"
import { CustomAlertDelete } from "components/custom-alert/custom-alert-delete"
import { auth, db, IRelationFirebase } from "./firebase"

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

interface ILoadRelationFirebase {
  type: string, // The type of relation to be loaded
}

/**
 * A component handling the loading of a relation from IndexedDB,
 * with the possibility to delete saved relations.
 */
export function LoadRelationFirebase(props: ILoadRelationFirebase) {
  const { type } = props
  const [user] = useAuthState(auth)
  const [openLoad, setOpenLoad] = useState(false)
  const [status, setStatus] = useState(Status.idle)
  const [selected, setSelected] = useState(-1)
  const [relations, setRelations] = useState<IRelationFirebase[]>([])
  const [recentlyDeleted, setRecentlyDeleted] = useState<IRelationFirebase>({
    id: "",
    name: "",
    type,
    matrix: [],
    timestamp: Timestamp.now()
  })

  const classes = useStyles()

  const { setter } = useContext(MatrixContext)

  const emptyMatrix = generateMatrix(NUM_OF_ELEMENTS)

  const openSuccessLoad = status === Status.successLoad
  const openErrorLoad = status === Status.errorLoad
  const openMissingLoad = status === Status.missingLoad
  const openSuccessDelete = status === Status.successDelete
  const openErrorDelete = status === Status.errorDelete
  const openErrorUndo = status === Status.errorDelete

  const [data, loading, error] = useCollectionData(
    query(collection(db, `users/${user?.uid}/relations`), orderBy("timestamp"))
  )

  if(error) {
    setStatus(Status.errorLoad)
  }

  useEffect(() => {
    if(data) {
      setRelations(data as IRelationFirebase[])
    }
  }, [data])
  
  const wrapperSetSelected = useCallback((selectedIndex: number) => {
    setSelected(selectedIndex)
  }, [setSelected])

  const handleDelete = async (id: string) => {
    if(user) {
      try {
        //  Save the recently deleted relation to allow for undoing deletion
        const toDelete = relations.find(element => element.id)
        if(toDelete) {
          setRecentlyDeleted(toDelete)
        }

        await deleteDoc(doc(db, "users", user.uid, "relations", id))
        setStatus(Status.successDelete)
      } catch (err) {
        console.log(err)
        setStatus(Status.errorDelete)
      }
    }
  }

  // Context provided to relations list to allow loading the relation
  // and deleting chosen relations.
  const contextValue: IRelationsListContext = useMemo(() => ({
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
      const matrix = relations
        ? _.values(relations[selected].matrix)
        : emptyMatrix

      setter(matrix)
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
    if(recentlyDeleted.matrix !== [] && user) {
      try {
        await setDoc(doc(db, "users", user.uid, "relations", recentlyDeleted.id), recentlyDeleted)
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
        data-testid="load-relation-button"
        variant="contained"
        onClick={handleOpenLoad}
        className={classes.button}
      >
        Load relation
      </Button>
      <Modal
        open={openLoad}
        onClose={handleCloseLoad}
        aria-labelledby="load-relation-title"
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
                data-testid="load-relation-title"
                id="load-relation-title"
                align="center" 
                className={classes.title}
              >
                Select a relation to load
              </Typography>
            </Grid>
            <Grid item>
              <RelationsListContext.Provider value={contextValue}>
                <RelationsList data={relations || [] } />
              </RelationsListContext.Provider>
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
        text="The relation was loaded successfully."
      />
      <CustomAlert 
        open={openErrorLoad}
        handleClose={handleClose}
        severity="error"
        text="An error occurred while loading the relations. Please try again."
      />
      <CustomAlert 
        open={openMissingLoad}
        handleClose={handleClose}
        severity="error"
        text="Please select a relation to load."
      />
      <CustomAlertDelete
        open={openSuccessDelete}
        handleClose={handleClose}
        handleUndo={handleUndo}
        severity="success"
        text="The relation was deleted successfully."
      />
      <CustomAlert 
        open={openErrorDelete}
        handleClose={handleClose}
        severity="error"
        text="An error occurred while deleting the relation. Please try again."
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