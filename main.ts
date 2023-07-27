import { HexChess, PAWN, WHITE } from './src/hexchess'

const fen = '6/7/8/9/10/k4K5/10/9/8/7/6 w - 0 1'
const chess = new HexChess(fen)
chess.put('g5', { color: WHITE, type: PAWN })
console.log(chess.inCheck())
