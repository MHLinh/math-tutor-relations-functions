import React, { useState } from "react"
import {
  Box,
  IconButton,
  Grid,
  Typography,
  Modal,  
} from "@mui/material"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { makeStyles } from "@mui/styles"


/**
 * A component displaying modal dialog box with info on Warshall's algorithm 
 */
export function WarshallsInfo() {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <IconButton color="warning" onClick={handleOpen}>
        <QuestionMarkIcon fontSize="inherit" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="info-title"
        aria-describedby="info-description"
      >
        <Box className={classes.boxModal}>
          <Grid container direction="column">
            <Grid item>
              <Typography id="infon-title" align="center" className={classes.title}>
                Rules for Warshall&apos;s algorithm
              </Typography>
            </Grid>
            <Grid item>
                <ol id="info-description">
                  <li>
                    <Typography align="left">
                      Never change a 1 to 0.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left">
                      For kth round, if cell (i, j) is 0 then change it to 1 
                      if both cells (i, k) and (k, j) contain 1.
                    </Typography>
                  </li>
                </ol>
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
    padding: theme.spacing(2),
    maxWidth: theme.typography.pxToRem(400)
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
  }
 }))
 