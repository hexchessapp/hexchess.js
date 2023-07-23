import { HexChess } from "./../hexchess"
import * as Consts from './../consts'
import { Vector } from "vector2d"

function pieceInDirection(this: HexChess, from: Vector, to: Vector, board = this._board): Consts.Piece | undefined {
    const blockingPosition = from.clone().add(to) as Vector
    const blockingHexagon = this._vectorToHexagon(blockingPosition)
    return board.get(blockingHexagon)
  }

  export default pieceInDirection;