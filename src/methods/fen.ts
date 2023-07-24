import { HexChess } from '../hexchess'

function load(this: HexChess): string {
  const board = new Array<string>()
  const turn = this._turn
  const ep = this._epHexagon ? this._epHexagon : '-'
  const halfMoves = this._halfMoves.toString()
  const moveNumber = this._moveNumber.toString()

  // const sorted = new Map([...this._board.entries()].sort())

  return new Array<string>(
    board.join('/'),
    turn,
    ep,
    halfMoves,
    moveNumber
  ).join(' ')
}

export default load
