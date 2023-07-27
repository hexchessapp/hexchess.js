import { HexChess } from '../hexchess'
import { Hexagon, PAWN, WHITE } from '../consts'
import { Vector } from 'vector2d'

function move(this: HexChess, from: Hexagon, to: Hexagon) {
  const legalMoves = this._possibleMoves(from)
  const fromVector = this._hexagonToVector(to)
  const diff = fromVector
    .clone()
    .subtract(this._hexagonToVector(from)) as Vector
  const piece = this.get(from)
  if (piece == null) {
    return
  }
  const targetPiece = this.get(to)
  if (!legalMoves.includes(diff)) {
    return
  }

  // make move
  this.put(to, piece)
  this.remove(from)

  // creating ep hexagon
  this._epHexagon = null
  if (piece.type == PAWN && diff.y == 2) {
    this._epHexagon = this._vectorToHexagon(
      fromVector
        .clone()
        .add(new Vector(0, piece.color == WHITE ? 1 : -1)) as Vector
    )
  }

  this._history.push({
    move: {
      color: piece.color,
      from: from,
      to: to,
      piece: piece.type,
      captured: targetPiece == null ? undefined : targetPiece.type,
      promotion: undefined,
      flags: '',
      san: '',
      lan: '',
      before: '',
      after: ''
    },
    kings: this._kings,
    turn: this._turn,
    epHex: this._epHexagon,
    halfMoves: this._halfMoves,
    moveNumber: this._moveNumber
  })
}

export default move
