import { Color, Hexagon, WHITE, BLACK, PieceSymbol, KING } from '../consts'
import { HexChess } from '../hexchess'

function load(this: HexChess, fen: string) {
  const err = this.validateFen(fen)
  if (err != undefined) {
    console.log(err)
  }

  this.clear()

  const args = fen.split(' ')
  const positions = args[0].split('/')
  const turn = args[1]
  const ep = args[2]
  const halfMoves = args[3]
  const moveNumber = args[4]

  this._turn = turn as Color
  this._epHexagon = ep == '-' ? null : (ep as Hexagon)
  this._halfMoves = +halfMoves
  this._moveNumber = +moveNumber

  for (let file = 0; file < positions.length; file++) {
    const fileData = positions[file]
    const fileLetter = String.fromCharCode(file + 97)
    let rank = 0
    for (let item = 0; item < fileData.length; item++) {
      const itemS = fileData.charAt(item)
      if (isNaN(+itemS)) {
        rank++
        const hexagon = (fileLetter + rank) as Hexagon
        this.put(hexagon, {
          color: itemS == itemS.toUpperCase() ? WHITE : BLACK,
          type: itemS.toLowerCase() as PieceSymbol,
        })
        if (itemS.toLowerCase() == KING) {
          this._kings[itemS == itemS.toUpperCase() ? WHITE : BLACK] = hexagon
        }
      } else {
        rank += +itemS
      }
    }
  }

  return
}

export default load
