import { HexChess } from "./../hexchess"
import * as Consts from './../consts'
import { Vector } from "vector2d"

function kingInCheck(this: HexChess, color: Consts.Color, board = this._board): boolean {
    let kingInCheck = false

    const kingHexagon = this._kings.get(color) ?? 'a1'
    const kingPosition = this._hexagonToVector(kingHexagon)

    // checking diagonals
    Consts.MOVES.get(Consts.BISHOP)?.forEach(move => {
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
    Consts.MOVES.get(Consts.ROOK)?.forEach(move => {
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
    Consts.MOVES.get(Consts.KNIGHT)?.forEach(move => {
      if (!this._isWithinBounds(kingPosition.clone().add(move) as Vector)) {
        return
      }

      const blockingPiece = this._pieceInDirection(kingPosition, move, board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color != color &&
        blockingPiece.type == Consts.ROOK
      ) {
        kingInCheck = true
      }
    });

    // checking pawn
    let blockingPiece
    if (color == Consts.WHITE) {
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(1, 1), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == Consts.BLACK &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(-1, 0), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == Consts.BLACK &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
    }
    if (color == Consts.BLACK) {
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(1, 0), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == Consts.WHITE &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
      blockingPiece = this._pieceInDirection(kingPosition, new Vector(-1, -1), board)
      if (
        blockingPiece != undefined &&
        blockingPiece.color == Consts.WHITE &&
        blockingPiece.type == 'p'
      ) {
        kingInCheck = true
      }
    }

    return kingInCheck
  }

export default kingInCheck;