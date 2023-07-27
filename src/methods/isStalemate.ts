import { HEXAGONS } from '../consts';
import { HexChess } from '../hexchess'

function isStalemate(this: HexChess): boolean {
  const king = this._kings[this._turn]
  if (king == null) {
    return false
  }
  
  let moves = 0
  
  for (let i = 0; i < HEXAGONS.length; i++) {
    const piece = this.get(HEXAGONS[i])
    if (piece == null) {
      continue
    }
    if (piece.color != this._turn) {
      continue
    }
    moves += this._possibleMoves(HEXAGONS[i]).length
  }
  
  return !this.isAttacked(king) && moves == 0
}

export default isStalemate
