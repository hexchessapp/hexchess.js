import { HexChess } from "./../hexchess"

function validateFen(this: HexChess, fen: string) {
    // 1st criterion: 5 space-seperated fields?
    const tokens = fen.split(/\s+/)
    if (tokens.length !== 5) {
      return new Error('Invalid FEN: must contain five space-delimited fields')
    }

    // 2nd criterion: move number field is a integer value > 0?
    const moveNumber = parseInt(tokens[4], 10)
    if (isNaN(moveNumber) || moveNumber <= 0) {
      return new Error('Invalid FEN: move number must be a positive integer')
    }

    // 3rd criterion: half move counter is an integer >= 0?
    const halfMoves = parseInt(tokens[3], 10)
    if (isNaN(halfMoves) || halfMoves < 0) {
      return new Error('Invalid FEN: half move counter number must be a non-negative integer')
    }

    // 4th criterion: 4th field is a valid e.p.-string?
    if (!/^(-|[bcdefghijk][7]|b1|c2|d3|e4|f5|g4|h3|i2|j1|)$/.test(tokens[2])) {
      return new Error('Invalid FEN: en-passant square is invalid' )
    }

    // 5th criterion: 2nd field is "w" (white) or "b" (black)?
    if (!/^(w|b)$/.test(tokens[1])) {
      return new Error('Invalid FEN: side-to-move is invalid')
    }

    // 6th criterion: 1st field contains 8 rows?
    const rows = tokens[0].split('/')
    if (rows.length !== 11) {
      return new Error("Invalid FEN: piece data does not contain 11 '/'-delimited rows")
    }

    // 7th criterion: every row is valid?
    const ROW_SIZES = [6,7,8,9,10,11,10,9,8,7,6]
    for (let i = 0; i < rows.length; i++) {
      // check for right sum of fields AND not two numbers in succession
      let sumFields = 0
      let previousWasNumber = false

      for (let k = 0; k < rows[i].length; k++) {
        if (!isNaN(+rows[i][k])) {
          if (previousWasNumber) {
            return new Error('Invalid FEN: piece data is invalid (consecutive number)')
          }
          sumFields += parseInt(rows[i][k], 10)
          previousWasNumber = true
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return new Error('Invalid FEN: piece data is invalid (invalid piece)')
          }
          sumFields += 1
          previousWasNumber = false
        }
      }
      if (sumFields !== ROW_SIZES[i]) {
        return new Error('Invalid FEN: piece data is invalid (too many squares in rank)')
      }
    }

    // 8th criterion: does chess position contain exact two kings?
    const kings = [
      { color: 'white', regex: /K/g },
      { color: 'black', regex: /k/g },
    ]

    for (const { color, regex } of kings) {
      if (!regex.test(tokens[0])) {
        return new Error(`Invalid FEN: missing ${color} king`)
      }

      if ((tokens[0].match(regex) || []).length > 1) {
        return new Error(`Invalid FEN: too many ${color} kings`)
      }
    }

    return
  }

  export default validateFen;