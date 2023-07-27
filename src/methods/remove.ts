import { Hexagon } from '../consts'
import { HexChess } from '../hexchess'

function remove(this: HexChess, hexagon: Hexagon) {
  this._board[hexagon] = null
}

export default remove
