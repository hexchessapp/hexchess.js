import { HexChess } from '../src/hexchess'

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
  chess.move('g7', 'g6')
  expect(chess.get('g7')).toEqual(null)
  expect(chess.get('g6')).toEqual({ color: 'b', type: 'p' })
})

test('move black pawn double', () => {
  const chess = new HexChess()
  chess.move('g7', 'g5')
  expect(chess.get('g7')).toEqual(null)
  expect(chess.get('g5')).toEqual({ color: 'b', type: 'p' })
})
