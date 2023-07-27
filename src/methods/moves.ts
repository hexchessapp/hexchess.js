import { HEXAGONS, Hexagon } from '../consts'
import { HexChess } from './../hexchess'
import { Vector } from 'vector2d'

function moves(this: HexChess, hexagon?: Hexagon): Array<Vector> {
  if (hexagon) {
    return this._possibleMoves(hexagon)
  }
  const moves = new Array<Vector>()
  for (let i = 0; i < HEXAGONS.length; i++) {
    const piece = this.get(HEXAGONS[i])
    if (piece == null) {
      continue
    }
    if (piece.color != this._turn) {
      continue
    }
    moves.push(...this._possibleMoves(HEXAGONS[i]))
  }
  return moves
}

export default moves
