import { NumberSet } from "components/function-composition/function-composition-types"
import { isCompositionValid } from "utils/function-composition"

test("composition f(g(x)) domain f Natural, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f Natural, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Natural, codomain g IntegersNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.IntegersNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g RationalPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.RationalPositive)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g RationalNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.RationalNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Natural, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.Natural, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g IntegersNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.IntegersNegative)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g RationalPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.RationalPositive)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g RationalNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.RationalNegative)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersPositive, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersPositive, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g Natural should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.Natural)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g IntegersPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.IntegersPositive)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g IntegersNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.IntegersNegative)).toBe(true)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g RationalPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.RationalPositive)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g RationalNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.RationalNegative)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f IntegersNegative, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.IntegersNegative, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f Integers, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Integers, codomain g IntegersNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.IntegersNegative)).toBe(true)  
})

test("composition f(g(x)) domain f Integers, codomain g Integers should be valid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.Integers)).toBe(true)  
})

test("composition f(g(x)) domain f Integers, codomain g RationalPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.RationalPositive)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g RationalNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.RationalNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Integers, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.Integers, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g IntegersNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.IntegersNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g RationalPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.RationalPositive)).toBe(true)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g RationalNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.RationalNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RationalPositive, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalPositive, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g Natural should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.Natural)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g IntegersPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.IntegersPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g IntegersNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.IntegersNegative)).toBe(true)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g RationalPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.RationalPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g RationalNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.RationalNegative)).toBe(true)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RationalNegative, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.RationalNegative, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f Rational, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g IntegersNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.IntegersNegative)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g Integers should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.Integers)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g RationalPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.RationalPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g RationalNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.RationalNegative)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g Rational should be valid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.Rational)).toBe(true)  
})

test("composition f(g(x)) domain f Rational, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f Rational, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f Rational, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.Rational, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f RealPositive, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f RealPositive, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f RealPositive, codomain g IntegersNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.IntegersNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RealPositive, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f RealPositive, codomain g RationalPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.RationalPositive)).toBe(true)  
})

test("composition f(g(x)) domain f RealPositive, codomain g RationalNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.RationalNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RealPositive, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f RealPositive, codomain g RealPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.RealPositive)).toBe(true)  
})

test("composition f(g(x)) domain f RealPositive, codomain g RealNegative should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.RealNegative)).toBe(false)  
})

test("composition f(g(x)) domain f RealPositive, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealPositive, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g Natural should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.Natural)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g IntegersPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.IntegersPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g IntegersNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.IntegersNegative)).toBe(true)  
})

test("composition f(g(x)) domain f RealNegative, codomain g Integers should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.Integers)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g RationalPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.RationalPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g RationalNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.RationalNegative)).toBe(true)  
})

test("composition f(g(x)) domain f RealNegative, codomain g Rational should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.Rational)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g RealPositive should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.RealPositive)).toBe(false)  
})

test("composition f(g(x)) domain f RealNegative, codomain g RealNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.RealNegative)).toBe(true)  
})

test("composition f(g(x)) domain f RealNegative, codomain g Real should be invalid", () => {
  expect(isCompositionValid(NumberSet.RealNegative, NumberSet.Real)).toBe(false)  
})

test("composition f(g(x)) domain f Real, codomain g Natural should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.Natural)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g IntegersPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.IntegersPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g IntegersNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.IntegersNegative)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g Integers should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.Integers)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g RationalPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.RationalPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g RationalNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.RationalNegative)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g Rational should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.Rational)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g RealPositive should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.RealPositive)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g RealNegative should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.RealNegative)).toBe(true)  
})

test("composition f(g(x)) domain f Real, codomain g Real should be valid", () => {
  expect(isCompositionValid(NumberSet.Real, NumberSet.Real)).toBe(true)  
})
