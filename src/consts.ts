import { Vector } from "vector2d"

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
  '6/P5p/RP4pr/N1P3p1n/Q2P2p2q/BBB1P1p1bbb/Q2P2p2q/N1P3p1n/RP4pr/P5p/6 w - 0 1'

export type Piece = {
  color: Color
  type: PieceSymbol
}

export type Move = {
  color: Color
  from: Hexagon
  to: Hexagon
  piece: PieceSymbol
  captured?: PieceSymbol
  promotion?: PieceSymbol
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
    'p', [
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
    'n', [
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
    'b', [
      new Vector(1, 2), // trd
      new Vector(-1, 1), // tld
      new Vector(2, 1), // rd
      new Vector(-2, -1), // ld
      new Vector(1, -1), // brd
      new Vector(-1, -2), // bld
    ],
  ],
  [
    'r', [
      new Vector(0, 1), // t
      new Vector(1, 1), // tr
      new Vector(-1, 0), // tl
      new Vector(0, -1), // b
      new Vector(1, 0), // br
      new Vector(-1, -1), // bl
    ],
  ],
  [
    'q', [
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
    ]
  ],
  [
    'k', [
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