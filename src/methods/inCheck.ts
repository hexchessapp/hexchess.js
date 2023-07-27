import { HexChess } from '../hexchess'

function inCheck(this: HexChess): boolean {
  const king = this._kings[this._turn]
  if (king == null) {
    return false
  }
  const isInCheck = this.isAttacked(king)
  return isInCheck
}

export default inCheck
