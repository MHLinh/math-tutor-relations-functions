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
import { palette } from "theme"

interface IWarshallsMatrix {
  matrix: number[][],   // Relations stored as a matrix
  round: number         // Warshall's algorithm round
}

/**
 * A component displaying the matrix of 0's and 1's
 * for Warshall's algorithm, with highlighted rows and cols,
 * and colored 0's to be changed to 1's.
 */
export function WarshallsMatrix(props: IWarshallsMatrix) {
  const { matrix, round} = props
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
                  <TableCell 
                    key={`${rowIndex}-${colIndex}`} 
                    className={classes.tableCell}
                    sx={{
                      backgroundColor: rowIndex === round || colIndex === round
                      ? palette.red
                      : "none"
                    }}
                  >
                    <Typography 
                      align="center"
                      sx={{
                        color: col === 0 && matrix[rowIndex][round] === 1 && matrix[round][colIndex]
                        ? palette.red
                        : palette.black
                      }}
                    >
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