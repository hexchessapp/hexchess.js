import { HexChess } from "./../hexchess"
import * as Consts from './../consts'
import { Vector } from "vector2d"

function vectorToHexagon(this: HexChess, vector: Vector): Consts.Hexagon {
    const file = String.fromCharCode(vector.x + 102)
    let rank = vector.y + 6

    if (vector.x > 0) {
      rank -= vector.x
    }

    return file + rank as Consts.Hexagon
  }

export default vectorToHexagon