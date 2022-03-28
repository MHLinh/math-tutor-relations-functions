import React from "react"
import { ThemeProvider } from "@mui/styles"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { theme } from "theme/theme"
import { generateMatrix } from "utils/generate-matrix"
import { RelationOutput } from "components/relation-output/relation-output"
import { RelationOutputSelection } from "components/relation-output/relation-output-selection"

const matrix = generateMatrix(4)

function MockedMatrixOutput() {
  return (
    <ThemeProvider theme={theme}>
        <RelationOutput matrix={matrix} type="matrix"/>
    </ThemeProvider>
  )
}

test("render matrix output", () => {
  render(<MockedMatrixOutput />)

  expect(screen.getByTestId("matrix-output"))
    .toBeVisible()
  expect(screen.getByTestId("matrix-output"))
    .toHaveTextContent("Relation as a matrix:")
})

function MockedOrderedPairsOutput() {
  return (
    <ThemeProvider theme={theme}>
        <RelationOutput matrix={matrix} type="pairs"/>
    </ThemeProvider>
  )
}

test("render ordered pairs output", () => {
  render(<MockedOrderedPairsOutput />)

  expect(screen.getByTestId("ordered-pairs-output"))
    .toBeVisible()
  expect(screen.getByTestId("ordered-pairs-output"))
    .toHaveTextContent("Relation as a set of ordered pairs:")
})

function MockedRelationOutputSelection() {
  return (
    <ThemeProvider theme={theme}>
        <RelationOutputSelection selectedType="matrix" setSelectedType={() => null}/>
    </ThemeProvider>
  )
}

test("render relation output selection", async () => {
  render(<MockedRelationOutputSelection />)

  expect(screen.getByTestId("output-change-button"))
    .toHaveTextContent("Change relation output")

  fireEvent.click(screen.getByTestId("output-change-button"))
  
  await waitFor(() => screen.getByTestId("output-selection-title"))
  
  expect(screen.getByTestId("output-selection-title"))
    .toHaveTextContent("Select a relation representation type for output")
  expect(screen.getByTestId("matrix"))
    .toHaveTextContent("Matrix")
  expect(screen.getByTestId("pairs"))
    .toHaveTextContent("Ordered pairs")
  expect(screen.getByTestId("graph"))
    .toHaveTextContent("Directed graph")
})
