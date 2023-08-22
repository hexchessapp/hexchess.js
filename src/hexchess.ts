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
export type BoardColor = 'w' | 'g' | 'b'

export const BLACK_EP_HEXAGONS: Hexagon[] = [
  'b6',
  'c6',
  'd6',
  'e6',
  'f6',
  'g6',
  'h6',
  'i6',
  'j6',
]

export const WHITE_EP_HEXAGONS: Hexagon[] = [
  'b2',
  'c3',
  'd4',
  'e5',
  'f6',
  'g5',
  'h4',
  'i3',
  'j2',
]

export const WHITE_PROMOTION_HEXAGONS: Hexagon[] = [
  'a6',
  'b7',
  'c8',
  'd9',
  'e10',
  'f11',
  'g10',
  'h9',
  'i8',
  'j7',
  'k6',
]

export const BLACK_PROMOTION_HEXAGONS: Hexagon[] = [
  'a1',
  'b1',
  'c1',
  'd1',
  'e1',
  'f1',
  'g1',
  'h1',
  'i1',
  'j1',
  'k1',
]

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

export type Move = {
  color: Color
  from: Hexagon
  to: Hexagon
  piece: PieceSymbol
  captured: PieceSymbol | null
  promotion: PieceSymbol | null
  san: string
  before: string
  after: string
}

export type MoveObject = {
  from: Hexagon
  to: Hexagon
  promotion?: PieceSymbol
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

// prettier-ignore
export const emptyBoard = (): Record<Hexagon, Piece | null> => {
  return {
    f11: null, e10: null, g10: null, d9: null, f10: null, h9: null, c8: null,
    e9: null, g9: null, i8: null, b7: null, d8: null, f9: null, h8: null,
    j7: null, a6: null, c7: null, e8: null, g8: null, i7: null, k6: null,
    b6: null, d7: null, f8: null, h7: null, j6: null, a5: null, c6: null,
    e7: null, g7: null, i6: null, k5: null, b5: null, d6: null, f7: null, 
    h6: null, j5: null, a4: null, c5: null, e6: null, g6: null, i5: null,
    k4: null, b4: null, d5: null, f6: null, h5: null, j4: null, a3: null, 
    c4: null, e5: null, g5: null, i4: null, k3: null, b3: null, d4: null,
    f5: null, h4: null, j3: null, a2: null, c3: null, e4: null, g4: null,
    i3: null, k2: null, b2: null, d3: null, f4: null, h3: null, j2: null,
    a1: null, c2: null, e3: null, g3: null, i2: null, k1: null, b1: null,
    d2: null, f3: null, h2: null, j1: null, c1: null, e2: null, g2: null,
    i1: null, d1: null, f2: null, h1: null, e1: null, g1: null, f1: null,
  }
}

export function vectorToHexagon(vector: Vector): Hexagon {
  const file = String.fromCharCode(vector.x + 102)
  let rank = vector.y + 6

  if (vector.x > 0) {
    rank -= vector.x
  }

  return (file + rank) as Hexagon
}

export function hexagonToVector(hexagon: Hexagon): Vector {
  const fileOffset = hexagon.substring(0, 1).charCodeAt(0) - 102
  const rankOffset = +hexagon.substring(1) - 6

  const vector = new Vector(fileOffset, rankOffset)

  if (fileOffset > 0) {
    vector.y += fileOffset
  }

  return vector
}

export function getHexColor(hex: Hexagon): BoardColor {
  const vec = hexagonToVector(hex)
  const hash = (vec.x + vec.y + 1) % 3
  let color: BoardColor = 'b'
  if (hash == 1 || hash == -2) {
    color = 'g'
  }
  if (hash == 2 || hash == -1) {
    color = 'w'
  }
  return color
}

function arrayEquals(a: Array<unknown>, b: Array<unknown>) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  )
}

export function moveToLan(move: Move): string {
  let lan =
    move.piece.toUpperCase() + move.from + (move.captured ? 'x' : '-') + move.to

  if (move.promotion) {
    lan += '=' + move.promotion.toUpperCase()
  }

  return lan
}

export class HexChess {
  private _board: Record<Hexagon, Piece | null> = emptyBoard()
  private _turn: Color = WHITE
  private _kings: Record<Color, Hexagon | null> = {
    w: null,
    b: null,
  }
  private _epHexagon: Hexagon | null = null
  private _halfMoves = 0
  private _moveNumber = 1
  private _history: Move[] = []

  constructor(fen = DEFAULT_POSITION) {
    const err = this.load(fen)
    if (err != null) {
      throw err
    }
  }

  ascii(): string {
    let s = ''
    const MAX_LENGTH = 52

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
        const piece = this.get(HEXAGONS[currentHexagon])
        if (piece != null) {
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

  board(): Record<Hexagon, Piece | null> {
    return this._board
  }

  clear(): void {
    this._board = emptyBoard()
    this._kings = {
      w: null,
      b: null,
    }
    this._turn = WHITE
    this._epHexagon = null
    this._halfMoves = 0
    this._moveNumber = 1
    this._history = []
  }

  fen(): string {
    const turn = this._turn
    const ep = this._epHexagon ? this._epHexagon : '-'
    const halfMoves = this._halfMoves.toString()
    const moveNumber = this._moveNumber.toString()

    const files = new Array<Array<string>>([])
    HEXAGONS.forEach((hex) => {
      const file = hex.substring(0, 1).charCodeAt(0) - 97
      const rank = +hex.substring(1) - 1
      const piece = this._board[hex]
      if (!piece) {
        return
      }
      if (!files[file]) {
        files[file] = []
      }
      files[file][rank] =
        piece.color == WHITE ? piece.type.toUpperCase() : piece.type
    })

    const filesStrings = new Array<string>()
    for (let i = 0; i < 11; i++) {
      let s = ''
      let spaces = 0
      const fileLength = 11 - Math.abs(i - 5)
      for (let j = 0; j < fileLength; j++) {
        if (!files[i] || !files[i][j]) {
          spaces++
          continue
        }
        if (spaces > 0) {
          s += spaces.toString()
          spaces = 0
        }
        s += files[i][j]
      }
      if (spaces > 0) {
        s += spaces.toString()
      }
      filesStrings.push(s)
    }

    return new Array<string>(
      filesStrings.join('/'),
      turn,
      ep,
      halfMoves,
      moveNumber
    ).join(' ')
  }

  get(hex: Hexagon): Piece | null {
    return this._board[hex]
  }

  history(): Move[] {
    return this._history
  }

  inCheck(): boolean {
    const king = this._kings[this._turn]
    if (king == null) {
      return false
    }
    const isInCheck = this.isAttacked(king)
    return isInCheck
  }

  isAttacked(hex: Hexagon): boolean {
    let attacked = false

    const position = hexagonToVector(hex)
    const piece = this.get(hex)
    if (piece == null) {
      return false
    }

    // checking bishop
    MOVES.get(BISHOP)?.forEach((move) => {
      let i = 0
      while (true) {
        i++
        const multiple = move.clone().multiplyByScalar(i) as Vector
        if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
          return
        }
        const blockingPiece = this._pieceInDirection(position, multiple)
        if (blockingPiece == null) {
          continue
        }
        if (blockingPiece.color == piece.color) {
          return
        }
        if (
          blockingPiece.color != piece.color &&
          (blockingPiece.type == QUEEN ||
            blockingPiece.type == BISHOP ||
            (blockingPiece.type == KING && i == 1))
        ) {
          attacked = true
          return
        }
      }
    })

    // checking rook
    MOVES.get(ROOK)?.forEach((move) => {
      let i = 0
      while (true) {
        i++
        const multiple = move.clone().multiplyByScalar(i) as Vector
        if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
          return
        }
        const blockingPiece = this._pieceInDirection(position, multiple)
        if (blockingPiece == null) {
          continue
        }
        if (blockingPiece.color == piece.color) {
          return
        }
        if (
          blockingPiece.color != piece.color &&
          (blockingPiece.type == QUEEN ||
            blockingPiece.type == ROOK ||
            (blockingPiece.type == KING && i == 1))
        ) {
          attacked = true
          return
        }
      }
    })

    // checking knight
    MOVES.get(KNIGHT)?.forEach((move) => {
      if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
        return
      }

      const blockingPiece = this._pieceInDirection(position, move)
      if (
        blockingPiece != null &&
        blockingPiece.color != piece.color &&
        blockingPiece.type == KNIGHT
      ) {
        attacked = true
      }
    })

    // checking pawn
    let attackVectors
    if (piece.color == WHITE) {
      attackVectors = [new Vector(1, 1), new Vector(-1, 0)]
    } else {
      attackVectors = [new Vector(1, 0), new Vector(-1, -1)]
    }

    attackVectors.forEach((move) => {
      if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
        return
      }

      const blockingPiece = this._pieceInDirection(position, move)
      if (
        blockingPiece != null &&
        blockingPiece.color != piece.color &&
        blockingPiece.type == PAWN
      ) {
        attacked = true
      }
    })

    return attacked
  }

  isCheckmate(this: HexChess): boolean {
    const king = this._kings[this._turn]
    if (king == null) {
      return false
    }
    return this.isAttacked(king) && this.moves().length == 0
  }

  isDraw(): boolean {
    return (
      this.isInsufficientMaterial() ||
      this.isThreefoldRepetition() ||
      this._halfMoves >= 100
    )
  }

  isInsufficientMaterial(): boolean {
    const piecesPerColor: Record<Color, Array<PieceSymbol>> = { w: [], b: [] }
    HEXAGONS.forEach((hex) => {
      const piece = this._board[hex]
      if (!piece) {
        return
      }
      piecesPerColor[piece.color].push(piece.type)
    })
    if (
      (piecesPerColor.w.length > 2 && piecesPerColor.w.length > 2) ||
      (piecesPerColor.b.length > 2 && piecesPerColor.b.length)
    ) {
      return false
    }
    const whiteSorted = piecesPerColor.w.sort()
    const blackSorted = piecesPerColor.b.sort()
    if (
      (arrayEquals(whiteSorted, ['k']) && arrayEquals(blackSorted, ['k'])) ||
      (arrayEquals(whiteSorted, ['k']) &&
        arrayEquals(blackSorted, ['b', 'k'])) ||
      (arrayEquals(whiteSorted, ['k']) &&
        arrayEquals(blackSorted, ['k', 'n'])) ||
      (arrayEquals(whiteSorted, ['b', 'k']) &&
        arrayEquals(blackSorted, ['k'])) ||
      (arrayEquals(whiteSorted, ['k', 'n']) && arrayEquals(blackSorted, ['k']))
    ) {
      return true
    }
    return false
  }

  isGameOver(): boolean {
    return (
      this.isDraw() ||
      this.isCheckmate() ||
      this.isStalemate() ||
      this.isThreefoldRepetition()
    )
  }

  isStalemate(this: HexChess): boolean {
    const king = this._kings[this._turn]
    if (king == null) {
      return false
    }

    return !this.isAttacked(king) && this.moves().length == 0
  }

  isThreefoldRepetition(): boolean {
    const allStates = this._history.map((move) => {
      return move.after.split(' ').slice(0, 2).join(' ')
    })
    const occurances = new Map<string, number>([])
    allStates.forEach((state) => {
      const value = occurances.get(state)
      if (!value) {
        return occurances.set(state, 1)
      }
      occurances.set(state, value + 1)
    })
    let isRepetition = false
    occurances.forEach((value) => {
      if (value > 2) {
        isRepetition = true
      }
    })
    return isRepetition
  }

  load(fen: string): void {
    const err = this.validateFen(fen)
    if (err != null) {
      throw err
    }

    this.clear()

    const args = fen.split(' ')
    const positions = args[0].split('/')
    const turn = args[1]
    const ep = args[2]
    const halfMoves = args[3]
    const moveNumber = args[4]

    this._turn = turn as Color
    this._epHexagon = ep == '-' ? null : (ep as Hexagon)
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
          const hexagon = (fileLetter + rank) as Hexagon
          this.put(hexagon, {
            color: itemS == itemS.toUpperCase() ? WHITE : BLACK,
            type: itemS.toLowerCase() as PieceSymbol,
          })
          if (itemS.toLowerCase() == KING) {
            this._kings[itemS == itemS.toUpperCase() ? WHITE : BLACK] = hexagon
          }
        } else {
          rank += +itemS
        }
      }
    }
  }

  loadPgn(pgn: string | string[]) {
    this.load(DEFAULT_POSITION)
    let moves: string[] = []
    if (Array.isArray(pgn)) {
      moves = pgn
    } else {
      pgn = pgn.replace(/([0-9]+\.)*/g, '')
      moves = pgn.trim().split(/\s+/g)
    }

    moves.forEach((move) => {
      this.move(move)
    })
  }

  move(move: string | MoveObject): void {
    let moveObject: null | MoveObject
    if (typeof move == 'string') {
      moveObject = this._moveFromSan(move)
    } else {
      moveObject = move
    }

    if (!moveObject) {
      throw new Error('Invalid move')
    }

    const legalMoves = this._possibleMoves(moveObject.from)
    const fromVector = hexagonToVector(moveObject.from)
    const toVector = hexagonToVector(moveObject.to)
    const diff = toVector.clone().subtract(fromVector) as Vector

    const piece = this.get(moveObject.from)
    if (piece == null) {
      throw new Error('Invalid move: No piece at starting hex')
    }

    if (piece.color != this._turn) {
      throw new Error('Invalid move: Not the correct turn')
    }

    if (!legalMoves.some((item) => item.equals(diff))) {
      throw new Error('Invalid move: Illegal')
    }

    const history: Move = {
      color: piece.color,
      from: moveObject.from,
      to: moveObject.to,
      piece: piece.type,
      captured: null,
      promotion: null,
      san: '',
      before: this.fen(),
      after: '',
    }

    const wasEpCapture = moveObject.to == this._epHexagon && piece.type == PAWN
    const targetPiece = this.get(moveObject.to)
    history.captured = targetPiece
      ? targetPiece.type
      : wasEpCapture
      ? 'p'
      : null
    history.promotion = moveObject.promotion ?? null
    history.san = this._moveToSan(history)

    // make move

    this.put(moveObject.to, piece)
    this.remove(moveObject.from)

    // do promotion

    if (
      piece.type == PAWN &&
      ((piece.color == WHITE &&
        WHITE_PROMOTION_HEXAGONS.includes(moveObject.to)) ||
        (piece.color == BLACK &&
          BLACK_PROMOTION_HEXAGONS.includes(moveObject.to)))
    ) {
      if (
        moveObject.promotion &&
        ['q', 'b', 'n', 'r'].includes(moveObject.promotion)
      ) {
        this.remove(moveObject.to)
        this.put(moveObject.to, {
          color: piece.color,
          type: moveObject.promotion,
        })
      } else {
        throw new Error('Invalid move: Invalid promotion piece')
      }
    } else {
      if (
        moveObject.promotion &&
        ['q', 'b', 'n', 'r'].includes(moveObject.promotion)
      ) {
        this.put(moveObject.from, piece)
        this.remove(moveObject.to)
        throw new Error('Invalid move: Premature promotion')
      }
    }

    // ep

    if (wasEpCapture) {
      this.remove(
        vectorToHexagon(
          hexagonToVector(moveObject.to)
            .clone()
            .add(new Vector(0, piece.color == WHITE ? -1 : 1)) as Vector
        )
      )
    }

    // set metadata

    this._epHexagon = null
    if (piece.type == PAWN && Math.abs(diff.y) == 2) {
      this._epHexagon = vectorToHexagon(
        fromVector
          .clone()
          .add(new Vector(0, piece.color == WHITE ? 1 : -1)) as Vector
      )
    }

    this._halfMoves++
    if (this._turn == BLACK) {
      this._moveNumber++
    }
    this._turn = this._turn == WHITE ? BLACK : WHITE

    // set after and push

    history.after = this.fen()
    this._history.push(history)
  }

  moveNumber(): number {
    return this._moveNumber
  }

  moves(hexagon?: Hexagon): Hexagon[] {
    if (hexagon) {
      return this._possibleMoves(hexagon).map((value) =>
        vectorToHexagon(hexagonToVector(hexagon).clone().add(value) as Vector)
      )
    }
    const moves: Hexagon[] = []
    for (let i = 0; i < HEXAGONS.length; i++) {
      const piece = this.get(HEXAGONS[i])
      if (piece == null) {
        continue
      }
      if (piece.color != this._turn) {
        continue
      }
      moves.push(
        ...this._possibleMoves(HEXAGONS[i]).map((value) =>
          vectorToHexagon(
            hexagonToVector(HEXAGONS[i]).clone().add(value) as Vector
          )
        )
      )
    }
    return moves
  }

  pgn(): string {
    let pgn = ''
    let moveNumber = 0
    if (this._history.length == 0) {
      return ''
    }
    const chess = new HexChess(this._history[0].before)
    this._history.forEach((move) => {
      if (chess.moveNumber() != moveNumber) {
        moveNumber = chess.moveNumber()
        pgn += chess.moveNumber() + '. '
      }
      pgn += chess._moveToSan(move)
      chess.move({
        from: move.from,
        to: move.to,
        promotion: move.promotion ?? undefined,
      })
      if (chess.isGameOver()) {
        if (chess.isCheckmate()) {
          pgn += '#'
          pgn += chess.turn() == WHITE ? ' 0-1' : ' 1-0'
        } else if (chess.isDraw()) {
          pgn += ' 1/2-1/2'
        } else if (chess.isStalemate()) {
          pgn += chess.turn() == WHITE ? ' 1/4-3/4' : ' 3/4-1/4'
        }
      } else if (chess.inCheck()) {
        pgn += '+'
      }
      pgn += ' '
    })

    return pgn.trim()
  }

  put(hexagon: Hexagon, piece: Piece): void {
    if (piece.type == KING) {
      this._kings[piece.color] = hexagon
    }
    this._board[hexagon] = piece
  }

  remove(hexagon: Hexagon): void {
    this._board[hexagon] = null
  }

  reset() {
    return
  }

  turn() {
    return this._turn
  }

  undo(): Move | null {
    if (this._history.length < 1) {
      return null
    }
    const lastMove = this._history[this._history.length - 1]
    this._loadWithHistory(lastMove.before, this._history)
    this._history.pop()
    return lastMove
  }

  validateFen(fen: string): Error | null {
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
      return new Error(
        'Invalid FEN: half move counter number must be a non-negative integer'
      )
    }

    // 4th criterion: 2nd field is "w" (white) or "b" (black)?
    if (!/^(w|b)$/.test(tokens[1])) {
      return new Error('Invalid FEN: side-to-move is invalid')
    }

    // 5th criterion: 4th field is a valid e.p.-string?
    if (
      (tokens[1] == WHITE
        ? !BLACK_EP_HEXAGONS.includes(tokens[2] as Hexagon)
        : !WHITE_EP_HEXAGONS.includes(tokens[2] as Hexagon)) &&
      tokens[2] != '-'
    ) {
      return new Error('Invalid FEN: en-passant square is invalid')
    }

    // 6th criterion: 1st field contains 8 rows?
    const rows = tokens[0].split('/')
    if (rows.length !== 11) {
      return new Error(
        "Invalid FEN: piece data does not contain 11 '/'-delimited rows"
      )
    }

    // 7th criterion: every row is valid?
    for (let i = 0; i < rows.length; i++) {
      // check for right sum of fields AND not two numbers in succession
      for (let k = 0; k < rows[i].length; k++) {
        if (!/^[prnbqkPRNBQK]|[0-9]$/.test(rows[i][k])) {
          return new Error('Invalid FEN: piece data is invalid (invalid piece)')
        }
      }
      // needs check for total squares in row
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

    return null
  }

  private _possibleMoves(hexagon: Hexagon): Array<Vector> {
    const position = hexagonToVector(hexagon)
    const piece = this.get(hexagon)
    if (piece == null) {
      return []
    }
    const moves = new Array<Vector>()

    switch (piece?.type) {
      case 'p':
        MOVES.get(piece.type)?.forEach((move) => {
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
            if (blockingPiece != null) {
              return false
            }
          } else if (Math.abs(move.y) != 2) {
            // diag take
            const blockingPiece = this._pieceInDirection(position, move)
            if (
              (blockingPiece == null || blockingPiece.color == piece.color) &&
              vectorToHexagon(position.clone().add(move) as Vector) !=
                this._epHexagon
            ) {
              return false
            }
          }

          // double move logic
          if (Math.abs(move.y) == 2) {
            if (
              piece.color == WHITE &&
              !['b1', 'c2', 'd3', 'e4', 'f5', 'g4', 'h3', 'i2', 'j1'].includes(
                hexagon
              )
            ) {
              return
            }
            if (piece.color == BLACK && +hexagon.substring(1) != 7) {
              // rank 7
              return
            }

            const blockingPiece1 = this._pieceInDirection(
              position,
              move.clone().divideByScalar(2) as Vector
            )
            const blockingPiece2 = this._pieceInDirection(position, move)
            if (blockingPiece1 != null || blockingPiece2 != null) {
              return false
            }
          }

          moves.push(move)
        })
        break

      case 'n':
        MOVES.get(piece.type)?.forEach((move) => {
          if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
            return
          }

          const blockingPiece = this._pieceInDirection(position, move)
          if (blockingPiece != null && blockingPiece.color == piece.color) {
            return false
          }

          moves.push(move)
        })
        break

      case 'b':
        MOVES.get(piece.type)?.forEach((move) => {
          let i = 1
          while (true) {
            const multiple = move.clone().multiplyByScalar(i) as Vector
            const blockingPiece = this._pieceInDirection(position, multiple)
            if (blockingPiece != null) {
              if (blockingPiece.color != piece.color) {
                moves.push(multiple)
              }
              return false
            }
            if (
              !this._isWithinBounds(position.clone().add(multiple) as Vector)
            ) {
              return
            }
            moves.push(multiple)
            i++
          }
        })
        break

      case 'r':
        MOVES.get(piece.type)?.forEach((move) => {
          let i = 1
          while (true) {
            const multiple = move.clone().multiplyByScalar(i) as Vector
            const blockingPiece = this._pieceInDirection(position, multiple)
            if (blockingPiece != null) {
              if (blockingPiece.color != piece.color) {
                moves.push(multiple)
              }
              return false
            }
            if (
              !this._isWithinBounds(position.clone().add(multiple) as Vector)
            ) {
              return
            }
            moves.push(multiple)
            i++
          }
        })
        break

      case 'q':
        MOVES.get(piece.type)?.forEach((move) => {
          let i = 1
          while (true) {
            const multiple = move.clone().multiplyByScalar(i) as Vector
            const blockingPiece = this._pieceInDirection(position, multiple)
            if (blockingPiece != null) {
              if (blockingPiece.color != piece.color) {
                moves.push(multiple)
              }
              return false
            }
            if (
              !this._isWithinBounds(position.clone().add(multiple) as Vector)
            ) {
              return
            }
            moves.push(multiple)
            i++
          }
        })
        break

      case 'k':
        MOVES.get(piece.type)?.forEach((move) => {
          if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
            return
          }

          const blockingPiece = this._pieceInDirection(position, move)
          if (blockingPiece != null) {
            if (blockingPiece.color != piece.color) {
              moves.push(move)
            }
            return false
          }

          moves.push(move)
        })
        break
    }

    // checking if moves cause check
    const nonCheckValidMoves: Array<Vector> = []
    moves.forEach((move) => {
      const oldPiece = this.get(
        vectorToHexagon(position.clone().add(move) as Vector)
      )
      this.put(vectorToHexagon(position.clone().add(move) as Vector), piece)
      this.remove(vectorToHexagon(position))
      const king = this._kings[piece.color]
      if (king == null) {
        return false
      }
      if (!this.isAttacked(king)) {
        nonCheckValidMoves.push(move)
      }
      this.remove(vectorToHexagon(position.clone().add(move) as Vector))
      this.put(vectorToHexagon(position), piece)
      if (oldPiece) {
        this.put(
          vectorToHexagon(position.clone().add(move) as Vector),
          oldPiece
        )
      }
    })

    return nonCheckValidMoves
  }

  private _pieceInDirection(
    this: HexChess,
    from: Vector,
    to: Vector
  ): Piece | null {
    const blockingPosition = from.clone().add(to) as Vector
    const blockingHexagon = vectorToHexagon(blockingPosition)
    return this.get(blockingHexagon)
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

  private _loadWithHistory(fen: string, history: Move[]): Error | null {
    const error = this.load(fen)
    if (error != null) {
      return error
    }
    this._history = history
    return null
  }

  private _moveToSan(move: Move): string {
    const piece = this._board[move.from]
    if (!piece) {
      throw new Error('Invalid Move: Could not generate san')
    }
    const possibleClashes: Hexagon[] = []
    HEXAGONS.forEach((hex) => {
      const otherPiece = this._board[hex]
      if (!otherPiece) {
        return
      }
      if (otherPiece.color != piece.color) {
        return
      }
      if (otherPiece.type == piece.type) {
        possibleClashes.push(hex)
      }
    })

    const clashMoves = new Map<Hexagon, Hexagon[]>([])
    possibleClashes.forEach((location) => {
      clashMoves.set(location, this.moves(location))
    })

    const clashes: Hexagon[] = []

    clashMoves.forEach((clashMoveSet, location) => {
      if (location == move.from) {
        return
      }
      if (clashMoveSet.includes(move.to)) {
        clashes.push(location)
      }
    })

    let san = ''
    if (piece.type != PAWN) {
      san += piece.type.toUpperCase()
    }

    if (piece.type == PAWN && move.captured) {
      san += move.from.substring(0, 1)
    }

    if (move.captured) {
      san += 'x'
    }

    let fileClashes = 0
    let rankClashes = 0
    const file = move.from.substring(0, 1)
    const rank = move.from.substring(1)

    clashes.forEach((clash) => {
      if (clash.substring(0, 1) == file) {
        fileClashes++
      }
      if (clash.substring(1) == rank) {
        rankClashes++
      }
    })

    if (fileClashes > 0 && rankClashes > 0) {
      san += file + rank
    } else if (fileClashes > 0) {
      san += rank
    } else if (rankClashes > 0) {
      san += file
    }

    san += move.to

    if (move.promotion) {
      san += move.promotion.toUpperCase()
    }

    if (this.inCheck()) {
      san += '+'
    }

    return san
  }

  private _moveFromSan(san: string): MoveObject {
    const clean = this._stripSan(san)

    const matches = clean.match(
      /^([PNBRQK])?([a-k])?([1-9]|1[0-1])?x?([a-k]{1}(?:[1-9]|1[0-1])){1}([QRBN])?$/
      //  piece     file?       rank?                  to               promotion?
    )

    if (!matches) {
      throw new Error('Invalid SAN: Incorrect format' + san)
    }

    let piece: PieceSymbol | null = matches[1]
      ? (matches[1].toLowerCase() as PieceSymbol)
      : null
    const fromFile = matches[2]
    const fromRank = +matches[3]
    const to = matches[4] as Hexagon
    const promotion: PieceSymbol | null = matches[5]
      ? (matches[1].toLowerCase() as PieceSymbol)
      : null

    if (!piece) {
      piece = 'p'
    }

    const relevant: Hexagon[] = []
    HEXAGONS.forEach((hex) => {
      const boardPiece = this._board[hex]
      if (
        !boardPiece ||
        boardPiece.type != piece ||
        boardPiece.color != this._turn
      ) {
        return
      }
      const moves = this.moves(hex)
      if (!moves.includes(to)) {
        return
      }
      if (fromFile) {
        if (hex.substring(0, 1) != fromFile) {
          return
        }
      }
      if (fromRank) {
        if (+hex.substring(1) != fromRank) {
          return
        }
      }
      relevant.push(hex)
    })

    if (relevant.length == 0) {
      throw new Error('Invalid SAN: No moves satisfy this requirement ' + san)
    }
    if (relevant.length > 1) {
      throw new Error('Invalid SAN: Too ambiguous ' + san)
    }

    return { from: relevant[0], to: to, promotion: promotion ?? undefined }
  }

  private _stripSan(san: string): string {
    return san.replace(/=/, '').replace(/[+#]?[?!]*$/, '')
  }
}
