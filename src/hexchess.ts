import { Vector } from 'vector2d'

/**
 * @license
 * Copyright (c) 2023, Owain Williams (owain.williams.213@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

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

interface History {
  move: Move
  turn: Color
  epHexagon: number
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

export class HexChess {
  private _board: Map<Hexagon, Piece> = new Map()
  private _moves: Map<Hexagon, MoveSymbol> = new Map()
  private _turn: Color = WHITE
  private _header: Record<string, string> = {}
  private _kings: Map<Color, Hexagon> = new Map()
  private _epHexagon: Hexagon | undefined = undefined
  private _halfMoves = 0
  private _moveNumber = 0
  private _history: History[] = []
  private _positionCounts: Record<string, number> = {}

  constructor(fen = DEFAULT_POSITION) {
    this.load(fen)
  }

  clear(keepHeaders = false) {
    this._board = new Map()
    this._moves = new Map()
    this._kings = new Map()
    this._turn = WHITE
    this._epHexagon = undefined
    this._halfMoves = 0
    this._moveNumber = 1
    this._history = []
    this._header = keepHeaders ? this._header : {}
  }

  move(from: Hexagon, to: Hexagon) {
    const legalMoves = this._possibleMoves(from)
    const fromVector = this._hexagonToVector(to)
    const diff = fromVector.clone().subtract(this._hexagonToVector(from)) as Vector
    const piece = this._board.get(from)
    if (piece == undefined) {
      return
    }
    if (!legalMoves.includes(diff)) {
      return
    }
    this._put(to, piece)
    this._board.delete(from)
    this._epHexagon = undefined
    if (piece.type == PAWN && diff.y == 2) {
      this._epHexagon = this._vectorToHexagon(fromVector.clone().add(new Vector(0, piece.color == WHITE ? 1 : -1)) as Vector)
    }
  }

  load(fen: string) {
    const err = this._validateFen(fen)
    if (err != undefined) {
      console.log(err)
    }

    const args = fen.split(" ")
    const positions = args[0].split("/")
    const turn = args[1]
    const ep = args[2]
    const halfMoves = args[3]
    const moveNumber = args[4]

    this._turn = turn as Color
    this._epHexagon = ep == '-' ? undefined : ep as Hexagon
    this._halfMoves = +halfMoves
    this._moveNumber = +moveNumber

    for (let file = 0; file < positions.length; file++) {
      const fileData = positions[file]
      const fileLetter = String.fromCharCode(file + 97)
      let rank = 0
      for (let item = 0; item < fileData.length; item++) {
        const itemS = fileData.charAt(item)
        if (isNaN(+itemS)) {
          rank++
          const hexagon = fileLetter + rank as Hexagon
          this._put(
            hexagon,
            {
              color: itemS == itemS.toUpperCase() ? WHITE : BLACK,
              type: itemS.toLowerCase() as PieceSymbol
            }
          )
          if (itemS.toLowerCase() == KING) {
            this._kings.set(itemS == itemS.toUpperCase() ? WHITE : BLACK, hexagon)
          }
        } else {
          rank += +itemS
        }
      }
    }

    return
  }

  ascii(): string {
    let s = ''
    const MAX_LENGTH = 52
    // each minor row

    let currentHexagon = 0
    for (let i = 10; i >= -10; i--) {
      let cols = 11 - Math.abs(i)
      const q: Array<string> = []
      if (cols % 2 == 0 && cols > 6) {
        cols = 6
      }
      if (cols % 2 == 1 && cols > 6) {
        cols = 5
      }
      for (let j = 0; j < cols; j++) {
        const piece = this._board.get(HEXAGONS[currentHexagon])
        const move = this._moves.get(HEXAGONS[currentHexagon])
        if (move != undefined) {
          q.push(move)
        } else if (piece != undefined) {
          q.push(piece.color == WHITE ? piece.type.toUpperCase() : piece.type)
        } else {
          q.push('.')
        }
        currentHexagon++
      }
      let l = q.join('         ')
      const padding = MAX_LENGTH - l.length + 1
      l = ' '.repeat(padding / 2) + l + ' '.repeat(padding / 2)
      s += '|' + l + '|\n'
    }
    s = '+' + '-'.repeat(MAX_LENGTH + 1) + '+\n' + s
    s += '+' + '-'.repeat(MAX_LENGTH + 1) + '+'
    return s
  }

  /*
   * 
   * helpers
   */

  private _validateFen(fen: string) {
    // 1st criterion: 5 space-seperated fields?
    const tokens = fen.split(/\s+/)
    if (tokens.length !== 5) {
      return new Error('Invalid FEN: must contain five space-delimited fields')
    }

    // 2nd criterion: move number field is a integer value > 0?
    const moveNumber = parseInt(tokens[4], 10)
    if (isNaN(moveNumber) || moveNumber <= 0) {
      return new Error('Invalid FEN: move number must be a positive integer')
    }

    // 3rd criterion: half move counter is an integer >= 0?
    const halfMoves = parseInt(tokens[3], 10)
    if (isNaN(halfMoves) || halfMoves < 0) {
      return new Error('Invalid FEN: half move counter number must be a non-negative integer')
    }

    // 4th criterion: 4th field is a valid e.p.-string?
    if (!/^(-|[bcdefghijk][7]|b1|c2|d3|e4|f5|g4|h3|i2|j1|)$/.test(tokens[2])) {
      return new Error('Invalid FEN: en-passant square is invalid' )
    }

    // 5th criterion: 2nd field is "w" (white) or "b" (black)?
    if (!/^(w|b)$/.test(tokens[1])) {
      return new Error('Invalid FEN: side-to-move is invalid')
    }

    // 6th criterion: 1st field contains 8 rows?
    const rows = tokens[0].split('/')
    if (rows.length !== 11) {
      return new Error("Invalid FEN: piece data does not contain 11 '/'-delimited rows")
    }

    // 7th criterion: every row is valid?
    const ROW_SIZES = [6,7,8,9,10,11,10,9,8,7,6]
    for (let i = 0; i < rows.length; i++) {
      // check for right sum of fields AND not two numbers in succession
      let sumFields = 0
      let previousWasNumber = false

      for (let k = 0; k < rows[i].length; k++) {
        if (!isNaN(+rows[i][k])) {
          if (previousWasNumber) {
            return new Error('Invalid FEN: piece data is invalid (consecutive number)')
          }
          sumFields += parseInt(rows[i][k], 10)
          previousWasNumber = true
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return new Error('Invalid FEN: piece data is invalid (invalid piece)')
          }
          sumFields += 1
          previousWasNumber = false
        }
      }
      if (sumFields !== ROW_SIZES[i]) {
        return new Error('Invalid FEN: piece data is invalid (too many squares in rank)')
      }
    }

    // 8th criterion: does chess position contain exact two kings?
    const kings = [
      { color: 'white', regex: /K/g },
      { color: 'black', regex: /k/g },
    ]

    for (const { color, regex } of kings) {
      if (!regex.test(tokens[0])) {
        return new Error(`Invalid FEN: missing ${color} king`)
      }

      if ((tokens[0].match(regex) || []).length > 1) {
        return new Error(`Invalid FEN: too many ${color} kings`)
      }
    }

    return
  }

  private _put(hexagon: Hexagon, piece: Piece) {
    if (piece.type == KING) {
      this._kings.set(piece.color, hexagon)
    }
    this._board.set(hexagon, piece)
  }

  private _drawTheoreticalMoves(hexagon: Hexagon): string {
    const theoreticals = this._possibleMoves(hexagon)
    theoreticals.forEach(move => {
      const final = this._hexagonToVector(hexagon).add(move)
      if (this._board.get(this._vectorToHexagon(final)) != undefined) {
        this._moves.set(this._vectorToHexagon(final), 'c')
        return
      }
      this._moves.set(this._vectorToHexagon(final), 'm')
    });
    const ascii = this.ascii()
    this._moves.clear()
    return ascii
  }

  private _possibleMoves(hexagon: Hexagon): Array<Vector> {
    const position = this._hexagonToVector(hexagon)
    const piece = this._board.get(hexagon)
    if (piece == undefined) {
      return []
    }
    const validMoves = new Array<Vector>()

    switch (piece?.type) {
      case 'p':
        MOVES.get(piece.type)?.forEach(move => {
          // check on board

          if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
            return
          }

          // check rank direction for color
          let rankDifference = move.y
          if (move.x > 0) {
            rankDifference -= move.x
          }

          if (rankDifference < 0 && piece.color == WHITE) {
            return
          }
          if (rankDifference >= 0 && piece.color == BLACK) {
            return
          }

          // isStandardBlocked
          if (move.clone().abs().equals(new Vector(0, 1))) {
            const blockingPiece = this._pieceInDirection(position, move)
            if (blockingPiece != undefined) {
              return false
            }
          } else if (Math.abs(move.y) != 2) { // diag take
            const blockingPiece = this._pieceInDirection(position, move)
            if (
              (blockingPiece == undefined ||
                blockingPiece.color == piece.color) &&
              hexagon != this._epHexagon
            ) {
              return false
            }
          }

          // double move logic
          if (Math.abs(move.y) == 2) {
            if (
              piece.color == WHITE &&
              Math.abs(+hexagon.substring(1) - 5) !=
              - Math.abs(hexagon.substring(0, 1).charCodeAt(0) - 102)
            ) {
              return
            }
            if (piece.color == BLACK && +hexagon.substring(1) != 7) { // rank 7
              return
            }

            const blockingPiece1 = this._pieceInDirection(position, move.clone().divideByScalar(2) as Vector)
            const blockingPiece2 = this._pieceInDirection(position, move)
            if (
              blockingPiece1 != undefined ||
              blockingPiece2 != undefined
            ) {
              return false
            }
          }

          validMoves.push(move)
        });
        break;

      case 'n':
        MOVES.get(piece.type)?.forEach(move => {
          if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
            return
          }

          const blockingPiece = this._pieceInDirection(position, move)
          if (blockingPiece != undefined && blockingPiece.color == piece.color) {
            return false
          }

          validMoves.push(move)
        });
        break;

      case 'b':
        MOVES.get(piece.type)?.forEach(move => {
          let i = 1;
          while (true) {
            const multiple = move.clone().multiplyByScalar(i) as Vector
            const blockingPiece = this._pieceInDirection(position, multiple)
            if (blockingPiece != undefined) {
              if (blockingPiece.color != piece.color) {
                validMoves.push(multiple)
              }
              return false
            }
            if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
              return
            }
            validMoves.push(multiple)
            i++;
          }
        });
        break;

      case 'r':
        MOVES.get(piece.type)?.forEach(move => {
          let i = 1;
          while (true) {
            const multiple = move.clone().multiplyByScalar(i) as Vector
            const blockingPiece = this._pieceInDirection(position, multiple)
            if (blockingPiece != undefined) {
              if (blockingPiece.color != piece.color) {
                validMoves.push(multiple)
              }
              return false
            }
            if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
              return
            }
            validMoves.push(multiple)
            i++;
          }
        });
        break;

      case 'q':
        MOVES.get(piece.type)?.forEach(move => {
          let i = 1;
          while (true) {
            const multiple = move.clone().multiplyByScalar(i) as Vector
            const blockingPiece = this._pieceInDirection(position, multiple)
            if (blockingPiece != undefined) {
              if (blockingPiece.color != piece.color) {
                validMoves.push(multiple)
              }
              return false
            }
            if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
              return
            }
            validMoves.push(multiple)
            i++;
          }
        });
        break;

      case 'k':
        MOVES.get(piece.type)?.forEach(move => {
          if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
            return
          }

          const blockingPiece = this._pieceInDirection(position, move)
          if (blockingPiece != undefined) {
            if (blockingPiece.color != piece.color) {
              validMoves.push(move)
            }
            return false
          }

          validMoves.push(move)
        });
        break;
    }

    // checking if moves cause check
    const nonCheckValidMoves: Array<Vector> = []
    validMoves.forEach(move => {
      const dummyBoard = this._board
      const dest = this._vectorToHexagon(position.clone().add(move) as Vector)
      dummyBoard.set(dest, piece)
      dummyBoard.delete(hexagon)
      if (!this._kingInCheck(piece.color, dummyBoard)) {
        nonCheckValidMoves.push(move)
      }
    });

    return nonCheckValidMoves
  }

  private _kingInCheck(color: Color, board = this._board): boolean {
    let kingInCheck = false

    const kingHexagon = this._kings.get(color) ?? 'a1'
    const kingPosition = this._hexagonToVector(kingHexagon)

    // checking diagonals
    MOVES.get(BISHOP)?.forEach(move => {
      let i = 1;
      while (true) {
        const multiple = move.clone().multiplyByScalar(i) as Vector
        const blockingPiece = this._pieceInDirection(kingPosition, multiple, board)
        if (blockingPiece != undefined) {
          if (
            blockingPiece.color != color &&
            (
              blockingPiece.type == 'q' ||
              blockingPiece.type == 'b'
            )
          ) {
            kingInCheck = true
            return
          }
          return
        }
        if (!this._isWithinBounds(kingPosition.clone().add(multiple) as Vector)) {
          return
        }
        i++;
      }
    });

    // checking diagonals
    MOVES.get(ROOK)?.forEach(move => {
      let i = 1;
      while (true) {
        const multiple = move.clone().multiplyByScalar(i) as Vector
        const blockingPiece = this._pieceInDirection(kingPosition, multiple, board)
        if (blockingPiece != undefined) {
          if (
            blockingPiece.color != color &&
            (
              blockingPiece.type == 'q' ||
              blockingPiece.type == 'r'
            )
          ) {
            kingInCheck = true
            return
          }
          return
        }
        if (!this._isWithinBounds(kingPosition.clone().add(multiple) as Vector)) {
          return
        }
        i++;
      }
    });

    // checking knight
    MOVES.get(KNIGHT)?.forEach(move => {
      if (!this._isWithinBounds(kingPosition.clone().add(move) as Vector)) {
        return
      }

      const blockingPiece = this._pieceInDirection(kingPosition, move, board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color != color &&
        blockingPiece.type == ROOK
      ) {
        kingInCheck = true
      }
    });

    // checking pawn
    let blockingPiece
    if (color == WHITE) {
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(1, 1), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == BLACK &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(-1, 0), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == BLACK &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
    }
    if (color == BLACK) {
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(1, 0), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == WHITE &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(-1, -1), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == WHITE &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
    }

    return kingInCheck
  }

  private _pieceInDirection(from: Vector, to: Vector, board = this._board): Piece | undefined {
    const blockingPosition = from.clone().add(to) as Vector
    const blockingHexagon = this._vectorToHexagon(blockingPosition)
    return this._board.get(blockingHexagon)
  }

  private _vectorToHexagon(vector: Vector): Hexagon {
    const file = String.fromCharCode(vector.x + 102)
    let rank = vector.y + 6

    if (vector.x > 0) {
      rank -= vector.x
    }

    return file + rank as Hexagon
  }

  private _hexagonToVector(hexagon: Hexagon): Vector {
    const fileOffset = hexagon.substring(0, 1).charCodeAt(0) - 102
    const rankOffset = +hexagon.substring(1) - 6

    const vector = new Vector(fileOffset, rankOffset)

    if (fileOffset > 0) {
      vector.y += fileOffset
    }

    return vector
  }

  private _isWithinBounds(coord: Vector): boolean {
    if (
      Math.abs(coord.x) > 5 ||
      Math.abs(coord.y) > 5 ||
      Math.abs(coord.x - coord.y) > 5
    ) {
      return false
    }

    return true
  }
}
