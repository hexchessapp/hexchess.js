import { WHITE, EMPTY_BOARD } from '../consts'
import { HexChess } from '../hexchess'

function clear(this: HexChess) {
  this._board = EMPTY_BOARD
  this._kings = {
    w: null,
    b: null,
  }
  this._turn = WHITE
  this._epHexagon = null
  this._halfMoves = 0
  this._moveNumber = 1
  this._history = []
}

export default clear
