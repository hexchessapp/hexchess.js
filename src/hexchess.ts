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
  EMPTY_BOARD,
} from './consts'
import isAttacked from './methods/isAttacked'
import isCheckmate from './methods/isCheckmate'
import isStalemate from './methods/isStalemate'
import board from './methods/board'
import get from './methods/get'
import moves from './methods/moves'
import undo from './methods/undo'
import remove from './methods/remove'

export class HexChess {
  protected _board: Record<Hexagon, Piece | null> = EMPTY_BOARD
  protected _turn: Color = WHITE
  protected _kings: Record<Color, Hexagon | null> = {
    w: null,
    b: null,
  }
  protected _epHexagon: Hexagon | null = null
  protected _halfMoves = 0
  protected _moveNumber = 1
  protected _history: History[] = []

  constructor(fen = DEFAULT_POSITION) {
    const err = this.load(fen)
    if (err != null) {
      throw err
    }
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
  public remove = remove
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
