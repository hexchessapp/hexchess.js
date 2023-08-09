import { HexChess } from '../src/hexchess'

test('isCheckmate', () => {
  const fen = '6/7/8/9/10/K7Q1k/10/9/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isCheckmate()).toEqual(true)
})

test('isCheckmate stalemate', () => {
  const fen = '6/7/8/7P1/10/K9k/10/7Q1/8/7/6 b - 0 1'
  const chess = new HexChess(fen)
  expect(chess.isCheckmate()).toEqual(false)
})
