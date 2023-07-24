import { Hexagon, MOVES, WHITE, BLACK } from '../consts'
import { HexChess } from './../hexchess'
import { Vector } from 'vector2d'

function possibleMoves(this: HexChess, hexagon: Hexagon): Array<Vector> {
  const position = this._hexagonToVector(hexagon)
  const piece = this._board.get(hexagon)
  if (piece == undefined) {
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
          if (blockingPiece != undefined) {
            return false
          }
        } else if (Math.abs(move.y) != 2) {
          // diag take
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
              -Math.abs(hexagon.substring(0, 1).charCodeAt(0) - 102)
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
          if (blockingPiece1 != undefined || blockingPiece2 != undefined) {
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
        if (blockingPiece != undefined && blockingPiece.color == piece.color) {
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
          if (blockingPiece != undefined) {
            if (blockingPiece.color != piece.color) {
              moves.push(multiple)
            }
            return false
          }
          if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
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
          if (blockingPiece != undefined) {
            if (blockingPiece.color != piece.color) {
              moves.push(multiple)
            }
            return false
          }
          if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
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
          if (blockingPiece != undefined) {
            if (blockingPiece.color != piece.color) {
              moves.push(multiple)
            }
            return false
          }
          if (!this._isWithinBounds(position.clone().add(multiple) as Vector)) {
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
        if (blockingPiece != undefined) {
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
    this.move(
      this._vectorToHexagon(position),
      this._vectorToHexagon(position.clone().add(move) as Vector)
    )
    if (!this.inCheck()) {
      nonCheckValidMoves.push(move)
    }
    this.undo()
  })

  return nonCheckValidMoves
}

export default possibleMoves
