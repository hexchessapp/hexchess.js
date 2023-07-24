import { Vector } from 'vector2d'
import isWithinBounds from '../src/utils/isWithinBounds'

test('isWithinBounds bottom-left', () => {
  const vector = new Vector(-5, -5)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds top-left', () => {
  const vector = new Vector(-5, 0)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds top', () => {
  const vector = new Vector(0, 5)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds top-right', () => {
  const vector = new Vector(5, 5)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds bottom-right', () => {
  const vector = new Vector(5, 0)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds bottom', () => {
  const vector = new Vector(0, -5)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds origin', () => {
  const vector = new Vector(0, 0)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds bottom-left', () => {
  const vector = new Vector(-5, -5)
  const expectedResult = true
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds top-left-far', () => {
  const vector = new Vector(-6, -6)
  const expectedResult = false
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds top-far', () => {
  const vector = new Vector(0, 6)
  const expectedResult = false
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds top-right-far', () => {
  const vector = new Vector(6, 6)
  const expectedResult = false
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds bottom-right-far', () => {
  const vector = new Vector(6, 0)
  const expectedResult = false
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})

test('isWithinBounds bottom-far', () => {
  const vector = new Vector(0, -6)
  const expectedResult = false
  const result = isWithinBounds(vector)
  expect(result).toEqual(expectedResult)
})
