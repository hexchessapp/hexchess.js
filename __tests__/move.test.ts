import { BLACK, HexChess, QUEEN, WHITE } from '../src/hexchess'

test('move knight', () => {
  const chess = new HexChess()
  chess.move({ from: 'h1', to: 'f4' })
  expect(chess.get('h1')).toEqual(null)
  expect(chess.get('f4')).toEqual({ color: 'w', type: 'n' })
})

test('move knight illegal', () => {
  const chess = new HexChess()
  expect(() => chess.move({ from: 'h1', to: 'g4' })).toThrow()
})

test('move bishop', () => {
  const chess = new HexChess()
  chess.move({ from: 'f2', to: 'b6' })
  expect(chess.get('f2')).toEqual(null)
  expect(chess.get('b6')).toEqual({ color: 'w', type: 'b' })
})

test('move bishop illegal', () => {
  const chess = new HexChess()
  expect(() => chess.move({ from: 'f2', to: 'a6' })).toThrow()
})

test('move rook', () => {
  const chess = new HexChess()
  chess.move({ from: 'c1', to: 'f4' })
  expect(chess.get('c1')).toEqual(null)
  expect(chess.get('f4')).toEqual({ color: 'w', type: 'r' })
})

test('move rook illegal', () => {
  const chess = new HexChess()
  expect(() => chess.move({ from: 'c1', to: 'k4' })).toThrow()
})

test('move white pawn', () => {
  const chess = new HexChess()
  chess.move({ from: 'g4', to: 'g5' })
  expect(chess.get('g4')).toEqual(null)
  expect(chess.get('g5')).toEqual({ color: 'w', type: 'p' })
})

test('move white pawn double', () => {
  const chess = new HexChess()
  chess.move({ from: 'g4', to: 'g6' })
  expect(chess.get('g4')).toEqual(null)
  expect(chess.get('g6')).toEqual({ color: 'w', type: 'p' })
})

test('move black pawn', () => {
  const chess = new HexChess()
  chess.move({ from: 'g4', to: 'g5' })
  chess.move({ from: 'g7', to: 'g6' })
  expect(chess.get('g7')).toEqual(null)
  expect(chess.get('g6')).toEqual({ color: 'b', type: 'p' })
})

test('move black pawn double', () => {
  const chess = new HexChess()
  chess.move({ from: 'e4', to: 'e5' })
  chess.move({ from: 'g7', to: 'g5' })
  expect(chess.get('g7')).toEqual(null)
  expect(chess.get('g5')).toEqual({ color: 'b', type: 'p' })
})

test('move changes values', () => {
  const chess = new HexChess()
  expect(chess.turn()).toEqual(WHITE)
  expect(chess.moveNumber()).toEqual(1)
  chess.move({ from: 'g4', to: 'g5' })
  expect(chess.turn()).toEqual(BLACK)
  expect(chess.moveNumber()).toEqual(1)
  chess.move({ from: 'f10', to: 'i4' })
  expect(chess.turn()).toEqual(WHITE)
  expect(chess.moveNumber()).toEqual(2)
})

test('move ep', () => {
  const chess = new HexChess()
  chess.move({ from: 'f5', to: 'f6' })
  chess.move({ from: 'g7', to: 'g5' })
  chess.move({ from: 'f6', to: 'g6' })
  expect(chess.fen()).toEqual(
    '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB3p1bbb/K2P1P3k/N1P3p1n/RP4pr/P5p/6 b - 3 2'
  )
})

test('move promotion', () => {
  const chess = new HexChess()
  chess.move({ from: 'c2', to: 'c4' })
  chess.move({ from: 'f11', to: 'g9' })
  chess.move({ from: 'c4', to: 'c5' })
  chess.move({ from: 'g9', to: 'f11' })
  chess.move({ from: 'c5', to: 'c6' })
  chess.move({ from: 'b7', to: 'b6' })
  chess.move({ from: 'c6', to: 'b6' })
  chess.move({ from: 'f11', to: 'g9' })
  chess.move({ from: 'b6', to: 'b7', promotion: 'q' })
  expect(chess.get('b7')).toEqual({ color: WHITE, type: QUEEN })
})

test('move premature promotion', () => {
  const chess = new HexChess()
  expect(() => chess.move({ from: 'c2', to: 'c4', promotion: 'q' })).toThrow()
})

test('move pgn', () => {
  const chess = new HexChess()
  const moves = [
    'b3',
    'j5',
    'b4',
    'j4',
    'b5',
    'j3',
    'b6',
    'j2',
    'bxc7',
    'jxi2',
    'cxb7Q',
  ]
  moves.forEach((move) => {
    chess.move(move)
  })
})
