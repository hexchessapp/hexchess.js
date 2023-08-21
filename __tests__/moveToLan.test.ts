import { Move, moveToLan } from '../src/hexchess'

test('moveToLan standard', () => {
  const move: Move = {
    color: 'w',
    from: 'f5',
    to: 'f6',
    piece: 'p',
    captured: null,
    promotion: null,
    flags: '',
    san: '',
    lan: '',
    before: '',
    after: '',
  }
  expect(moveToLan(move)).toEqual('Pf5-f6')
})

test('moveToLan capture', () => {
  const move: Move = {
    color: 'w',
    from: 'f6',
    to: 'g6',
    piece: 'r',
    captured: 'p',
    promotion: null,
    flags: '',
    san: '',
    lan: '',
    before: '',
    after: '',
  }
  expect(moveToLan(move)).toEqual('Rf6xg6')
})

test('moveToLan promotion', () => {
  const move: Move = {
    color: 'w',
    from: 'a5',
    to: 'a6',
    piece: 'p',
    captured: null,
    promotion: 'q',
    flags: '',
    san: '',
    lan: '',
    before: '',
    after: '',
  }
  expect(moveToLan(move)).toEqual('Pa5-a6=Q')
})

test('moveToLan promotion', () => {
  const move: Move = {
    color: 'w',
    from: 'b6',
    to: 'a6',
    piece: 'p',
    captured: 'q',
    promotion: 'q',
    flags: '',
    san: '',
    lan: '',
    before: '',
    after: '',
  }
  expect(moveToLan(move)).toEqual('Pb6xa6=Q')
})
