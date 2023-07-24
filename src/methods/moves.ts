import { Hexagon } from '../consts'
import { HexChess } from './../hexchess'
import { Vector } from 'vector2d'

function moves(this: HexChess, hexagon?: Hexagon): Array<Vector> {
  if (hexagon) {
    return this._possibleMoves(hexagon)
  }
  const moves = new Array<Vector>()
  this._board.forEach((value, key) => {
    if (value.color != this._turn) {
      return
    }
    moves.push(...this._possibleMoves(key))
  })
  return moves
}

export default moves
