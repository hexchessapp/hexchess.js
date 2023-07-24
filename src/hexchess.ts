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

import load from './load'
import move from './move'
import ascii from './ascii'
import clear from './clear'
import vectorToHexagon from './utils/vectorToHexagon'
import validateFen from './utils/validateFen'
import put from './utils/put'
import possibleMoves from './utils/possibleMoves'
import kingInCheck from './utils/kingInCheck'
import isWithinBounds from './utils/isWithinBounds'
import hexagonToVector from './utils/hexagonToVector'
import pieceInDirection from './utils/pieceInDirection'
import { Hexagon, Piece, Color, WHITE, DEFAULT_POSITION } from './consts'

export class HexChess {
  protected _board: Map<Hexagon, Piece> = new Map()
  protected _turn: Color = WHITE
  protected _kings: Map<Color, Hexagon> = new Map()
  protected _epHexagon: Hexagon | undefined = undefined
  protected _halfMoves = 0
  protected _moveNumber = 0
  protected _positionCounts: Record<string, number> = {}

  constructor(fen = DEFAULT_POSITION) {
    this.load(fen)
  }

  public load = load
  public move = move
  public ascii = ascii

  protected _validateFen = validateFen
  protected _put = put
  protected _possibleMoves = possibleMoves
  protected _kingInCheck = kingInCheck
  protected _pieceInDirection = pieceInDirection
  protected _vectorToHexagon = vectorToHexagon
  protected _hexagonToVector = hexagonToVector
  protected _isWithinBounds = isWithinBounds
  protected _clear = clear

  getBoard(): Map<Hexagon, Piece> {
    return this._board
  }

  getTurn(): Color {
    return this._turn
  }

  getKings(): Map<Color, Hexagon> {
    return this._kings
  }

  getEpHexagon(): Hexagon | undefined {
    return this._epHexagon
  }

  getHalfMoves(): number {
    return this._halfMoves
  }

  getMoveNumber(): number {
    return this._moveNumber
  }
}
