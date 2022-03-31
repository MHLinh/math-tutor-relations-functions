/**
 * This code uses following libraries: 
 * react and @mui/material.
 */
import React from "react"
import Typography from "@mui/material/Typography"
import { ModalInfo } from "components/modal-info/modal-info"

/**
 * A component displaying modal dialog box with info on Warshall's algorithm 
 */
export function WarshallsInfo() {

  return (
    <ModalInfo 
      title="Rules for Warshall's algorithm"
      info={
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
      }
    />
  )
}
 