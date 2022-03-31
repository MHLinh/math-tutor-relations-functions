/**
 * This code uses following libraries: 
 * react, @mui/styles, @testing-library/react, and @testing-library/jest-dom.
 */
import React from "react"
import ThemeProvider from "@mui/styles/ThemeProvider"
import { BrowserRouter as Router } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { RelationNavigation } from "components/navigation/relation-navigation"
import { RelationPropertiesNavigation } from "components/navigation/relation-properties-navigation"
import { FunctionNavigation } from "components/navigation/function-navigation"
import { FunctionDomainNavigation } from "components/navigation/function-domain-navigation"
import { LinearFunctionSlopeNavigation } from "components/navigation/linear-function-slope-navigation"
import { QuadraticFunctionNavigation } from "components/navigation/quadratic-function-navigation"
import { FunctionTransformationNavigation } from "components/navigation/function-transformation-navigation"
import { FunctionCompositionNavigation } from "components/navigation/function-composition-navigation"
import { theme } from "theme/theme"


function MockedRelationNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <RelationNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render relation navigation", () => {
  render(<MockedRelationNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study relations")
  expect(screen.getByTestId("relation-representation"))
    .toHaveTextContent("Representations of a relation")
  expect(screen.getByTestId("relation-properties"))
    .toHaveTextContent("Properties of a relation")
  expect(screen.getByTestId("relation-warshalls"))
    .toHaveTextContent("Warshall's algorithm")
})

function MockedRelationPropertiesNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <RelationPropertiesNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render relation properties navigation", () => {
  render(<MockedRelationPropertiesNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study properties of a relation")
  expect(screen.getByTestId("relation-properties-reflexive"))
    .toHaveTextContent("Reflexive relation")
  expect(screen.getByTestId("relation-properties-irreflexive"))
    .toHaveTextContent("Ireflexive relation")
  expect(screen.getByTestId("relation-properties-symmetric"))
    .toHaveTextContent("Symmetric relation")
  expect(screen.getByTestId("relation-properties-antisymmetric"))
    .toHaveTextContent("Antisymmetric relation")
  expect(screen.getByTestId("relation-properties-transitive"))
    .toHaveTextContent("Transitive relation")
  expect(screen.getByTestId("relation-properties-equivalence"))
    .toHaveTextContent("Equivalence relation")
  expect(screen.getByTestId("relation-properties-partial-order"))
    .toHaveTextContent("Partial order")
  expect(screen.getByTestId("relation-properties-total-order"))
    .toHaveTextContent("Total order")
  expect(screen.getByTestId("relation-properties-all"))
    .toHaveTextContent("All properties")
})

function MockedFunctionNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <FunctionNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render function navigation", () => {
  render(<MockedFunctionNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study functions")
  expect(screen.getByTestId("vertical-line-test"))
    .toHaveTextContent("Vertical line test")
  expect(screen.getByTestId("function-domain"))
    .toHaveTextContent("Domain of a function")
  expect(screen.getByTestId("function-properties"))
    .toHaveTextContent("Properties of a function")
  expect(screen.getByTestId("linear-function-slope"))
    .toHaveTextContent("Slope of a linear function")
  expect(screen.getByTestId("quadratic-function"))
    .toHaveTextContent("Quadratic function")
  expect(screen.getByTestId("function-transformation"))
    .toHaveTextContent("Function transformation")
  expect(screen.getByTestId("function-composition"))
    .toHaveTextContent("Function composition")
})

function MockedFunctionDomainNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <FunctionDomainNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render function domain navigation", () => {
  render(<MockedFunctionDomainNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study the domain of a function")
  expect(screen.getByTestId("function-domain-continuous"))
    .toHaveTextContent("Continuous domain")
  expect(screen.getByTestId("function-domain-discrete"))
    .toHaveTextContent("Discrete domain")
})

function MockedLinearFunctionSlopeNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <LinearFunctionSlopeNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render linear function slope navigation", () => {
  render(<MockedLinearFunctionSlopeNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study the slope of a linear function")
  expect(screen.getByTestId("linear-function-slope-change"))
    .toHaveTextContent("Slope of a linear function - change in X/Y")
  expect(screen.getByTestId("linear-function-slope-points"))
    .toHaveTextContent("Slope of a linear function - defined by two points")
})

function MockedQuadraticFunctionNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <QuadraticFunctionNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render quadratic function navigation", () => {
  render(<MockedQuadraticFunctionNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study the quadratic function")
  expect(screen.getByTestId("quadratic-function-vertex"))
    .toHaveTextContent("Vertex of a quadratic function")
  expect(screen.getByTestId("quadratic-function-roots"))
    .toHaveTextContent("Roots of a quadratic function")
})

function MockedFunctionTransformationNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <FunctionTransformationNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render function transformation navigation", () => {
  render(<MockedFunctionTransformationNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study the function transformation")
  expect(screen.getByTestId("function-transformation-vertical-translation"))
    .toHaveTextContent("Vertical translation")
  expect(screen.getByTestId("function-transformation-horizontal-translation"))
    .toHaveTextContent("Horizontal translation")
  expect(screen.getByTestId("function-transformation-vertical-compression-stretching"))
    .toHaveTextContent("Vertical compression / stretching")
  expect(screen.getByTestId("function-transformation-horizontal-compression-stretching"))
    .toHaveTextContent("Horizontal compression / stretching")
  expect(screen.getByTestId("function-transformation-reflection"))
    .toHaveTextContent("Reflection along axis")
  expect(screen.getByTestId("function-transformation-all"))
    .toHaveTextContent("All function transformations")
})

function MockedFunctionCompositionNavigation() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <FunctionCompositionNavigation />
      </ThemeProvider>
    </Router>
  )
}

test("render function composition navigation", () => {
  render(<MockedFunctionCompositionNavigation />)

  expect(screen.getByTestId("navigation-text"))
    .toHaveTextContent("Study the function composition")
  expect(screen.getByTestId("function-composition-check"))
    .toHaveTextContent("Function composition check")
  expect(screen.getByTestId("function-composition-plot"))
    .toHaveTextContent("Function composition plot")
})