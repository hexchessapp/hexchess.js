import { WHITE, PAWN, BLACK } from './src/consts'
import { HexChess } from './src/hexchess'

const fen = '6/7/8/9/10/K4k5/10/9/8/7/6 b - 0 1'
const chess = new HexChess(fen)
chess.put('g6', { color: WHITE, type: PAWN })
console.log(chess.inCheck())
