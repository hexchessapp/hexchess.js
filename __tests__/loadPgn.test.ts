import { HexChess } from '../src/hexchess'

test('loadPgn', () => {
  const chess = new HexChess()
  chess.loadPgn('1. f6 g5 2. fxg6')
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB3p1bbb/K2P1P3k/N1P3p1n/RP4pr/P5p/6 b - 3 2'
  )
})

test('loadPgn array', () => {
  const chess = new HexChess()
  chess.loadPgn(['f6', 'g5', 'fxg6'])
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB3p1bbb/K2P1P3k/N1P3p1n/RP4pr/P5p/6 b - 3 2'
  )
})
