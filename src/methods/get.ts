import { Hexagon } from '../consts'
import { HexChess } from '../hexchess'

function get(this: HexChess, hex: Hexagon) {
  return this._board[hex]
}

export default get
