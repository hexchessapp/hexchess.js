import { Piece } from '../consts'
import { HexChess } from './../hexchess'
import { Vector } from 'vector2d'

function pieceInDirection(
  this: HexChess,
  from: Vector,
  to: Vector,
): Piece | null {
  const blockingPosition = from.clone().add(to) as Vector
  const blockingHexagon = this._vectorToHexagon(blockingPosition)
  return this.get(blockingHexagon)
}

export default pieceInDirection
