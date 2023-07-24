import { HexChess } from '../hexchess'

function isCheckmate(this: HexChess): boolean {
  const king = this._kings[this._turn]
  if (king == null) {
    return false
  }
  return this.isAttacked(king, this._turn) && this.moves().length == 0
}

export default isCheckmate
