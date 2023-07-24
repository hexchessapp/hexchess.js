import { Vector } from 'vector2d'
import { Hexagon } from '../consts'

function hexagonToVector(hexagon: Hexagon): Vector {
  const fileOffset = hexagon.substring(0, 1).charCodeAt(0) - 102
  const rankOffset = +hexagon.substring(1) - 6

  const vector = new Vector(fileOffset, rankOffset)

  if (fileOffset > 0) {
    vector.y += fileOffset
  }

  return vector
}

export default hexagonToVector
