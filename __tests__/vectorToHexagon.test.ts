import { Vector } from 'vector2d'
import { Hexagon } from '../src/consts'
import vectorToHexagon from '../src/utils/vectorToHexagon'

test('vectorToHexagon bottom-left', () => {
  const vector = new Vector(-5, -5)
  const expectedHex: Hexagon = 'a1'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})

test('vectorToHexagon top-left', () => {
  const vector = new Vector(-5, 0)
  const expectedHex: Hexagon = 'a6'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})

test('vectorToHexagon top', () => {
  const vector = new Vector(0, 5)
  const expectedHex: Hexagon = 'f11'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})

test('vectorToHexagon top-right', () => {
  const vector = new Vector(5, 5)
  const expectedHex: Hexagon = 'k6'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})

test('vectorToHexagon bottom-right', () => {
  const vector = new Vector(5, 0)
  const expectedHex: Hexagon = 'k1'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})

test('vectorToHexagon bottom', () => {
  const vector = new Vector(0, -5)
  const expectedHex: Hexagon = 'f1'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})

test('vectorToHexagon origin', () => {
  const vector = new Vector(0, 0)
  const expectedHex: Hexagon = 'f6'
  const hex = vectorToHexagon(vector)
  expect(hex).toEqual(expectedHex)
})
