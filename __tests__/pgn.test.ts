import { HexChess } from '../src/hexchess'

test('pgn none', () => {
  const chess = new HexChess()
  expect(chess.pgn()).toEqual('')
})

test('pgn move 1', () => {
  const chess = new HexChess()
  chess.move('f5', 'f6')
  expect(chess.pgn()).toEqual('1. f6')
})

test('pgn move ep capture', () => {
  const chess = new HexChess()
  chess.move('f5', 'f6')
  chess.move('g7', 'g5')
  chess.move('f6', 'g6')
  expect(chess.pgn()).toEqual('1. f6 g5 2. fxg6')
})

test('pgn move rank ambiguity', () => {
  const chess = new HexChess('4QQ/7/8/9/10/K9k/10/9/8/7/6 w - 0 1')
  chess.move('a6', 'b6')
  expect(chess.pgn()).toEqual('1. Q6b6')
})

test('pgn move file ambiguity into check', () => {
  const chess = new HexChess('5Q/7/5Q2/9/10/K9k/10/9/8/7/6 w - 0 1')
  chess.move('a6', 'b6')
  expect(chess.pgn()).toEqual('1. Qab6 3/4-1/4')
})

test('pgn move double ambiguity', () => {
  const chess = new HexChess('4QQ/7/5Q2/9/10/K9k/10/9/8/7/6 w - 0 1')
  chess.move('a6', 'b6')
  expect(chess.pgn()).toEqual('1. Qa6b6 3/4-1/4')
})

test('pgn move into check', () => {
  const chess = new HexChess('4Q1/7/8/9/10/K9k/10/9/8/7/6 w - 0 1')
  chess.move('a5', 'a6')
  expect(chess.pgn()).toEqual('1. Qa6+')
})

test('pgn move into checkmate', () => {
  const chess = new HexChess('5/7/8/9/10/K9k/10/9/8/5Q1/3RR1 w - 0 1')
  chess.move('j6', 'j7')
  expect(chess.pgn()).toEqual('1. Qj7# 1-0')
})

test('pgn move into draw', () => {
  const chess = new HexChess('6/7/8/9/10/K9k/10/9/8/7/6 w - 0 1')
  chess.move('f1', 'f2')
  expect(chess.pgn()).toEqual('1. Kf2 1/2-1/2')
})

test('png promotion', () => {
  const chess = new HexChess('4P1/7/8/9/10/K9k/10/9/8/7/6 w - 0 1')
  chess.move('a5', 'a6', 'q')
  expect(chess.pgn()).toEqual('1. a6Q+')
})
