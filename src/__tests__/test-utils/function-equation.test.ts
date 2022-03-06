import { Equation } from "components/function-equation/function-equation-types"
import { getFunctionEquation } from "utils/function-equation"

test("get linear function 1(1(x + 0)) + 0", () => {
  expect(getFunctionEquation(Equation.Linear, 1, 1, 0, 0, "", "")).toBe("1(1(x + 0)) + 0")  
})

test("get linear function -1(-1(x + 0)) + 0", () => {
  expect(getFunctionEquation(Equation.Linear, 1, 1, 0, 0, "-", "-")).toBe("-1(-1(x + 0)) + 0")  
})

test("get linear function 1(1(x + 0))^2 + 0", () => {
  expect(getFunctionEquation(Equation.Quadratic, 1, 1, 0, 0, "", "")).toBe("1(1(x + 0))^2 + 0")  
})

test("get linear function -1(-1(x + 0))^2 + 0", () => {
  expect(getFunctionEquation(Equation.Quadratic, 1, 1, 0, 0, "-", "-")).toBe("-1(-1(x + 0))^2 + 0")  
})

test("get linear function 1(1(x + 0))^3 + 0", () => {
  expect(getFunctionEquation(Equation.Cubic, 1, 1, 0, 0, "", "")).toBe("1(1(x + 0))^3 + 0")  
})

test("get linear function -1(-1(x + 0))^3 + 0", () => {
  expect(getFunctionEquation(Equation.Cubic, 1, 1, 0, 0, "-", "-")).toBe("-1(-1(x + 0))^3 + 0")  
})

test("get linear function 1sin(1(x + 0)) + 0", () => {
  expect(getFunctionEquation(Equation.Sine, 1, 1, 0, 0, "", "")).toBe("1sin(1(x + 0)) + 0")  
})

test("get linear function -1sin(-1(x + 0)) + 0", () => {
  expect(getFunctionEquation(Equation.Sine, 1, 1, 0, 0, "-", "-")).toBe("-1sin(-1(x + 0)) + 0")  
})

test("get linear function 1cos(1(x + 0)) + 0", () => {
  expect(getFunctionEquation(Equation.Cosine, 1, 1, 0, 0, "", "")).toBe("1cos(1(x + 0)) + 0")  
})

test("get linear function -1cos-(1(x + 0)) + 0", () => {
  expect(getFunctionEquation(Equation.Cosine, 1, 1, 0, 0, "-", "-")).toBe("-1cos(-1(x + 0)) + 0")  
})
