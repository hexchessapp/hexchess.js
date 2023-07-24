import { Vector } from 'vector2d'
import {
  BISHOP,
  BLACK,
  Color,
  Hexagon,
  KNIGHT,
  MOVES,
  ROOK,
  WHITE,
} from '../consts'
import { HexChess } from '../hexchess'

function isAttacked(this: HexChess, hex: Hexagon, color: Color): boolean {
  let attacked = false
  const position = this._hexagonToVector(hex)

  // checking bishop
  MOVES.get(BISHOP)?.forEach((move) => {
    let i = 1
    while (true) {
      const multiple = move.clone().multiplyByScalar(i) as Vector
      const blockingPiece = this._pieceInDirection(
        position,
        multiple,
        this._board
      )
      if (blockingPiece != undefined) {
        if (
          blockingPiece.color == color &&
          (blockingPiece.type == 'q' || blockingPiece.type == 'b')
        ) {
          attacked = true
          return
        }
        return
      }
      if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
        return
      }
      i++
    }
  })

  // checking rook
  MOVES.get(ROOK)?.forEach((move) => {
    let i = 1
    while (true) {
      const multiple = move.clone().multiplyByScalar(i) as Vector
      const blockingPiece = this._pieceInDirection(
        position,
        multiple,
        this._board
      )
      if (blockingPiece != undefined) {
        if (
          blockingPiece.color == color &&
          (blockingPiece.type == 'q' || blockingPiece.type == 'r')
        ) {
          attacked = true
          return
        }
        return
      }
      if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
        return
      }
      i++
    }
  })

  // checking knight
  MOVES.get(KNIGHT)?.forEach((move) => {
    if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
      return
    }

    const blockingPiece = this._pieceInDirection(position, move, this._board)
    if (
      blockingPiece != undefined &&
      blockingPiece.color == color &&
      blockingPiece.type == ROOK
    ) {
      attacked = true
    }
  })

  // checking pawn
  let blockingPiece
  if (color == BLACK) {
    blockingPiece = this._pieceInDirection(
      position,
      new Vector(1, 1),
      this._board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == BLACK &&
      blockingPiece.type == 'p'
    ) {
      attacked = true
    }
    blockingPiece = this._pieceInDirection(
      position,
      new Vector(-1, 0),
      this._board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == BLACK &&
      blockingPiece.type == 'p'
    ) {
      attacked = true
    }
  }
  if (color == WHITE) {
    blockingPiece = this._pieceInDirection(
      position,
      new Vector(1, 0),
      this._board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == WHITE &&
      blockingPiece.type == 'p'
    ) {
      attacked = true
    }
    blockingPiece = this._pieceInDirection(
      position,
      new Vector(-1, -1),
      this._board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == WHITE &&
      blockingPiece.type == 'p'
    ) {
      attacked = true
    }
  }

  return attacked
}

export default isAttacked
