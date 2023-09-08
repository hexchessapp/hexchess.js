import { HexChess } from '../src/hexchess'

test('moves pawn start', () => {
  const chess = new HexChess()
  expect(chess.moves('g4').sort()).toEqual(['g5', 'g6'].sort())
})

test('moves pawn later', () => {
  const chess = new HexChess()
  chess.move({ from: 'i2', to: 'i3' })
  expect(chess.moves('i3').sort()).toEqual(['i4'].sort())
})

test('moves knight', () => {
  const chess = new HexChess()
  expect(chess.moves('d1').sort()).toEqual(['b2', 'c3', 'f4', 'g2'].sort())
})

test('moves bishop', () => {
  const chess = new HexChess()
  expect(chess.moves('f2').sort()).toEqual(
    ['b6', 'c5', 'd4', 'e3', 'g3', 'h4', 'i5', 'j6'].sort()
  )
})

test('moves rook', () => {
  const chess = new HexChess()
  expect(chess.moves('i1').sort()).toEqual(['h2', 'g3', 'f4'].sort())
})

test('moves black queen', () => {
  const chess = new HexChess()
  expect(chess.moves('e10').sort()).toEqual(
    ['c6', 'a2', 'd8', 'b4', 'e9', 'e8'].sort()
  )
})

test('moves pseudo check false color check', () => {
  const chess = new HexChess()
  chess.move({ from: 'e1', to: 'a5' })
  expect(chess.moves('f7').sort()).toEqual(['f6'].sort())
})

test('moves board state maintained', () => {
  const chess = new HexChess()
  chess.move({ from: 'f2', to: 'i5' })
  chess.moves('i5')
  expect(chess.board()).toEqual({
    a1: null,
    a2: null,
    a3: null,
    a4: null,
    a5: null,
    a6: null,
    b1: { color: 'w', type: 'p' },
    b2: null,
    b3: null,
    b4: null,
    b5: null,
    b6: null,
    b7: { color: 'b', type: 'p' },
    c1: { color: 'w', type: 'r' },
    c2: { color: 'w', type: 'p' },
    c3: null,
    c4: null,
    c5: null,
    c6: null,
    c7: { color: 'b', type: 'p' },
    c8: { color: 'b', type: 'r' },
    d1: { color: 'w', type: 'n' },
    d2: null,
    d3: { color: 'w', type: 'p' },
    d4: null,
    d5: null,
    d6: null,
    d7: { color: 'b', type: 'p' },
    d8: null,
    d9: { color: 'b', type: 'n' },
    e1: { color: 'w', type: 'q' },
    e10: { color: 'b', type: 'q' },
    e2: null,
    e3: null,
    e4: { color: 'w', type: 'p' },
    e5: null,
    e6: null,
    e7: { color: 'b', type: 'p' },
    e8: null,
    e9: null,
    f1: { color: 'w', type: 'b' },
    f10: { color: 'b', type: 'b' },
    f11: { color: 'b', type: 'b' },
    f2: null,
    f3: { color: 'w', type: 'b' },
    f4: null,
    f5: { color: 'w', type: 'p' },
    f6: null,
    f7: { color: 'b', type: 'p' },
    f8: null,
    f9: { color: 'b', type: 'b' },
    g1: { color: 'w', type: 'k' },
    g10: { color: 'b', type: 'k' },
    g2: null,
    g3: null,
    g4: { color: 'w', type: 'p' },
    g5: null,
    g6: null,
    g7: { color: 'b', type: 'p' },
    g8: null,
    g9: null,
    h1: { color: 'w', type: 'n' },
    h2: null,
    h3: { color: 'w', type: 'p' },
    h4: null,
    h5: null,
    h6: null,
    h7: { color: 'b', type: 'p' },
    h8: null,
    h9: { color: 'b', type: 'n' },
    i1: { color: 'w', type: 'r' },
    i2: { color: 'w', type: 'p' },
    i3: null,
    i4: null,
    i5: { color: 'w', type: 'b' },
    i6: null,
    i7: { color: 'b', type: 'p' },
    i8: { color: 'b', type: 'r' },
    j1: { color: 'w', type: 'p' },
    j2: null,
    j3: null,
    j4: null,
    j5: null,
    j6: null,
    j7: { color: 'b', type: 'p' },
    k1: null,
    k2: null,
    k3: null,
    k4: null,
    k5: null,
    k6: null,
  })
})

test('moves pawn previous issue', () => {
  const chess = new HexChess()
  chess.move('g6')
  chess.move('fxg6')
  chess.move('f7')
  chess.move('d5')
  expect(chess.moves('e7').sort()).toEqual(['e5', 'e6', 'f7'].sort())
})
