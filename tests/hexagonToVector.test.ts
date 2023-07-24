import { Vector } from 'vector2d'
import { Hexagon } from '../src/consts'
import hexagonToVector from '../src/utils/hexagonToVector'

test('hexagonToVector bottom-left', () => {
  const hex: Hexagon = 'a1'
  const expectedVector = new Vector(-5, -5)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})

test('hexagonToVector top-left', () => {
  const hex: Hexagon = 'a6'
  const expectedVector = new Vector(-5, 0)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})

test('hexagonToVector top', () => {
  const hex: Hexagon = 'f11'
  const expectedVector = new Vector(0, 5)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})

test('hexagonToVector top-right', () => {
  const hex: Hexagon = 'k6'
  const expectedVector = new Vector(5, 5)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})

test('hexagonToVector bottom-right', () => {
  const hex: Hexagon = 'k1'
  const expectedVector = new Vector(5, 0)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})

test('hexagonToVector bottom', () => {
  const hex: Hexagon = 'f1'
  const expectedVector = new Vector(0, -5)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})

test('hexagonToVector origin', () => {
  const hex: Hexagon = 'f6'
  const expectedVector = new Vector(0, 0)
  const vector = hexagonToVector(hex)
  expect(vector).toEqual(expectedVector)
})
