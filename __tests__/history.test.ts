import { HexChess } from '../src/hexchess'

test('history', () => {
  const chess = new HexChess()
  chess.move('f2', 'h4')
  const history = chess.history()
  expect(history[history.length - 1]).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/B1B1P1p1bbb/K2P2p2k/N1PB2p1n/RP4pr/P5p/6 b - 1 1',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1',
    captured: null,
    color: 'w',
    flags: '',
    from: 'f2',
    lan: '',
    piece: 'b',
    promotion: null,
    san: '',
    to: 'h4',
  })
})

test('history', () => {
  const chess = new HexChess()

  chess.move('j1', 'j3')
  const history = chess.history()
  expect(history[history.length - 1]).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/2P3p/6 b j2 1 1',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1',
    captured: null,
    color: 'w',
    flags: '',
    from: 'j1',
    lan: '',
    piece: 'p',
    promotion: null,
    san: '',
    to: 'j3',
  })
})

test('history 2', () => {
  const chess = new HexChess()

  chess.move('j1', 'j3')
  chess.move('g7', 'g5')
  const history = chess.history()
  expect(history[history.length - 1]).toEqual({
    after:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2Pp4k/N1P3p1n/RP4pr/2P3p/6 w g6 2 2',
    before:
      '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/2P3p/6 b j2 1 1',
    captured: null,
    color: 'b',
    flags: '',
    from: 'g7',
    lan: '',
    piece: 'p',
    promotion: null,
    san: '',
    to: 'g5',
  })
})
