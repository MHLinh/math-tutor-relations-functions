/**
 * This code uses following libraries: 
 * react, @mui/styles, @testing-library/react, and @testing-library/jest-dom.
 */
import React from "react"
import ThemeProvider from "@mui/styles/ThemeProvider"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { theme } from "theme/theme"
import { generateMatrix } from "utils/generate-matrix"
import { MatrixContext, IMatrixContext } from "components/matrix-context/matrix-context"
import { MatrixTapGrid } from "components/matrix-tap/matrix-tap-grid"
import { OrderedPairsDragAndDrop } from "components/drag-and-drop/ordered-pairs-drag-and-drop"
import { RelationInputSelection } from "components/relation-input/relation-input-selection"

const matrix = generateMatrix(4)
const contextValue: IMatrixContext = {
  matrix,
  setter: () => null
}

function MockedMatrixInput() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <MatrixTapGrid />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render matrix input", () => {
  render(<MockedMatrixInput />)

  expect(screen.getByTestId("matrix-input"))
    .toBeVisible()
  expect(screen.getByTestId("matrix-input"))
    .toHaveTextContent("Tap the buttons to modify the relation")
})

function MockedOrderedPairsInput() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <OrderedPairsDragAndDrop />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render ordered pairs input", () => {
  render(<MockedOrderedPairsInput />)

  expect(screen.getByTestId("ordered-pairs-input"))
    .toBeVisible()
  expect(screen.getByTestId("ordered-pairs-input"))
    .toHaveTextContent("Drag and drop pairs of numbers to modify the relation")
})

function MockedRelationInputSelection() {
  return (
    <ThemeProvider theme={theme}>
        <RelationInputSelection selectedType="matrix" setSelectedType={() => null}/>
    </ThemeProvider>
  )
}

test("render relation input selection", async () => {
  render(<MockedRelationInputSelection />)

  expect(screen.getByTestId("input-change-button"))
    .toHaveTextContent("Change relation input")

  fireEvent.click(screen.getByTestId("input-change-button"))

  await waitFor(() => screen.getByTestId("input-selection-title"))

  expect(screen.getByTestId("input-selection-title"))
    .toHaveTextContent("Select a relation representation type for input")
  expect(screen.getByTestId("matrix"))
    .toHaveTextContent("Matrix")
  expect(screen.getByTestId("pairs"))
    .toHaveTextContent("Ordered pairs")
  expect(screen.getByTestId("sets"))
    .toHaveTextContent("Connected sets")
})
