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

import * as Consts from './consts';
import load from './load';
import move from './move';
import ascii from './ascii';
import vectorToHexagon from './utils/vectorToHexagon';
import validateFen from './utils/validateFen';
import put from './utils/put';
import possibleMoves from './utils/possibleMoves';
import kingInCheck from './utils/kingInCheck';
import isWithinBounds from './utils/isWithinBounds';
import hexagonToVector from './utils/hexagonToVector';
import pieceInDirection from './utils/pieceInDirection';

export class HexChess {
  protected _board: Map<Consts.Hexagon, Consts.Piece> = new Map()
  protected _moves: Map<Consts.Hexagon, Consts.MoveSymbol> = new Map()
  protected _turn: Consts.Color = Consts.WHITE
  protected _header: Record<string, string> = {}
  protected _kings: Map<Consts.Color, Consts.Hexagon> = new Map()
  protected _epHexagon: Consts.Hexagon | undefined = undefined
  protected _halfMoves = 0
  protected _moveNumber = 0
  protected _history: History[] = []
  protected _positionCounts: Record<string, number> = {}

  constructor(fen = Consts.DEFAULT_POSITION) {
    this.load(fen)
  }

  clear(keepHeaders = false) {
    this._board = new Map()
    this._moves = new Map()
    this._kings = new Map()
    this._turn = Consts.WHITE
    this._epHexagon = undefined
    this._halfMoves = 0
    this._moveNumber = 1
    this._history = []
    this._header = keepHeaders ? this._header : {}
  }

  public load = load;
  public move = move;
  public ascii = ascii;

  protected _validateFen = validateFen;
  protected _put = put;
  protected _possibleMoves = possibleMoves;
  protected _kingInCheck = kingInCheck;
  protected _pieceInDirection = pieceInDirection;
  protected _vectorToHexagon = vectorToHexagon;
  protected _hexagonToVector = hexagonToVector;
  protected _isWithinBounds = isWithinBounds;
}
