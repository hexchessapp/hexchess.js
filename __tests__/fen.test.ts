import { HexChess } from '../src/hexchess'

test('fen default', () => {
  const chess = new HexChess()
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1'
  )
})

test('fen 1move ep', () => {
  const chess = new HexChess()
  chess.move('j1', 'j3')
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/2P3p/6 b j2 1 1'
  )
})

test('fen 2move removed ep', () => {
  const chess = new HexChess()
  chess.move('j1', 'j3')
  chess.move('j7', 'j6')
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/2P2p1/6 w - 2 2'
  )
})
