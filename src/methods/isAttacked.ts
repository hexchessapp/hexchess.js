import { Vector } from 'vector2d'
import {
  BISHOP,
  Hexagon,
  KNIGHT,
  MOVES,
  PAWN,
  QUEEN,
  ROOK,
  WHITE,
} from '../consts'
import { HexChess } from '../hexchess'

function isAttacked(this: HexChess, hex: Hexagon): boolean {
  let attacked = false
  const position = this._hexagonToVector(hex)
  const piece = this.get(hex)
  if (piece == null) {
    return false
  }

  // checking bishop
  MOVES.get(BISHOP)?.forEach((move) => {
    let i = 1
    while (true) {
      const multiple = move.clone().multiplyByScalar(i) as Vector
      if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
        return
      }
      const blockingPiece = this._pieceInDirection(position, multiple)
      if (
        blockingPiece != null &&
        blockingPiece.color != piece.color &&
        (blockingPiece.type == QUEEN || blockingPiece.type == BISHOP)
      ) {
        attacked = true
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
      if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
        return
      }
      const blockingPiece = this._pieceInDirection(position, multiple)
      if (
        blockingPiece != null &&
        blockingPiece.color != piece.color &&
        (blockingPiece.type == QUEEN || blockingPiece.type == ROOK)
      ) {
        attacked = true
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

export default isAttacked
