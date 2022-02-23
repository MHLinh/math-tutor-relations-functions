import React, { ReactNode, useState } from "react"
import {
  Box,
  IconButton,
  Grid,
  Typography,
  Modal,  
} from "@mui/material"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { makeStyles } from "@mui/styles"

interface IModalInfo {
  title: string,
  info: ReactNode
}

/**
 * A component displaying modal dialog box with some info.
 */
export function ModalInfo(props: IModalInfo) {
  const { title, info } = props
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
          <Grid container direction="column" spacing={1}>
            <Grid id="info-title" item>
              <Typography  align="center" className={classes.title}>
                {title}
              </Typography>
            </Grid>
            <Grid id="info-description"item>
               {info}
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
 