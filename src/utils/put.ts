import { Hexagon, Piece, KING } from '../consts'
import { HexChess } from './../hexchess'

function put(this: HexChess, hexagon: Hexagon, piece: Piece) {
  if (piece.type == KING) {
    this._kings.set(piece.color, hexagon)
  }
  this._board.set(hexagon, piece)
}

export default put
