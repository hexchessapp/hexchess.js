import { Vector } from 'vector2d'
import { Hexagon } from '../consts'

function vectorToHexagon(vector: Vector): Hexagon {
  const file = String.fromCharCode(vector.x + 102)
  let rank = vector.y + 6

  if (vector.x > 0) {
    rank -= vector.x
  }

  return (file + rank) as Hexagon
}

export default vectorToHexagon
