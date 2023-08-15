import { BLACK, HexChess, QUEEN, WHITE } from '../src/hexchess'

test('move knight', () => {
  const chess = new HexChess()
  chess.move('h1', 'f4')
  expect(chess.get('h1')).toEqual(null)
  expect(chess.get('f4')).toEqual({ color: 'w', type: 'n' })
})

test('move knight illegal', () => {
  const chess = new HexChess()
  chess.move('h1', 'g4')
  expect(chess.get('h1')).toEqual({ color: 'w', type: 'n' })
  expect(chess.get('g4')).toEqual({ color: 'w', type: 'p' })
})

test('move bishop', () => {
  const chess = new HexChess()
  chess.move('f2', 'b6')
  expect(chess.get('f2')).toEqual(null)
  expect(chess.get('b6')).toEqual({ color: 'w', type: 'b' })
})

test('move bishop illegal', () => {
  const chess = new HexChess()
  chess.move('f2', 'a6')
  expect(chess.get('f2')).toEqual({ color: 'w', type: 'b' })
  expect(chess.get('a6')).toEqual(null)
})

test('move rook', () => {
  const chess = new HexChess()
  chess.move('c1', 'f4')
  expect(chess.get('c1')).toEqual(null)
  expect(chess.get('f4')).toEqual({ color: 'w', type: 'r' })
})

test('move rook illegal', () => {
  const chess = new HexChess()
  chess.move('c1', 'k4')
  expect(chess.get('c1')).toEqual({ color: 'w', type: 'r' })
  expect(chess.get('k4')).toEqual(null)
})

test('move white pawn', () => {
  const chess = new HexChess()
  chess.move('g4', 'g5')
  expect(chess.get('g4')).toEqual(null)
  expect(chess.get('g5')).toEqual({ color: 'w', type: 'p' })
})

test('move white pawn double', () => {
  const chess = new HexChess()
  chess.move('g4', 'g6')
  expect(chess.get('g4')).toEqual(null)
  expect(chess.get('g6')).toEqual({ color: 'w', type: 'p' })
})

test('move black pawn', () => {
  const chess = new HexChess()
  chess.move('g4', 'g5')
  chess.move('g7', 'g6')
  expect(chess.get('g7')).toEqual(null)
  expect(chess.get('g6')).toEqual({ color: 'b', type: 'p' })
})

test('move black pawn double', () => {
  const chess = new HexChess()
  chess.move('e4', 'e5')
  chess.move('g7', 'g5')
  expect(chess.get('g7')).toEqual(null)
  expect(chess.get('g5')).toEqual({ color: 'b', type: 'p' })
})

test('move changes values', () => {
  const chess = new HexChess()
  expect(chess.turn()).toEqual(WHITE)
  expect(chess.moveNumber()).toEqual(1)
  chess.move('g4', 'g5')
  expect(chess.turn()).toEqual(BLACK)
  expect(chess.moveNumber()).toEqual(1)
  chess.move('f10', 'i4')
  expect(chess.turn()).toEqual(WHITE)
  expect(chess.moveNumber()).toEqual(2)
})

test('move ep', () => {
  const chess = new HexChess()
  chess.move('f5', 'f6')
  chess.move('g7', 'g5')
  chess.move('f6', 'g6')
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB3p1bbb/K2P1P3k/N1P3p1n/RP4pr/P5p/6 b - 3 2'
  )
})

test('move promotion', () => {
  const chess = new HexChess()
  chess.move('c2', 'c4')
  chess.move('f11', 'g9')
  chess.move('c4', 'c5')
  chess.move('g9', 'f11')
  chess.move('c5', 'c6')
  chess.move('b7', 'b6')
  chess.move('c6', 'b6')
  chess.move('f11', 'g9')
  chess.move('b6', 'b7', 'q')
  expect(chess.get('b7')).toEqual({ color: WHITE, type: QUEEN })
})

test('move premature promotion', () => {
  const chess = new HexChess()
  chess.move('c2', 'c4', 'q')
  expect(chess.history().length).toEqual(0)
})
