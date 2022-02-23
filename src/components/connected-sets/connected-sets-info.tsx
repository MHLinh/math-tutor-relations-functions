import React from "react"
import {
  Typography,
} from "@mui/material"
import { ModalInfo } from "components/modal-info/modal-info"

/**
 * A component displaying modal dialog box with info on 
 * connected sets input.
 */
export function ConnectedSetsInfo() {

  return (
    <ModalInfo 
      title="Connected sets"
      info={
        <Typography align="left" >
          Selecting the numbers on both sides will create an arrow if it is not present,
          else it will remove the arrow between the selected numbers.
        </Typography>
      }
    />
  )
}
 