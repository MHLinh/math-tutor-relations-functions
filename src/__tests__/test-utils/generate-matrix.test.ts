import { generateMatrix, generateRectMatrix } from "utils/generate-matrix"

test("generate 4x4 matrix filled with 0s", () => {
  expect(generateMatrix(4)).toEqual(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  )  
})

test("generate 4x4 matrix filled with 1s", () => {
  expect(generateMatrix(4, 1)).toEqual(
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]
  )  
})

test("generate 4x5 matrix filled with 0s", () => {
  expect(generateRectMatrix(4, 5)).toEqual(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]
  )  
})

test("generate 4x5 matrix filled with 1s", () => {
  expect(generateRectMatrix(4, 5, 1)).toEqual(
    [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]
  )  
})

test("generate 5x4 matrix filled with 0s", () => {
  expect(generateRectMatrix(5, 4)).toEqual(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  )  
})

test("generate 5x4 matrix filled with 1s", () => {
  expect(generateRectMatrix(5, 4, 1)).toEqual(
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]
  )  
})
