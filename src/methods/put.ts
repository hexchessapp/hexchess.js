import { Hexagon, Piece, KING } from '../consts'
import { HexChess } from '../hexchess'

function put(this: HexChess, hexagon: Hexagon, piece: Piece) {
  if (piece.type == KING) {
    this._kings[piece.color] = hexagon
  }
  this._board[hexagon] = piece
}

export default put
