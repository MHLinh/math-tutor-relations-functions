import {
  checkReflexive,
  checkIrreflexive,
  checkSymmetric,
  checkAntisymmetric,
  checkTransitive,
  isReflexive,
  isIrreflexive,
  isSymmetric,
  isAntisymmetric,
  isTransitive,
  isAllPairs
} from "utils/relation-properties"

test("determine that the relation is reflexive", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isReflexive(matrix)).toBe(true)  
})

test("determine that the relation is not reflexive 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isReflexive(matrix)).toBe(false)  
})

test("determine that the relation is not reflexive 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isReflexive(matrix)).toBe(false)  
})

test("determine that the relation is not reflexive 3", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ]
  expect(isReflexive(matrix)).toBe(false)  
})

test("determine that the relation is not reflexive 4", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(isReflexive(matrix)).toBe(false)  
})

test("check if relation is missing pairs to be reflexive - none", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(checkReflexive(matrix)).toEqual([])  
})

test("check if relation is missing pairs to be reflexive - (1,1)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(checkReflexive(matrix)).toEqual(["(1,1)"])  
})

test("check if relation is missing pairs to be reflexive - (2,2)", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(checkReflexive(matrix)).toEqual(["(2,2)"])  
})

test("check if relation is missing pairs to be reflexive - (3,3)", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ]
  expect(checkReflexive(matrix)).toEqual(["(3,3)"])  
})

test("check if relation is missing pairs to be reflexive - (4,4)", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(checkReflexive(matrix)).toEqual(["(4,4)"])  
})

test("check if relation is missing pairs to be reflexive - (1,1), (2,2), (3,3), (4,4)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkReflexive(matrix)).toEqual(
    ["(1,1)", "(2,2)", "(3,3)", "(4,4)"]
  )  
})

test("determine that the relation is irreflexive", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isIrreflexive(matrix)).toBe(true)  
})

test("determine that the relation is not irreflexive 1", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isIrreflexive(matrix)).toBe(false)  
})

test("determine that the relation is not irreflexive 2", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isIrreflexive(matrix)).toBe(false)  
})

test("determine that the relation is not irreflexive 3", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(isIrreflexive(matrix)).toBe(false)  
})

test("determine that the relation is not irreflexive 4", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ]
  expect(isIrreflexive(matrix)).toBe(false)  
})

test("check if relation has pairs that make it not irreflexive - none", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkIrreflexive(matrix)).toEqual([])  
})

test("check if relation has pairs that make it not irreflexive - (1,1)", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkIrreflexive(matrix)).toEqual(["(1,1)"])  
})

test("check if relation has pairs that make it not irreflexive - (2,2)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkIrreflexive(matrix)).toEqual(["(2,2)"])  
})

test("check if relation has pairs that make it not irreflexive - (3,3)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(checkIrreflexive(matrix)).toEqual(["(3,3)"])  
})

test("check if relation has pairs that make it not irreflexive - (4,4)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ]
  expect(checkIrreflexive(matrix)).toEqual(["(4,4)"])  
})

test("determine that the relation is symmetric 1", () => {
  const matrix = [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is symmetric 2", () => {
  const matrix = [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is symmetric 3", () => {
  const matrix = [
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is symmetric 4", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is symmetric 5", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is symmetric 6", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is symmetric 7", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(true)  
})

test("determine that the relation is not symmetric 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(false)  
})

test("determine that the relation is not symmetric 2", () => {
  const matrix = [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isSymmetric(matrix)).toBe(false)  
})

test("determine that the relation is not symmetric 3", () => {
  const matrix = [
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ]
  expect(isSymmetric(matrix)).toBe(false)  
})

test("check if relation is missing pairs to be reflexive - none", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkSymmetric(matrix)).toEqual([])  
})

test("check if relation is missing pairs to be reflexive - (2,1), (3,2), (4,3)", () => {
  const matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ]
  expect(checkSymmetric(matrix)).toEqual(
    ["(2,1)", "(3,2)", "(4,3)"]
  )  
})

test("check if relation is missing pairs to be reflexive - (1,2), (2,3), (3,4)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
  ]
  expect(checkSymmetric(matrix)).toEqual(
    ["(1,2)", "(2,3)", "(3,4)"]
  )  
})

test("determine that the relation is antisymmetric 1", () => {
  const matrix = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(isAntisymmetric(matrix)).toBe(true)  
})

test("determine that the relation is antisymmetric 2", () => {
  const matrix = [
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 0, 1],
  ]
  expect(isAntisymmetric(matrix)).toBe(true)  
})

test("determine that the relation not antisymmetric 1", () => {
  const matrix = [
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 0, 1],
  ]
  expect(isAntisymmetric(matrix)).toBe(false)  
})

test("determine that the relation not antisymmetric 2", () => {
  const matrix = [
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 0, 1],
  ]
  expect(isAntisymmetric(matrix)).toBe(false)  
})

test("check if relation has pairs that make it not antisymmetric - none", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkAntisymmetric(matrix)).toEqual([])  
})

test("check if relation has pairs that make it not antisymmetric - none", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkAntisymmetric(matrix)).toEqual([])  
})

test("check if relation has pairs that make it not antisymmetric - (1,2), (2,1)", () => {
  const matrix = [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkAntisymmetric(matrix)).toEqual(["(1,2)", "(2,1)"])  
})

test("check if relation has pairs that make it not antisymmetric - (1,2), (2,1), (1,4), (4,1)", () => {
  const matrix = [
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
  ]
  expect(checkAntisymmetric(matrix)).toEqual(["(1,2)", "(2,1)", "(1,4)", "(4,1)"])  
})

test("check if relation has pairs that make it not antisymmetric - (2,3), (3,2)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(checkAntisymmetric(matrix)).toEqual(["(2,3)", "(3,2)"])  
})

test("determine that the relation is transitive 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isTransitive(matrix)).toBe(true)  
})

test("determine that the relation is transitive 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isTransitive(matrix)).toBe(true)  
})

test("determine that the relation is transitive 3", () => {
  const matrix = [
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isTransitive(matrix)).toBe(true)  
})

test("determine that the relation is not transitive 1", () => {
  const matrix = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isTransitive(matrix)).toBe(false)  
})

test("determine that the relation is not transitive 2", () => {
  const matrix = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
  ]
  expect(isTransitive(matrix)).toBe(false)  
})

test("determine that the relation is not transitive 3", () => {
  const matrix = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ]
  expect(isTransitive(matrix)).toBe(false)  
})

test("check if relation is missing pairs to be transitive - (1,3)", () => {
  const matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(checkTransitive(matrix)).toEqual(["(1,3)"])  
})

test("check if relation is missing pairs to be transitive - (4,2)", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
  ]
  expect(checkTransitive(matrix)).toEqual(["(4,2)"])  
})


test("check if relation is missing pairs to be transitive - (1,3), (2,2), (3,3), (4,2)", () => {
  const matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
  ]
  expect(checkTransitive(matrix)).toEqual(["(1,3)", "(2,2)", "(3,3)", "(4,2)"])  
})


test("determine whether (a,b) or (b,a) are in the relation for each element - true 1", () => {
  const matrix = [
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ]
  expect(isAllPairs(matrix)).toBe(true)  
})

test("determine whether (a,b) or (b,a) are in the relation for each element - true 2", () => {
  const matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]
  expect(isAllPairs(matrix)).toBe(true)  
})

test("determine whether (a,b) or (b,a) are in the relation for each element - false 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isAllPairs(matrix)).toBe(false)  
})

test("determine whether (a,b) or (b,a) are in the relation for each element - false 2", () => {
  const matrix = [
    [1, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ]
  expect(isAllPairs(matrix)).toBe(false)  
})
