import React from "react"
import {
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { IMatrixContext } from "components/matrix-context/matrix-context"
import { 
  RelationOutputSelection 
} from "components/relation-output/relation-output-selection"
import {
  RelationInputSelection 
} from "components/relation-input/relation-input-selection"
import { ClearButtonProvider } from "components/clear-button/clear-button-provider"
import { RelationDataService } from "components/database/relation-data-service"

interface IRelationButtons {
  selectedOutputType: string,                     // The selected output type
  setSelectedOutputType: (type: string) => void,  // Function to set the selected output type
  selectedInputType: string,                      // The selected input type
  setSelectedInputType: (type: string) => void,   // Function to set the selected input type
  matrixContextValue: IMatrixContext,             // Matrix context for accessing the matrix and its setter
  type: string,                                   // The type of the saved data
}

export function RelationButtons(props: IRelationButtons) {
  const  { 
    selectedOutputType,  
    setSelectedOutputType,
    selectedInputType,
    setSelectedInputType,
    matrixContextValue,
    type
  } = props

  const classes = useStyles()
  const { breakpoints } = useTheme()
  const medium = useMediaQuery(breakpoints.down("md"))

  return (
    <Grid
      container
      justifyContent="center"
      direction={medium 
        ? "column"
        : "row"
      }
      spacing={medium 
        ? 0
        : 1
      }
    >
      <Grid 
        container
        item
        justifyContent="center"
        md={6}
      >
        <Box className={classes.box}>
          <RelationOutputSelection 
            selectedType={selectedOutputType}
            setSelectedType={setSelectedOutputType}
          />
        </Box>
        <Box className={classes.box}>
          <RelationInputSelection 
            selectedType={selectedInputType}
            setSelectedType={setSelectedInputType}
          />
        </Box>
        <Box className={classes.box}>
          <ClearButtonProvider matrixContextValue={matrixContextValue} />
        </Box>
      </Grid>
      <Grid 
        container
        item
        justifyContent="center"
        md={6}
      >
        <RelationDataService
          matrixContextValue={matrixContextValue} 
          type={type}
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
}))