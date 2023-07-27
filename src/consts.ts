import { Vector } from 'vector2d'

export const WHITE = 'w'
export const BLACK = 'b'

export const PAWN = 'p'
export const KNIGHT = 'n'
export const BISHOP = 'b'
export const ROOK = 'r'
export const QUEEN = 'q'
export const KING = 'k'

export type Color = 'w' | 'b'
export type PieceSymbol = 'p' | 'n' | 'b' | 'r' | 'q' | 'k'
export type MoveSymbol = 'm' | 'c'

// prettier-ignore
export type Hexagon =
                  'f11' |
              'e10' | 'g10' |
          'd9'  | 'f10' | 'h9' |
      'c8'  | 'e9'  | 'g9' | 'i8' |
    'b7'  | 'd8'  | 'f9' | 'h8' | 'j7' |
'a6'  | 'c7'  | 'e8' | 'g8' | 'i7' | 'k6' |
    'b6'  | 'd7'  | 'f8' | 'h7' | 'j6' |
'a5'  | 'c6'  | 'e7' | 'g7' | 'i6' | 'k5' |
    'b5'  | 'd6'  | 'f7' | 'h6' | 'j5' |
'a4'  | 'c5'  | 'e6' | 'g6' | 'i5' | 'k4' |
    'b4'  | 'd5'  | 'f6' | 'h5' | 'j4' |
'a3'  | 'c4'  | 'e5' | 'g5' | 'i4' | 'k3' |
    'b3'  | 'd4'  | 'f5' | 'h4' | 'j3' |
'a2'  | 'c3'  | 'e4' | 'g4' | 'i3' | 'k2' |
    'b2'  | 'd3'  | 'f4' | 'h3' | 'j2' |
'a1'  | 'c2'  | 'e3' | 'g3' | 'i2' | 'k1' |
    'b1'  | 'd2'  | 'f3' | 'h2' | 'j1' |
        'c1'  | 'e2'  | 'g2' | 'i1' |
            'd1'  | 'f2'  | 'h1' |
                'e1'  | 'g1'  |
                  'f1'

export const DEFAULT_POSITION =
  '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/K2P2p2k/N1P3p1n/RP4pr/P5p/6 w - 0 1'

export type Piece = {
  color: Color
  type: PieceSymbol
}

export interface History {
  move: Move
  kings: Record<Color, Hexagon | null>
  turn: Color
  epHex: Hexagon | null
  halfMoves: number
  moveNumber: number
}

export type Move = {
  color: Color
  from: Hexagon
  to: Hexagon
  piece: PieceSymbol
  captured?: PieceSymbol
  promotion?: PieceSymbol
  flags: string
  san: string
  lan: string
  before: string
  after: string
}

// prettier-ignore
export const HEXAGONS: Hexagon[] = [
               'f11',
            'e10', 'g10',
         'd9', 'f10', 'h9',
      'c8', 'e9', 'g9', 'i8',
   'b7', 'd8', 'f9', 'h8', 'j7',
'a6', 'c7', 'e8', 'g8', 'i7', 'k6',
   'b6', 'd7', 'f8', 'h7', 'j6',
'a5', 'c6', 'e7', 'g7', 'i6', 'k5',
   'b5', 'd6', 'f7', 'h6', 'j5',
'a4', 'c5', 'e6', 'g6', 'i5', 'k4',
   'b4', 'd5', 'f6', 'h5', 'j4',
'a3', 'c4', 'e5', 'g5', 'i4', 'k3',
   'b3', 'd4', 'f5', 'h4', 'j3',
'a2', 'c3', 'e4', 'g4', 'i3', 'k2',
   'b2', 'd3', 'f4', 'h3', 'j2',
'a1', 'c2', 'e3', 'g3', 'i2', 'k1',
   'b1', 'd2', 'f3', 'h2', 'j1',
      'c1', 'e2', 'g2', 'i1',
         'd1', 'f2', 'h1',
            'e1', 'g1',
               'f1',
]

/*
 * NOTES ABOUT COORDINATE MOVE GENERATION
 * ----------------------------------------------------------------------------
 * A coordinate is a 2 dimensional location on the hexagonal board as follows:
 *
 * y
 * |
 * \
 *  x
 *
 * The origin hexagon is f6
 */

export const MOVES = new Map<PieceSymbol, Array<Vector>>([
  [
    'p',
    [
      new Vector(0, 1), // w-standard
      new Vector(0, 2), // w-initial
      new Vector(1, 1), // w-attack-right+ep
      new Vector(-1, 0), // w-attack-left+ep
      new Vector(0, -1), // b-standard
      new Vector(0, -2), // b-initial
      new Vector(-1, -1), // b-attack-right+ep
      new Vector(1, 0), // b-attack-left+ep
    ],
  ],
  [
    'n',
    [
      new Vector(1, 3), // t-right
      new Vector(-1, 2), // t-left
      new Vector(2, 3), // tr-right
      new Vector(3, 2), // tr-left
      new Vector(-2, 1), // tl-right
      new Vector(-3, -1), // tl-left
      new Vector(-1, -3), // b-right
      new Vector(1, -2), // b-left
      new Vector(2, -1), // br-right
      new Vector(3, 1), // br-left
      new Vector(-3, -2), // bl-right
      new Vector(-2, -3), // bl-left
    ],
  ],
  [
    'b',
    [
      new Vector(1, 2), // trd
      new Vector(-1, 1), // tld
      new Vector(2, 1), // rd
      new Vector(-2, -1), // ld
      new Vector(1, -1), // brd
      new Vector(-1, -2), // bld
    ],
  ],
  [
    'r',
    [
      new Vector(0, 1), // t
      new Vector(1, 1), // tr
      new Vector(-1, 0), // tl
      new Vector(0, -1), // b
      new Vector(1, 0), // br
      new Vector(-1, -1), // bl
    ],
  ],
  [
    'q',
    [
      new Vector(1, 2), // trd
      new Vector(-1, 1), // tld
      new Vector(2, 1), // rd
      new Vector(-2, -1), // ld
      new Vector(1, -1), // brd
      new Vector(-1, -2), // bld
      new Vector(0, 1), // t
      new Vector(1, 1), // tr
      new Vector(-1, 0), // tl
      new Vector(0, -1), // b
      new Vector(1, 0), // br
      new Vector(-1, -1), // bl
    ],
  ],
  [
    'k',
    [
      new Vector(1, 2), // trd
      new Vector(-1, 1), // tld
      new Vector(2, 1), // rd
      new Vector(-2, -1), // ld
      new Vector(1, -1), // brd
      new Vector(-1, -2), // bld
      new Vector(0, 1), // t
      new Vector(1, 1), // tr
      new Vector(-1, 0), // tl
      new Vector(0, -1), // b
      new Vector(1, 0), // br
      new Vector(-1, -1), // bl
    ],
  ],
])

export const EMPTY_BOARD: Record<Hexagon, Piece | null> = {
  f11: null,
  e10: null,
  g10: null,
  d9: null,
  f10: null,
  h9: null,
  c8: null,
  e9: null,
  g9: null,
  i8: null,
  b7: null,
  d8: null,
  f9: null,
  h8: null,
  j7: null,
  a6: null,
  c7: null,
  e8: null,
  g8: null,
  i7: null,
  k6: null,
  b6: null,
  d7: null,
  f8: null,
  h7: null,
  j6: null,
  a5: null,
  c6: null,
  e7: null,
  g7: null,
  i6: null,
  k5: null,
  b5: null,
  d6: null,
  f7: null,
  h6: null,
  j5: null,
  a4: null,
  c5: null,
  e6: null,
  g6: null,
  i5: null,
  k4: null,
  b4: null,
  d5: null,
  f6: null,
  h5: null,
  j4: null,
  a3: null,
  c4: null,
  e5: null,
  g5: null,
  i4: null,
  k3: null,
  b3: null,
  d4: null,
  f5: null,
  h4: null,
  j3: null,
  a2: null,
  c3: null,
  e4: null,
  g4: null,
  i3: null,
  k2: null,
  b2: null,
  d3: null,
  f4: null,
  h3: null,
  j2: null,
  a1: null,
  c2: null,
  e3: null,
  g3: null,
  i2: null,
  k1: null,
  b1: null,
  d2: null,
  f3: null,
  h2: null,
  j1: null,
  c1: null,
  e2: null,
  g2: null,
  i1: null,
  d1: null,
  f2: null,
  h1: null,
  e1: null,
  g1: null,
  f1: null
}