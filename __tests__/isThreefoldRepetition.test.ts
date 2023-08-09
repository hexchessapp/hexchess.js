import { HexChess } from "../src/hexchess"

test('isThreefoldRepetition', () => {
  const chess = new HexChess()
  chess.move('f1', 'g2'); chess.move('f11', 'g9'); chess.move('g2', 'f1'); chess.move('g9', 'f11')
  chess.move('f1', 'g2'); chess.move('f11', 'g9'); chess.move('g2', 'f1'); chess.move('g9', 'f11')
  chess.move('f1', 'g2');
  expect(chess.isThreefoldRepetition()).toEqual(true)
})

test('isThreefoldRepetition almost', () => {
  const chess = new HexChess()
  chess.move('f1', 'g2'); chess.move('f11', 'g9'); chess.move('g2', 'f1'); chess.move('g9', 'f11')
  chess.move('f1', 'g2'); chess.move('f11', 'g9'); chess.move('g2', 'f1')
  expect(chess.isThreefoldRepetition()).toEqual(false)
})

test('isThreefoldRepetition after', () => {
  const chess = new HexChess()
  chess.move('f1', 'g2'); chess.move('f11', 'g9'); chess.move('g2', 'f1'); chess.move('g9', 'f11')
  chess.move('f1', 'g2'); chess.move('f11', 'g9'); chess.move('g2', 'f1'); chess.move('g9', 'f11')
  chess.move('f1', 'g2'); chess.move('f5', 'f6');
  expect(chess.isThreefoldRepetition()).toEqual(true)
})