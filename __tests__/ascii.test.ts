import { HexChess } from '../src/hexchess'

test('ascii default board', () => {
  const chess = new HexChess()
  expect(chess.ascii())
    .toEqual(`+-----------------------------------------------------+
|                          b                          |
|                     q         k                     |
|                n         b         n                |
|           r         .         .         r           |
|      p         .         b         .         p      |
| .         p         .         .         p         . |
|      .         p         .         p         .      |
| .         .         p         p         .         . |
|      .         .         p         .         .      |
| .         .         .         .         .         . |
|      .         .         .         .         .      |
| .         .         .         .         .         . |
|      .         .         P         .         .      |
| .         .         P         P         .         . |
|      .         P         .         P         .      |
| .         P         .         .         P         . |
|      P         .         B         .         P      |
|           R         .         .         R           |
|                N         B         N                |
|                     Q         K                     |
|                          B                          |
+-----------------------------------------------------+`)
})
