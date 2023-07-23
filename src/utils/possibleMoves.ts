import { HexChess } from "./../hexchess"
import * as Consts from './../consts'
import { Vector } from "vector2d"

function possibleMoves(this: HexChess, hexagon: Consts.Hexagon): Array<Vector> {
    const position = this._hexagonToVector(hexagon)
    const piece = this._board.get(hexagon)
    if (piece == undefined) {
      return []
    }
    const validMoves = new Array<Vector>()

    switch (piece?.type) {
      case 'p':
        Consts.MOVES.get(piece.type)?.forEach(move => {
          // check on board

          if (!this._isWithinBounds(position.clone().add(move) as Vector)) {
            return
          }

          // check rank direction for color
          let rankDifference = move.y
          if (move.x > 0) {
            rankDifference -= move.x
          }

          if (rankDifference < 0 && piece.color == Consts.WHITE) {
            return
          }
          if (rankDifference >= 0 && piece.color == Consts.BLACK) {
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
              piece.color == Consts.WHITE &&
              Math.abs(+hexagon.substring(1) - 5) !=
              - Math.abs(hexagon.substring(0, 1).charCodeAt(0) - 102)
            ) {
              return
            }
            if (piece.color == Consts.BLACK && +hexagon.substring(1) != 7) { // rank 7
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
        Consts.MOVES.get(piece.type)?.forEach(move => {
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
        Consts.MOVES.get(piece.type)?.forEach(move => {
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
        Consts.MOVES.get(piece.type)?.forEach(move => {
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
        Consts.MOVES.get(piece.type)?.forEach(move => {
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
        Consts.MOVES.get(piece.type)?.forEach(move => {
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

  export default possibleMoves;