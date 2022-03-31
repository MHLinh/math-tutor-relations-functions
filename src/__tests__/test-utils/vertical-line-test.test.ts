import { verticalLineTest } from "utils/vertical-line-test"

test("determine that no points return false", () => {
  const points = []
  expect(verticalLineTest(1, points)).toBe(false)  
})

test("determine that point (1, 1) at x = 1 return false", () => {
  const points = [[1, 1]]
  expect(verticalLineTest(1, points)).toBe(false)  
})

test("determine that points (1,2), (1,3) are in the same vertical line at x = 1", () => {
  const points = [[1, 2], [1, 3]]
  expect(verticalLineTest(1, points)).toBe(true)  
})

test("determine that points (1,2), (2,2) are not in the same vertical line  x = 1 and x = 2", () => {
  const points = [[1, 2], [2, 2]]
  expect(verticalLineTest(1, points)).toBe(false)
  expect(verticalLineTest(2, points)).toBe(false)  
})

test("determine that points (1,2), (1,3) are in the same vertical line at x = 1 and (2,2), (2,4) are in the same line at x = 2", () => {
  const points = [[1, 2], [1, 3], [2, 2], [2, 4]]
  expect(verticalLineTest(1, points)).toBe(true) 
  expect(verticalLineTest(2, points)).toBe(true)  
})
