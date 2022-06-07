// Creating a Wordle class
class Wordle {
  constructor (guessWord = '') {
    this.newWord = ''
    this.guessNumber = 1
    this.guessWord = guessWord
    this.win = null
  }

  gameResult () {
    if (this.guessWord === this.newWord) {
      this.win = true
    }
    if (this.guessNumber === 6 & this.guessWord !== this.newWord) {
      this.win = false
    }
  }

  deleteLetter() {
    // simply pop from string
    this.newWord = this.newWord.substring(0, this.newWord.length - 1)
  }

  appendLetter (letter) {
    // added in functionality such that words can't be longer than five words
    if (this.newWord.length < 5 && this.win == null) {
      this.newWord = this.newWord + letter
    } else {
      // alert("Word Too Long")
    }
  }

  enterWord () {
    // have to check size of word
    if (this.newWord.length < 5) {
      // alert("Word Too short")
    } else {
      // Updating the guessNumber
      this.gameResult()
      this.guessNumber = this.guessNumber + 1
      this.newWord = ''
    }
  }

  colourWord () {
    if (this.newWord.length < 5) {
      // alert("Word Too short")
    } else {
      // change colour of word...
      const rowId = '#row' + this.guessNumber
      const row = document.querySelector(rowId)
      // changing colour to green and yellow - one loop
      for (let i = 0; i < this.newWord.length; i++) {
        const letterId = this.newWord[i]
        const letterBtn = document.getElementById(letterId)
        if (letterBtn.style.backgroundColor !== 'rgb(0, 128, 0)' && letterBtn.style.backgroundColor !== 'rgb(177, 185, 53)') {
          letterBtn.style.backgroundColor = 'rgb(105, 105, 105)'
        }
        for (let j = 0; j < this.newWord.length; j++) {
          if (this.newWord[j] === this.guessWord[i]) {
            const index = j + 1
            const colId = '#col' + index
            const cell = row.querySelector(colId)
            if (cell.style.backgroundColor !== 'rgb(0, 128, 0)') {
              cell.style.backgroundColor = 'rgb(177, 185, 53)'
            }

            const letterId = this.guessWord[i]
            const letterBtn = document.getElementById(letterId)
            if (letterBtn.style.backgroundColor !== 'rgb(0, 128, 0)') { letterBtn.style.backgroundColor = 'rgb(177, 185, 53)' }
            break
          }
        }
        if (this.newWord[i] === this.guessWord[i]) {
          const index = i + 1
          const colId = '#col' + index
          const cell = row.querySelector(colId)
          cell.style.backgroundColor = 'rgb(0, 128, 0)'

          const letterId = this.guessWord[i]
          const letterBtn = document.getElementById(letterId)
          letterBtn.style.backgroundColor = 'rgb(0, 128, 0)'
        }
        for (let j = 0; j < this.newWord.length; j++) {
          const index = j + 1
          const colId = '#col' + index
          const cell = row.querySelector(colId)
          if (cell.style.backgroundColor !== 'rgb(0, 128, 0)' && cell.style.backgroundColor !== 'rgb(177, 185, 53)') {
            cell.style.backgroundColor = 'rgb(105, 105, 105)'
          }
        }
      }
    }
  }

  updateGrid () {
    const rowId = '#row' + this.guessNumber
    const row = document.querySelector(rowId)

    // filling the cells with letters in the words
    for (let i = 1; i <= 5; i++) {
      const colId = '#col' + i
      const cell = row.querySelector(colId)

      // filling cell with letters from newWord
      if (i <= this.newWord.length) {
        cell.innerText = this.newWord[i - 1]
      } else {
        cell.innerText = '.'
      }
    }
  }
}

// Aquire word from .ejs file and server
const test = document.getElementsByClassName('wordVal')
const testValue = test[0].dataset.testValue
const wordle = new Wordle(testValue.replace(/['"]+/g, '').toUpperCase())

const backBtn = document.getElementById('backBtn')
const winMsg = document.getElementById('winMsg')
const loseMSg = document.getElementById('loseMsg')

const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
  button.addEventListener('click', () => {
    switch (button.innerText) {
      case 'DEL':
        wordle.deleteLetter()
        wordle.updateGrid()
        break
      case 'ENTER':
        if (wordle.win == null) {
          fetch('/check', {
            method: 'POST',
            headers: {
              Authorization: 'wordcheck',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              word: wordle.newWord.toLowerCase()
            })
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              if (data.truth) {
                wordle.colourWord()
                wordle.enterWord()
                if (wordle.win != null) {
                  backBtn.removeAttribute('hidden')
                  if (wordle.win === true) {
                    winMsg.removeAttribute('hidden')
                  }
                  if (wordle.win === false) {
                    loseMSg.removeAttribute('hidden')
                  }
                }
              } else {
                alert('Not a word')
              }
            })
        }
        break
      case 'Return Home':
        break
      case 'Home':
        break
      default:
        wordle.appendLetter(button.innerText)
        wordle.updateGrid()
    }
  })
})

module.exports = { Wordle }
