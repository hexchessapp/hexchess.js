import { HexChess } from "./hexchess"
import * as Consts from './consts'

function ascii(this: HexChess): string {
    let s = ''
    const MAX_LENGTH = 52
    // each minor row

    let currentHexagon = 0
    for (let i = 10; i >= -10; i--) {
      let cols = 11 - Math.abs(i)
      const q: Array<string> = []
      if (cols % 2 == 0 && cols > 6) {
        cols = 6
      }
      if (cols % 2 == 1 && cols > 6) {
        cols = 5
      }
      for (let j = 0; j < cols; j++) {
        const piece = this._board.get(Consts.HEXAGONS[currentHexagon])
        if (piece != undefined) {
          q.push(piece.color == Consts.WHITE ? piece.type.toUpperCase() : piece.type)
        } else {
          q.push('.')
        }
        currentHexagon++
      }
      let l = q.join('         ')
      const padding = MAX_LENGTH - l.length + 1
      l = ' '.repeat(padding / 2) + l + ' '.repeat(padding / 2)
      s += '|' + l + '|\n'
    }
    s = '+' + '-'.repeat(MAX_LENGTH + 1) + '+\n' + s
    s += '+' + '-'.repeat(MAX_LENGTH + 1) + '+'
    return s
  }

  export default ascii;