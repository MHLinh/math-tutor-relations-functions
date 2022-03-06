import { 
  isDomainMapped,
  isOneMapping,
  isOnto,
  isOneToOne
} from "utils/function-properties"

test("determine if all the domain elements have been mapped - true 1", () => {
  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ]
  expect(isDomainMapped(matrix)).toBe(true)  
})

test("determine if all the domain elements have been mapped - true 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isDomainMapped(matrix)).toBe(true)  
})

test("determine if all the domain elements have been mapped - true 3", () => {
  const matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]
  expect(isDomainMapped(matrix)).toBe(true)  
})

test("determine if all the domain elements have been mapped - false 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isDomainMapped(matrix)).toBe(false)  
})

test("determine if all the domain elements have been mapped - false 2", () => {
  const matrix = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isDomainMapped(matrix)).toBe(false)  
})

test("determine if all the domain elements have been mapped - false 3", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
  ]
  expect(isDomainMapped(matrix)).toBe(false)  
})

test("determine if the domain elements map to at most one element - true 1", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isOneMapping(matrix)).toBe(true)  
})

test("determine if the domain elements map to at most one element - true 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isOneMapping(matrix)).toBe(true)  
})

test("determine if the domain elements map to at most one element - true 3", () => {
  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ]
  expect(isOneMapping(matrix)).toBe(true)  
})

test("determine if the domain elements map to at most one element - false 1", () => {
  const matrix = [
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(isOneMapping(matrix)).toBe(false)  
})

test("determine if the domain elements map to at most one element - false 2", () => {
  const matrix = [
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ]
  expect(isOneMapping(matrix)).toBe(false)  
})

test("determine if the domain elements map to at most one element - true 3", () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
  ]
  expect(isOneMapping(matrix)).toBe(false)  
})

test("determine if the function is onto - true 1", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ]
  expect(isOneToOne(matrix)).toBe(true)  
})

test("determine if the function is onto - true 1", () => {
  const matrix = [
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0],
  ]
  expect(isOnto(matrix)).toBe(true)  
})

test("determine if the function is onto - true 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ]
  expect(isOnto(matrix)).toBe(true)  
})

test("determine if the function is onto - false 1", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
  ]
  expect(isOnto(matrix)).toBe(false)  
})

test("determine if the function is onto - false 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ]
  expect(isOnto(matrix)).toBe(false)  
})

test("determine if the function is one to one - true 1", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ]
  expect(isOneToOne(matrix)).toBe(true)  
})

test("determine if the function is one to one - true 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  expect(isOneToOne(matrix)).toBe(true)  
})

test("determine if the function is one to one - true 3", () => {
  const matrix = [
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
  ]
  expect(isOneToOne(matrix)).toBe(true)  
})

test("determine if the function is one to one - false 1", () => {
  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ]
  expect(isOneToOne(matrix)).toBe(false)  
})

test("determine if the function is one to one - false 2", () => {
  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
  ]
  expect(isOneToOne(matrix)).toBe(false)  
})

test("determine if the function is one to one - false 3", () => {
  const matrix = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ]
  expect(isOneToOne(matrix)).toBe(false)  
})
