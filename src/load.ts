import { HexChess } from "./hexchess"
import * as Consts from './consts'

function load(this: HexChess, fen: string) {
    const err = this._validateFen(fen)
    if (err != undefined) {
      console.log(err)
    }

    const args = fen.split(" ")
    const positions = args[0].split("/")
    const turn = args[1]
    const ep = args[2]
    const halfMoves = args[3]
    const moveNumber = args[4]

    this._turn = turn as Consts.Color
    this._epHexagon = ep == '-' ? undefined : ep as Consts.Hexagon
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
          const hexagon = fileLetter + rank as Consts.Hexagon
          this._put(
            hexagon,
            {
              color: itemS == itemS.toUpperCase() ? Consts.WHITE : Consts.BLACK,
              type: itemS.toLowerCase() as Consts.PieceSymbol
            }
          )
          if (itemS.toLowerCase() == Consts.KING) {
            this._kings.set(itemS == itemS.toUpperCase() ? Consts.WHITE : Consts.BLACK, hexagon)
          }
        } else {
          rank += +itemS
        }
      }
    }

    return
  }

  export default load;