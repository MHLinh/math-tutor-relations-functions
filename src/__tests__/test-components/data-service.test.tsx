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
import { SaveRelationDexie } from "components/dexie/save-relation-dexie"
import { LoadRelationDexie } from "components/dexie/load-relation-dexie"
import { SavePointsDexie } from "components/dexie/save-points-dexie"
import { LoadPointsDexie } from "components/dexie/load-points-dexie"
import { SaveRelationFirebase } from "components/firebase/save-relation-firebase"
import { LoadRelationFirebase } from "components/firebase/load-relation-firebase"
import { SavePointsFirebase } from "components/firebase/save-points-firebase"
import { LoadPointsFirebase } from "components/firebase/load-points-firebase"

const matrix = generateMatrix(4)
const contextValue: IMatrixContext = {
  matrix,
  setter: () => null
}

function MockedSaveRelationDexie() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <SaveRelationDexie type="relation" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render save relation dexie", async () => {
  render(<MockedSaveRelationDexie />)

  expect(screen.getByTestId("save-relation-button"))
    .toHaveTextContent("Save relation")

  fireEvent.click(screen.getByTestId("save-relation-button"))
  
  await waitFor(() => screen.getByTestId("save-relation-title"))

  expect(screen.getByTestId("save-relation-title"))
    .toHaveTextContent("Save the current relation")
  expect(screen.getByTestId("save-button"))
    .toHaveTextContent("Save")
})

function MockedLoadRelationDexie() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <LoadRelationDexie type="relation" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render load relation dexie", async () => {
  render(<MockedLoadRelationDexie />)

  expect(screen.getByTestId("load-relation-button"))
    .toHaveTextContent("Load relation")

  fireEvent.click(screen.getByTestId("load-relation-button"))
  
  await waitFor(() => screen.getByTestId("load-relation-title"))

  expect(screen.getByTestId("load-relation-title"))
    .toHaveTextContent("Select a relation to load")
  expect(screen.getByTestId("load-button"))
    .toHaveTextContent("Load")
})

function MockedSavePointsDexie() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <SavePointsDexie type="points" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render save points dexie", async () => {
  render(<MockedSavePointsDexie />)

  expect(screen.getByTestId("save-points-button"))
    .toHaveTextContent("Save points")

  fireEvent.click(screen.getByTestId("save-points-button"))
  
  await waitFor(() => screen.getByTestId("save-points-title"))

  expect(screen.getByTestId("save-points-title"))
    .toHaveTextContent("Save the current points")
  expect(screen.getByTestId("save-button"))
    .toHaveTextContent("Save")
})

function MockedLoadPointsDexie() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <LoadPointsDexie type="points" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render load points dexie", async () => {
  render(<MockedLoadPointsDexie />)

  expect(screen.getByTestId("load-points-button"))
    .toHaveTextContent("Load points")

  fireEvent.click(screen.getByTestId("load-points-button"))
  
  await waitFor(() => screen.getByTestId("load-points-title"))

  expect(screen.getByTestId("load-points-title"))
    .toHaveTextContent("Select points to load")
  expect(screen.getByTestId("load-button"))
    .toHaveTextContent("Load")
})

function MockedSaveRelationFirebase() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <SaveRelationFirebase type="relation" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render save relation firebase", async () => {
  render(<MockedSaveRelationFirebase />)

  expect(screen.getByTestId("save-relation-button"))
    .toHaveTextContent("Save relation")

  fireEvent.click(screen.getByTestId("save-relation-button"))
  
  await waitFor(() => screen.getByTestId("save-relation-title"))

  expect(screen.getByTestId("save-relation-title"))
    .toHaveTextContent("Save the current relation")
  expect(screen.getByTestId("save-button"))
    .toHaveTextContent("Save")
})

function MockedLoadRelationFirebase() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <LoadRelationFirebase type="relation" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render load relation firebase", async () => {
  render(<MockedLoadRelationFirebase />)

  expect(screen.getByTestId("load-relation-button"))
    .toHaveTextContent("Load relation")

  fireEvent.click(screen.getByTestId("load-relation-button"))
  
  await waitFor(() => screen.getByTestId("load-relation-title"))

  expect(screen.getByTestId("load-relation-title"))
    .toHaveTextContent("Select a relation to load")
  expect(screen.getByTestId("load-button"))
    .toHaveTextContent("Load")
})

function MockedSavePointsFirebase() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <SavePointsFirebase type="points" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render save points firebase", async () => {
  render(<MockedSavePointsFirebase />)

  expect(screen.getByTestId("save-points-button"))
    .toHaveTextContent("Save points")

  fireEvent.click(screen.getByTestId("save-points-button"))
  
  await waitFor(() => screen.getByTestId("save-points-title"))

  expect(screen.getByTestId("save-points-title"))
    .toHaveTextContent("Save the current points")
  expect(screen.getByTestId("save-button"))
    .toHaveTextContent("Save")
})

function MockedLoadPointsFirebase() {
  return (
    <ThemeProvider theme={theme}>
        <MatrixContext.Provider value={contextValue}>
          <LoadPointsFirebase type="points" />
        </MatrixContext.Provider>
    </ThemeProvider>
  )
}

test("render load points firebase", async () => {
  render(<MockedLoadPointsFirebase />)

  expect(screen.getByTestId("load-points-button"))
    .toHaveTextContent("Load points")

  fireEvent.click(screen.getByTestId("load-points-button"))
  
  await waitFor(() => screen.getByTestId("load-points-title"))

  expect(screen.getByTestId("load-points-title"))
    .toHaveTextContent("Select points to load")
  expect(screen.getByTestId("load-button"))
    .toHaveTextContent("Load")
})
