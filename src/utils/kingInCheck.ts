import { Color, MOVES, BISHOP, ROOK, KNIGHT, WHITE, BLACK } from '../consts'
import { HexChess } from './../hexchess'
import { Vector } from 'vector2d'

function kingInCheck(
  this: HexChess,
  color: Color,
  board = this._board
): boolean {
  let kingInCheck = false

  const kingHexagon = this._kings.get(color) ?? 'a1'
  const kingPosition = this._hexagonToVector(kingHexagon)

  // checking diagonals
  MOVES.get(BISHOP)?.forEach((move) => {
    let i = 1
    while (true) {
      const multiple = move.clone().multiplyByScalar(i) as Vector
      const blockingPiece = this._pieceInDirection(
        kingPosition,
        multiple,
        board
      )
      if (blockingPiece != undefined) {
        if (
          blockingPiece.color != color &&
          (blockingPiece.type == 'q' || blockingPiece.type == 'b')
        ) {
          kingInCheck = true
          return
        }
        return
      }
      if (!this._isWithinBounds(kingPosition.clone().add(multiple) as Vector)) {
        return
      }
      i++
    }
  })

  // checking diagonals
  MOVES.get(ROOK)?.forEach((move) => {
    let i = 1
    while (true) {
      const multiple = move.clone().multiplyByScalar(i) as Vector
      const blockingPiece = this._pieceInDirection(
        kingPosition,
        multiple,
        board
      )
      if (blockingPiece != undefined) {
        if (
          blockingPiece.color != color &&
          (blockingPiece.type == 'q' || blockingPiece.type == 'r')
        ) {
          kingInCheck = true
          return
        }
        return
      }
      if (!this._isWithinBounds(kingPosition.clone().add(multiple) as Vector)) {
        return
      }
      i++
    }
  })

  // checking knight
  MOVES.get(KNIGHT)?.forEach((move) => {
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
  })

  // checking pawn
  let blockingPiece
  if (color == WHITE) {
    blockingPiece = this._pieceInDirection(
      kingPosition,
      new Vector(1, 1),
      board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == BLACK &&
      blockingPiece.type == 'p'
    ) {
      kingInCheck = true
    }
    blockingPiece = this._pieceInDirection(
      kingPosition,
      new Vector(-1, 0),
      board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == BLACK &&
      blockingPiece.type == 'p'
    ) {
      kingInCheck = true
    }
  }
  if (color == BLACK) {
    blockingPiece = this._pieceInDirection(
      kingPosition,
      new Vector(1, 0),
      board
    )
    if (
      blockingPiece != undefined &&
      blockingPiece.color == WHITE &&
      blockingPiece.type == 'p'
    ) {
      kingInCheck = true
    }
    blockingPiece = this._pieceInDirection(
      kingPosition,
      new Vector(-1, -1),
      board
    )
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

export default kingInCheck
