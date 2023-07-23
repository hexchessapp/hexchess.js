import { HexChess } from "./../hexchess"
import * as Consts from './../consts'

function put(this: HexChess, hexagon: Consts.Hexagon, piece: Consts.Piece) {
    if (piece.type == Consts.KING) {
      this._kings.set(piece.color, hexagon)
    }
    this._board.set(hexagon, piece)
  }

  export default put;