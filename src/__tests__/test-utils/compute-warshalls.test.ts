import { computeWarshalls } from "utils/compute-warshalls"

test("compute warshalls algorithm 1", () => {
  const matrix = [
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0]
  ]
  expect(computeWarshalls(matrix)).toEqual([
    [
      [0, 1, 0, 1],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0]
    ],
    [
      [0, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0]
    ],
    [
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 0, 1, 0],
      [1, 1, 0, 1]
    ],
    [
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 0, 1, 0],
      [1, 1, 0, 1]
    ],
    [
      [1, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 0, 1, 0],
      [1, 1, 0, 1]
    ]
  ])  
})

test("compute warshalls algorithm 1", () => {
  const matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ]
  expect(computeWarshalls(matrix)).toEqual([
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ]
  ])  
})

test("compute warshalls algorithm 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  expect(computeWarshalls(matrix)).toEqual([
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ])  
})