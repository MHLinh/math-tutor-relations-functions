import React from "react"
import {
  Box,
  Typography,
  Slider
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { generateSliderMarks } from "utils"

interface ISetSliders {
  xSize: number,                      // The size of set X
  ySize: number,                      // The size of set Y
  xSetter: (size: number) => void,    // The function to change the size of set X
  ySetter: (size: number) => void     // The function to change the size of set Y
}

/**
 * A component displaying sliders for changing size of sets.
 */
export function SetSliders(props: ISetSliders) {
  const { xSize, ySize, xSetter, ySetter } = props
  const classes = useStyles()

  const step = 1
  const min = 1
  const max = 6
  const marks = generateSliderMarks(step, min, max)

  const handleChangeX = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    xSetter(value as number)
  }

  const handleChangeY = (
    event: Event | React.SyntheticEvent<Element, Event>, 
    value: number | number[]
  ) => {
    ySetter(value as number)
  }

  return (
    <Box className={classes.center}>
      <Box className={classes.box}>
        <Typography>
          Set X
        </Typography>
        <Slider 
          aria-label="set-x"
          value={xSize}
          onChangeCommitted={handleChangeX}
          step={step}
          min={min}
          max={max}
          marks={marks}
        />

        <Typography>
          Set Y
        </Typography>
        <Slider 
          aria-label="set-y"
          value={ySize}
          onChangeCommitted={handleChangeY}
          step={step}
          min={min}
          max={max}
          marks={marks}
        />
        <Typography variant="caption">
          Note: Changing the size of a set will clear the current relation.
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  box: {
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      width: theme.typography.pxToRem(500),
    },
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))
