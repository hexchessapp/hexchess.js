import { HexChess } from '../src/hexchess'

test('history', () => {
  const chess = new HexChess()
  chess.move({ from: 'f2', to: 'h4' })
  const history = chess.history()
  expect(history[history.length - 1]).toEqual({
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
})

test('history', () => {
  const chess = new HexChess()
  chess.move({ from: 'j1', to: 'j3' })
  const history = chess.history()
  expect(history[history.length - 1]).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/2P3p/6 b j2 1 1',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1',
    captured: null,
    color: 'w',
    from: 'j1',
    piece: 'p',
    promotion: null,
    san: 'j3',
    to: 'j3',
  })
})

test('history 2', () => {
  const chess = new HexChess()
  chess.move({ from: 'j1', to: 'j3' })
  chess.move({ from: 'g7', to: 'g5' })
  const history = chess.history()
  expect(history[history.length - 1]).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2Pp4k/N1P3p1n/RP4pr/2P3p/6 w g6 2 2',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/2P3p/6 b j2 1 1',
    captured: null,
    color: 'b',
    from: 'g7',
    piece: 'p',
    promotion: null,
    san: 'g5',
    to: 'g5',
  })
})

test('history san', () => {
  const fen = `5R/7/6P1/N1P3p1n/QB1P2p2q/1BB1P1p1kbb/K2P2p3/N1P3p1n/q6r/7/1r4 b - 33 17`
  const chess = new HexChess(fen)

  chess.move({ from: 'i8', to: 'i2' })

  const history = chess.history()
  expect(history[history.length - 1].san).toEqual('Rii2')
})

test('history san', () => {
  const fen = `5R/7/6P1/N1P3p1n/QB1P2p2q/1BB1P1p1kbb/K2P2p3/N1P3p1n/q6r/7/1r4 b - 33 17`
  const chess = new HexChess(fen)

  chess.move({ from: 'i8', to: 'k6' })
  chess.move({ from: 'a6', to: 'a5' })
  chess.move({ from: 'k2', to: 'g6' })

  const history = chess.history()
  expect(history[history.length - 1].san).toEqual('R2g6')
})
