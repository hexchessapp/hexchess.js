import { getHexColor } from '../src/hexchess'

test('color', () => {
  expect(getHexColor('f6')).toEqual('g')
  expect(getHexColor('f5')).toEqual('b')
  expect(getHexColor('g5')).toEqual('w')
  expect(getHexColor('g6')).toEqual('b')
  expect(getHexColor('f7')).toEqual('w')
  expect(getHexColor('e6')).toEqual('b')
  expect(getHexColor('e5')).toEqual('w')
})
