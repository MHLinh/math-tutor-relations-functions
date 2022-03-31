import { NumberSet, SubsetOf } from "components/function-composition/function-composition-types"

/**
 * Check whether f(g(x)) can be composed,
 * if the codomain of g is a subset of the domain of f.
 * @param domain - domain of function f
 * @param codomain - codomain of function g
 * @returns whether the f(g(x)) can be composed
 */
export function isCompositionValid(domain: NumberSet, codomain: NumberSet) {
  return SubsetOf[codomain].includes(domain)
}
