import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { HomePage } from "pages/home/home-page"

test("home page loads all buttons", () => {
  render(<HomePage />)
  expect(screen.getByTestId("relation-representation")).toBeInTheDocument()
  expect(screen.getByTestId("relation-properties")).toBeInTheDocument()
  expect(screen.getByTestId("relation-warshalls")).toBeInTheDocument()
})
