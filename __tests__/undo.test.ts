import { HexChess } from '../src/hexchess'

test('undo', () => {
  const chess = new HexChess()
  chess.move({ from: 'f2', to: 'h4' })
  const lastMove = chess.undo()
  expect(lastMove).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/B1B1P1p1bbb/K2P2p2k/N1PB2p1n/RP4pr/P5p/6 b - 1 1',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1',
    captured: null,
    color: 'w',
    from: 'f2',
    piece: 'b',
    promotion: null,
    san: 'Bh4',
    to: 'h4',
  })
  expect(chess.history().length).toEqual(0)
})

test('undo 2', () => {
  const chess = new HexChess()
  chess.move({ from: 'f2', to: 'h4' })
  chess.move({ from: 'f10', to: 'h6' })
  const lastMove = chess.undo()
  expect(lastMove).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/B1B1P1p1b1b/K2P2p2k/N1PB1bp1n/RP4pr/P5p/6 w - 2 2',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/B1B1P1p1bbb/K2P2p2k/N1PB2p1n/RP4pr/P5p/6 b - 1 1',
    captured: null,
    color: 'b',
    from: 'f10',
    piece: 'b',
    promotion: null,
    san: 'Bh6',
    to: 'h6',
  })
  expect(chess.history()).toEqual([
    {
      after:
        '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/B1B1P1p1bbb/K2P2p2k/N1PB2p1n/RP4pr/P5p/6 b - 1 1',
      before:
        '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1',
      captured: null,
      color: 'w',
      from: 'f2',
      piece: 'b',
      promotion: null,
      san: 'Bh4',
      to: 'h4',
    },
  ])
})
