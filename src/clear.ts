import { WHITE } from './consts'
import { HexChess } from './hexchess'

function clear(this: HexChess) {
  this._board = new Map()
  this._kings = new Map()
  this._turn = WHITE
  this._epHexagon = undefined
  this._halfMoves = 0
  this._moveNumber = 1
}

export default clear
