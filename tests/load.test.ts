import { BLACK, Hexagon, PAWN, Piece, WHITE } from '../src/consts'
import { HexChess } from '../src/hexchess'

test('load blank', () => {
  const fen = '6/7/8/9/10/11/10/9/8/7/6 w - 0 1'
  const result = new HexChess(fen)
  expect(result.board()).toEqual(new Map<Hexagon, Piece>())
})

test('load origin black pawn', () => {
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
  expect(result.board()).toEqual(expectedBoard)
})

test('load origin white pawn', () => {
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
  expect(result.board()).toEqual(expectedBoard)
})

test('load white move', () => {
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
  expect(result.board()).toEqual(expectedBoard)
})
