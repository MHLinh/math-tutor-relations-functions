/**
 * This code uses following libraries: 
 * react, @mui/styles, @testing-library/react, and @testing-library/jest-dom.
 */
import React from "react"
import ThemeProvider from "@mui/styles/ThemeProvider"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { theme } from "theme/theme"
import { FunctionEquationSelection } from "components/function-equation/function-equation-selection"

function MockedFunctionEquationSelection() {
  return (
    <ThemeProvider theme={theme}>
        <FunctionEquationSelection selectedType="LINEAR" setSelectedType={() => null}/>
    </ThemeProvider>
  )
}

test("render function equation selection", async () => {
  render(<MockedFunctionEquationSelection />)

  expect(screen.getByTestId("function-change-button"))
    .toHaveTextContent("Change type of function")

  fireEvent.click(screen.getByTestId("function-change-button"))
  
  await waitFor(() => screen.getByTestId("function-selection-title"))
  
  expect(screen.getByTestId("function-selection-title"))
    .toHaveTextContent("Select a type of function")
  expect(screen.getByTestId("LINEAR"))
    .toHaveTextContent("Linear Function")
  expect(screen.getByTestId("QUADRATIC"))
    .toHaveTextContent("Quadratic Function")
  expect(screen.getByTestId("CUBIC"))
    .toHaveTextContent("Cubic Function")
  expect(screen.getByTestId("SINE"))
    .toHaveTextContent("Sine Function")
  expect(screen.getByTestId("COSINE"))
    .toHaveTextContent("Cosine Function")
})
