export enum NumberSet {
  Natural = "NATURAL",
  IntegersPositive = "INTEGERS_POSITIVE",
  IntegersNegative = "INTEGERS_NEGATIVE",
  Integers = "INTEGERS",
  RationalPositive = "RATIONAL_POSITIVE",
  RationalNegative = "RATIONAL_NEGATIVE",
  Rational ="RATIONAL",
  RealPositive = "REAL_POSITIVE",
  RealNegative = "REAL_NEGATIVE",
  Real = "REAL"
}

export const SubsetOf = {
  [NumberSet.Natural]: [
    NumberSet.Natural, 
    NumberSet.IntegersPositive, 
    NumberSet.Integers, 
    NumberSet.RationalPositive,
    NumberSet.Rational,
    NumberSet.RealPositive,
    NumberSet.Real
  ],
  [NumberSet.IntegersPositive]: [
    NumberSet.Natural,
    NumberSet.IntegersPositive, 
    NumberSet.Integers, 
    NumberSet.RationalPositive,
    NumberSet.Rational,
    NumberSet.RealPositive,
    NumberSet.Real
  ],
  [NumberSet.IntegersNegative]: [
    NumberSet.IntegersNegative,
    NumberSet.Integers,
    NumberSet.RationalNegative,
    NumberSet.Rational,
    NumberSet.RealNegative,
    NumberSet.Real
  ],
  [NumberSet.Integers]: [
    NumberSet.Integers,
    NumberSet.Rational,
    NumberSet.Real
  ],
  [NumberSet.RationalPositive]: [
    NumberSet.RationalPositive,
    NumberSet.Rational,
    NumberSet.RealPositive,
    NumberSet.Real
  ],
  [NumberSet.RationalNegative]: [
    NumberSet.RationalNegative,
    NumberSet.Rational,
    NumberSet.RealNegative,
    NumberSet.Real
  ],
  [NumberSet.Rational]: [
    NumberSet.Rational,
    NumberSet.Real
  ],
  [NumberSet.RealPositive]: [
    NumberSet.RealPositive,
    NumberSet.Real
  ],
  [NumberSet.RealNegative]: [
    NumberSet.RealNegative,
    NumberSet.Real
  ],
  [NumberSet.Real]: [
    NumberSet.Real
  ] 
}
