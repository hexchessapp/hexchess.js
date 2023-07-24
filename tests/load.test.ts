import { BLACK, Hexagon, PAWN, Piece, WHITE } from '../src/consts'
import { HexChess } from '../src/hexchess'

test('fen blank', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  expect(result.getBoard()).toEqual(new Map<Hexagon, Piece>())
})

test('fen origin black pawn', () => {
  const fen = '6/7/8/9/10/5p5/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  const expectedBoard: Map<Hexagon, Piece> = new Map([
    [
      'f6',
      {
        color: BLACK,
        type: PAWN,
      },
    ],
  ])
  expect(result.getBoard()).toEqual(expectedBoard)
})

test('fen origin white pawn', () => {
  const fen = '6/7/8/9/10/5P5/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  const expectedBoard: Map<Hexagon, Piece> = new Map([
    [
      'f6',
      {
        color: WHITE,
        type: PAWN,
      },
    ],
  ])
  expect(result.getBoard()).toEqual(expectedBoard)
})

test('fen white move', () => {
  const fen = '6/7/8/9/10/5P5/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  const expectedBoard: Map<Hexagon, Piece> = new Map([
    [
      'f6',
      {
        color: WHITE,
        type: PAWN,
      },
    ],
  ])
  expect(result.getBoard()).toEqual(expectedBoard)
})

test('fen white move', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  const expectedMove = WHITE
  expect(result.getTurn()).toEqual(expectedMove)
})

test('fen black move', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 b - 0 1'
  const result = new HexChess(fen)
  const expectedMove = BLACK
  expect(result.getTurn()).toEqual(expectedMove)
})

test('fen epsquare set', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w a1 0 1'
  const result = new HexChess(fen)
  const expectedEp = 'a1'
  expect(result.getEpHexagon()).toEqual(expectedEp)
})

test('fen epsquare null', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  const expectedEp = undefined
  expect(result.getEpHexagon()).toEqual(expectedEp)
})

test('fen halfmoves', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w - 6 1'
  const result = new HexChess(fen)
  expect(result.getHalfMoves()).toEqual(6)
})

test('fen fullmoves', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w - 0 10'
  const result = new HexChess(fen)
  expect(result.getMoveNumber()).toEqual(10)
})
