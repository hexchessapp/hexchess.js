import { HexChess } from '../src/hexchess'

test('isDraw checkmate', () => {
  const fen = '6/7/8/9/10/K7Q1k/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isDraw()).toEqual(false)
})

test('isDraw insuffient', () => {
  const fen = '6/7/8/9/10/K9k/10/9/8/7/6 w - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isDraw()).toEqual(true)
})

test('isDraw stalemate', () => {
  const fen = '6/7/8/7P1/10/K9k/10/7Q1/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isDraw()).toEqual(false)
})

test('isDraw threefold', () => {
  const chess = new HexChess()
  chess.move('f1', 'g2')
  chess.move('f11', 'g9')
  chess.move('g2', 'f1')
  chess.move('g9', 'f11')
  chess.move('f1', 'g2')
  chess.move('f11', 'g9')
  chess.move('g2', 'f1')
  chess.move('g9', 'f11')
  chess.move('f1', 'g2')
  expect(chess.isDraw()).toEqual(true)
})

test('isDraw 50-move', () => {
  const fen = '6/7/8/9/10/KP8k/10/9/8/7/6 b - 100 50'
  const chess = new HexChess(fen)
  expect(chess.isDraw()).toEqual(true)
})

test('isDraw 50-move-almost', () => {
  const fen = '6/7/8/9/10/KP8k/10/9/8/7/6 b - 99 50'
  const chess = new HexChess(fen)
  expect(chess.isDraw()).toEqual(false)
})
