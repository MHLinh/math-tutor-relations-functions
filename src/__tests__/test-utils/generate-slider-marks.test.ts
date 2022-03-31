import { generateSliderMarks } from "utils/generate-slider-marks"

test("generate slider marks step 1, min 1 max 1", () => {
  expect(generateSliderMarks(0, 1, 2)).toEqual(
    [
      { value: 1, label: "1"},
      { value: 2, label: "2"},
    ]
  )  
})

test("generate slider marks step 1, min 2 max 1", () => {
  expect(generateSliderMarks(1, 2, 1)).toEqual(
    []
  )  
})

test("generate slider marks step 1, min 1 max 1", () => {
  expect(generateSliderMarks(1, 1, 1)).toEqual(
    [{ value: 1, label: "1"}]
  )  
})

test("generate slider marks step 1, min -5 max 5", () => {
  expect(generateSliderMarks(1, -5, 5)).toEqual(
    [
      { value: -5, label: "-5"},
      { value: -4, label: "-4"},
      { value: -3, label: "-3"},
      { value: -2, label: "-2"},
      { value: -1, label: "-1"},
      { value: 0, label: "0"},
      { value: 1, label: "1"},
      { value: 2, label: "2"},
      { value: 3, label: "3"},
      { value: 4, label: "4"},
      { value: 5, label: "5"}
    ]
  )  
})

test("generate slider marks step 0.1, min 0 max 1", () => {
  expect(generateSliderMarks(0.1, 0, 1)).toEqual(
    [
      { value: 0, label: "0"},
      { value: 0.1, label: "0.1"},
      { value: 0.2, label: "0.2"},
      { value: 0.3, label: "0.3"},
      { value: 0.4, label: "0.4"},
      { value: 0.5, label: "0.5"},
      { value: 0.6, label: "0.6"},
      { value: 0.7, label: "0.7"},
      { value: 0.8, label: "0.8"},
      { value: 0.9, label: "0.9"},
      { value: 1, label: "1"}
    ]
  )
})
