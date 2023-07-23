import { HexChess } from "./hexchess"
import * as Consts from './consts'
import { Vector } from "vector2d"

function move(this: HexChess, from: Consts.Hexagon, to: Consts.Hexagon) {
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
    if (piece.type == Consts.PAWN && diff.y == 2) {
      this._epHexagon = this._vectorToHexagon(fromVector.clone().add(new Vector(0, piece.color == Consts.WHITE ? 1 : -1)) as Vector)
    }
  }

export default move;