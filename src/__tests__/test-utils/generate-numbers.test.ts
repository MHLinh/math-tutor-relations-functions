import { generateNumbers } from "utils/generate-numbers"

test("generate numbers between 1 and 10 included", () => {
  expect(generateNumbers(1, 10)).toEqual(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )  
})

test("generate numbers between -4 and 4 included", () => {
  expect(generateNumbers(-4, 4)).toEqual(
    [-4, -3, -2, -1, 0, 1, 2, 3, 4]
  )  
})

test("generate numbers between -6 and -2 included", () => {
  expect(generateNumbers(-6, -2)).toEqual(
    [-6, -5, -4, -3, -2]
  )  
})
