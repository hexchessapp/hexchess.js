import { HexChess } from '../hexchess'
import { BLACK, WHITE } from './../consts';

function undo(this: HexChess) {
    this._history.pop()
    if (this._history.length < 1) {
    return
    }
    const lastMove = this._history[this._history.length - 2]
    
    // undo move
    this.put(lastMove.move.from, {color: lastMove.move.color, type: lastMove.move.piece})
    this.remove(lastMove.move.to)

    // replace captured piece
    const captured = lastMove.move.captured
    if (captured != null) {
        this.put(lastMove.move.to, {color: lastMove.move.color == WHITE ? BLACK : WHITE, type: captured})
    }

    this._kings = lastMove.kings
    this._turn = lastMove.turn
    this._epHexagon = lastMove.epHex
    this._halfMoves = lastMove.halfMoves
    this._moveNumber = lastMove.moveNumber
}

export default undo
