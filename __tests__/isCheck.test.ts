import { BISHOP, BLACK, KNIGHT, PAWN, ROOK, WHITE } from '../src/consts'
import { HexChess } from '../src/hexchess'

test('inCheck lone-king', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck bishop-white', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('g7', { color: BLACK, type: BISHOP })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck bishop-black', () => {
  const fen = '6/7/8/9/10/K4k5/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  chess.put('g7', { color: WHITE, type: BISHOP })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck bishop-same', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('g7', { color: WHITE, type: BISHOP })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck bishop-no-attack', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('h7', { color: BLACK, type: BISHOP })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck rook-white', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('f8', { color: BLACK, type: ROOK })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck rook-black', () => {
  const fen = '6/7/8/9/10/K4k5/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  chess.put('f8', { color: WHITE, type: ROOK })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck rook-same', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('f8', { color: WHITE, type: ROOK })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck rook-no-attack', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('g8', { color: WHITE, type: ROOK })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck knight-white', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('h7', { color: BLACK, type: KNIGHT })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck knight-black', () => {
  const fen = '6/7/8/9/10/K4k5/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  chess.put('h7', { color: WHITE, type: KNIGHT })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck knight-same', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('h7', { color: WHITE, type: KNIGHT })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck knight-no-attack', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('f8', { color: BLACK, type: KNIGHT })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck pawn-white', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('g6', { color: BLACK, type: PAWN })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck pawn-black', () => {
  const fen = '6/7/8/9/10/K4k5/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  chess.put('g5', { color: WHITE, type: PAWN })
  expect(chess.inCheck()).toEqual(true)
})

test('inCheck pawn-same', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('g5', { color: WHITE, type: PAWN })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck pawn-wrong-direction-black', () => {
  const fen = '6/7/8/9/10/K4k5/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  chess.put('g6', { color: WHITE, type: PAWN })
  expect(chess.inCheck()).toEqual(false)
})

test('inCheck pawn-wrong-direction-white', () => {
  const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  chess.put('g5', { color: BLACK, type: PAWN })
  expect(chess.inCheck()).toEqual(false)
})
