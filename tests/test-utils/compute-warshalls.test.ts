import { computeWarshalls } from "utils/compute-warshalls"

test("compute warshalls algorithm", () => {
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