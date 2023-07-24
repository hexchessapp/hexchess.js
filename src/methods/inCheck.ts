import { HexChess } from '../hexchess'

function inCheck(this: HexChess): boolean {
  const king = this._kings[this._turn]
  if (king == undefined) {
    return false
  }
  return this.isAttacked(king, this._turn)
}

export default inCheck
