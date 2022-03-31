/**
 * This code uses following libraries: 
 * react, @mui/material, and @mui/styles.
 */
import React from "react"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import makeStyles from "@mui/styles/makeStyles"

interface IMatrix {
  matrix: number[][] // Relation stored as a matrix
}

/**
 * A component displaying the matrix of 0'1 and 1's.
 */
export function Matrix(props: IMatrix) {
  const { matrix } = props
  const classes = useStyles()
  const { typography } = useTheme()

  return (
    <Box>
      <TableContainer 
        component={Box}
        className={classes.tableContainer} 
        sx={{
          height: typography.pxToRem(cellSize * matrix.length),
          width: typography.pxToRem(cellSize * matrix.length)
        }}
      >
        <Table aria-label="matrix">
          <TableBody>
            {matrix.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((col, colIndex) => (
                  <TableCell key={`${rowIndex}-${colIndex}`} className={classes.tableCell}>
                    <Typography align="center">
                      {col}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

const cellSize = 30

const useStyles = makeStyles((theme: any) => ({
  tableContainer: {
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    paddingLeft: 2,
    paddingRight: 2,
  },
  tableCell: {
    borderBottom: "none",
    alignItems: "center",
    verticalAlign: "middle",
    height: theme.typography.pxToRem(cellSize),
    width: theme.typography.pxToRem(cellSize),
    padding: 0,
  },
 }))