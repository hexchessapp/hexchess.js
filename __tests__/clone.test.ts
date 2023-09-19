import { HexChess } from '../src/hexchess'

test('color', () => {
  const chess = new HexChess()
  chess.move({ from: 'f5', to: 'f6' })
  const clone = chess.clone()
  clone.move({ from: 'g7', to: 'g6' })
  expect(chess.get('f6')).toEqual({ color: 'w', type: 'p' })
  expect(chess.get('g6')).toBeNull()
  expect(clone.get('g6')).toEqual({ color: 'b', type: 'p' })
})
