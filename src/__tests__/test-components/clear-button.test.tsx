import React from "react"
import { ThemeProvider } from "@mui/styles"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { theme } from "theme/theme"
import { generateMatrix } from "utils/generate-matrix"
import { IMatrixContext } from "components/matrix-context/matrix-context"
import { ClearButtonProvider } from "components/clear-button/clear-button-provider"

const matrix = generateMatrix(4)
const contextValue: IMatrixContext = {
  matrix,
  setter: () => null
}

function MockedClearButton() {
  return (
    <ThemeProvider theme={theme}>
        <ClearButtonProvider matrixContextValue={contextValue} />
    </ThemeProvider>
  )
}

test("render matrix output", () => {
  render(<MockedClearButton />)

  expect(screen.getByTestId("clear-relation-button"))
    .toHaveTextContent("Clear relation")
})