/**
 * @license
 * Copyright (c) 2023, Owain Williams (owain.williams.213@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import load from './methods/load'
import move from './methods/move'
import ascii from './methods/ascii'
import clear from './methods/clear'
import inCheck from './methods/inCheck'
import vectorToHexagon from './utils/vectorToHexagon'
import validateFen from './utils/validateFen'
import put from './methods/put'
import possibleMoves from './utils/possibleMoves'
import isWithinBounds from './utils/isWithinBounds'
import hexagonToVector from './utils/hexagonToVector'
import pieceInDirection from './utils/pieceInDirection'
import {
  Hexagon,
  Piece,
  Color,
  WHITE,
  DEFAULT_POSITION,
  History,
} from './consts'
import isAttacked from './methods/isAttacked'
import isCheckmate from './methods/isCheckmate'
import isStalemate from './methods/isStalemate'
import board from './methods/board'
import get from './methods/get'
import moves from './methods/moves'
import undo from './methods/undo'

export class HexChess {
  protected _board: Record<Hexagon, Piece | null> = {
    f11: null,
    e10: null,
    g10: null,
    d9: null,
    f10: null,
    h9: null,
    c8: null,
    e9: null,
    g9: null,
    i8: null,
    b7: null,
    d8: null,
    f9: null,
    h8: null,
    j7: null,
    a6: null,
    c7: null,
    e8: null,
    g8: null,
    i7: null,
    k6: null,
    b6: null,
    d7: null,
    f8: null,
    h7: null,
    j6: null,
    a5: null,
    c6: null,
    e7: null,
    g7: null,
    i6: null,
    k5: null,
    b5: null,
    d6: null,
    f7: null,
    h6: null,
    j5: null,
    a4: null,
    c5: null,
    e6: null,
    g6: null,
    i5: null,
    k4: null,
    b4: null,
    d5: null,
    f6: null,
    h5: null,
    j4: null,
    a3: null,
    c4: null,
    e5: null,
    g5: null,
    i4: null,
    k3: null,
    b3: null,
    d4: null,
    f5: null,
    h4: null,
    j3: null,
    a2: null,
    c3: null,
    e4: null,
    g4: null,
    i3: null,
    k2: null,
    b2: null,
    d3: null,
    f4: null,
    h3: null,
    j2: null,
    a1: null,
    c2: null,
    e3: null,
    g3: null,
    i2: null,
    k1: null,
    b1: null,
    d2: null,
    f3: null,
    h2: null,
    j1: null,
    c1: null,
    e2: null,
    g2: null,
    i1: null,
    d1: null,
    f2: null,
    h1: null,
    e1: null,
    g1: null,
    f1: null
  }
  protected _turn: Color = WHITE
  protected _kings: Record<Color, Hexagon | null> = {
    w: null,
    b: null
  }
  protected _epHexagon: Hexagon | null = null
  protected _halfMoves = 0
  protected _moveNumber = 1
  protected _history: History[] = []

  constructor(fen = DEFAULT_POSITION) {
    this.load(fen)
  }

  public ascii = ascii
  public board = board
  public clear = clear
  public fen = null
  public get = get
  public history = null
  public inCheck = inCheck
  public isAttacked = isAttacked
  public isCheckmate = isCheckmate
  public isDraw = null
  public isInsufficientMaterial = null
  public isGameOver = null
  public isStalemate = isStalemate
  public isThreefoldRepetition = null
  public load = load
  public loadPgn = null
  public move = move
  public moveNunber = null
  public moves = moves
  public pgn = null
  public put = put
  public remove = null
  public reset = null
  public turn = null
  public undo = undo
  public validateFen = validateFen

  protected _possibleMoves = possibleMoves
  protected _pieceInDirection = pieceInDirection
  protected _vectorToHexagon = vectorToHexagon
  protected _hexagonToVector = hexagonToVector
  protected _isWithinBounds = isWithinBounds
}
