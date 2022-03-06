import { generatePoints } from "utils/generate-points"

test("generate at most 5 points with coordinates between 1 and 4", () => {
  const points = generatePoints(1, 4, 5)
  expect(points.length).toBeLessThanOrEqual(5)
  for(let i = 0; i < points.length; i++) {
    expect(points[i][0]).toBeGreaterThanOrEqual(1)
    expect(points[i][1]).toBeLessThanOrEqual(4)
  }
})
