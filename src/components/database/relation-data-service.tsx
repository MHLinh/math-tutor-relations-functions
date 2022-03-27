import React from "react"
import {
  Box
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { MatrixContext, IMatrixContext } from "components/matrix-context/matrix-context"
import { SaveRelation } from "./save-relation"
import { LoadRelation } from "./load-relation"

interface IRelationDataService {
  matrixContextValue: IMatrixContext, // Matrix context for accessing the matrix and its setter
  type: string,                       // The type of the saved data
}

/**
 * A component displaying save and load relation components.
 */
export function RelationDataService(props: IRelationDataService) {
  const { matrixContextValue, type } = props
  const classes = useStyles()

  return (
    <Box>
      <MatrixContext.Provider value={matrixContextValue}>
        <Box className={classes.box}>
          <SaveRelation type={type} />
        </Box>
        <Box className={classes.box}>
          <LoadRelation type={type} />
        </Box>
      </MatrixContext.Provider>
    </Box>
  )
}
const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  }
}))