import { HexChess } from "../src/hexchess"

test('isInsufficientMaterial kings', () => {
  const fen = '6/7/8/9/10/K9k/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isInsufficientMaterial()).toEqual(true)
})

test('isInsufficientMaterial w-kb', () => {
  const fen = '6/7/8/9/10/KB8k/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isInsufficientMaterial()).toEqual(true)
})

test('isInsufficientMaterial b-kb', () => {
  const fen = '6/7/8/9/10/K8bk/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isInsufficientMaterial()).toEqual(true)
})

test('isInsufficientMaterial w-kn', () => {
  const fen = '6/7/8/9/10/KN8k/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isInsufficientMaterial()).toEqual(true)
})

test('isInsufficientMaterial b-kn', () => {
  const fen = '6/7/8/9/10/K8nk/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isInsufficientMaterial()).toEqual(true)
})

test('isInsufficientMaterial untrue', () => {
  const fen = '6/7/8/9/10/K8pk/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isInsufficientMaterial()).toEqual(false)
})
