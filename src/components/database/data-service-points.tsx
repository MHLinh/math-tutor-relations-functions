import React from "react"
import {
  Box
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { PointsContext, IPointsContext } from "components/points-context/points-context"
import { SavePoints } from "./save-points"
import { LoadPoints } from "./load-points"

interface IDataServicePoints {
  pointsContextValue: IPointsContext, // Points context for accessing the points and its setter
  type: string,                       // The type of the saved data
}

/**
 * A component displaying save and load relation components.
 */
export function DataServicePoints(props: IDataServicePoints) {
  const { pointsContextValue, type } = props
  const classes = useStyles()

  return (
    <Box>
      <PointsContext.Provider value={pointsContextValue}>
        <Box className={classes.box}>
          <SavePoints type={type} />
        </Box>
        <Box className={classes.box}>
          <LoadPoints type={type} />
        </Box>
      </PointsContext.Provider>
    </Box>
  )
}
const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  }
}))
