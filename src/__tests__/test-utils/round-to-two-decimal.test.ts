import { roundToTwoDecimal } from "utils/round-to-two-decimal"

test("round 0.1 to two decimal numbers to be 0.1", () => {
  expect(roundToTwoDecimal(0.1)).toBe(0.1)  
})

test("round 0.109 to two decimal numbers to be 0.11", () => {
  expect(roundToTwoDecimal(0.109)).toBe(0.11)  
})

test("round 0.11 to two decimal numbers to be 0.11", () => {
  expect(roundToTwoDecimal(0.11)).toBe(0.11)  
})

test("round 0.009 to two decimal numbers to be 0.01", () => {
  expect(roundToTwoDecimal(0.009)).toBe(0.01)  
})

test("round 1 to two decimal numbers to be 1", () => {
  expect(roundToTwoDecimal(1)).toBe(1)  
})