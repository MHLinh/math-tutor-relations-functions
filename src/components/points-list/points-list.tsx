import React, { useContext } from "react"
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import DeleteIcon from "@mui/icons-material/Delete"
import { FixedSizeList, ListChildComponentProps } from "react-window"
import { IPoints } from "components/database/db"
import { PointsListContext } from "./points-list-context"

interface IPointsList {
  data: IPoints[] // List of points
}

/**
 * A component rendering each list of points.
 */
function renderRow(props: ListChildComponentProps) {
  const { index, style, data } = props
  const { selected, setter, deleteFunction } = useContext(PointsListContext)

  const classes = useStyles()

  const handleClick = () => {
    setter(index)
  }

  const handleDelete = () => {
    deleteFunction(data[index].id)
  }

  return (
    <ListItem 
      key={index} 
      style={style} 
      component="div" 
      disablePadding
      secondaryAction={
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton 
        selected={selected === index}
        onClick={handleClick}
        className={classes.listItem}
      >
        <ListItemText primary={data[index].name} />
      </ListItemButton>
    </ListItem>
  )
}

/**
 * A component displaying the list of saved points.
 */
export function PointsList(props: IPointsList) {
  const { data } = props
  const count = data.length
  const { breakpoints } = useTheme()
  const small = useMediaQuery(breakpoints.down("sm"))

  return (
    <Box>
      {count > 0
      ? <FixedSizeList
          height={Math.min(count * 50, 200)}
          width={small
            ? "75vw"
            : 280
          }
          itemSize={50}
          itemCount={count}
          overscanCount={5}
          itemData={data}
        >
          {renderRow}
        </FixedSizeList>
      : <Typography align="center">
          No relations saved
        </Typography>
      }
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  listItem: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.custom.lightBlue,
    },
    "&:hover": {
      backgroundColor: theme.palette.custom.lightGrey,
    }
  }
 }))
 