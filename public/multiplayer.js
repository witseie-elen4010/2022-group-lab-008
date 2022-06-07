const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// Creating a Wordle class
class Wordle {
  constructor(guessWord = '') {
    this.newWord = ''
    this.guessNumber = 1
    this.oppNewWord = ''
    this.oppGuessNumber = 1
    this.guessWord = guessWord
    this.win = null
  }

  gameResult() {
    if (this.guessWord === this.newWord) {
      // alert('Well Done You Win !!!')
      this.win = true
      // console.log("YOU WIN!")
    }
    if (this.guessNumber === 6 & this.guessWord !== this.newWord) {
      // alert("You Have lost The Game :(")
      this.win = false
    }
  }

  deleteLetter() {
    // simply pop from string
    this.newWord = this.newWord.substring(0, this.newWord.length - 1)
  }

  appendLetter(letter) {
    // added in functionality such that words can't be longer than five words
    if (this.newWord.length < 5 && this.win == null) {
      this.newWord = this.newWord + letter
    } else {
      // alert("Word Too Long")
    }
  }

  enterWord() {
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

  colourWord() {
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
            if(cell.style.backgroundColor != 'rgb(0, 128, 0)'){
              cell.style.backgroundColor = 'rgb(177, 185, 53)'
            }

            const letterId = this.guessWord[i]
            const letterBtn = document.getElementById(letterId)
            //console.log(letterBtn.style.backgroundColor)
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
        for(let j = 0; j < this.newWord.length; j++){
          const index = j + 1
          const colId = '#col' + index
          const cell = row.querySelector(colId)
          if(cell.style.backgroundColor != 'rgb(0, 128, 0)' && cell.style.backgroundColor != 'rgb(177, 185, 53)'){
            cell.style.backgroundColor = 'rgb(105, 105, 105)'
          }
        }
        
      }
    }
  }

  oppColourWord() {
    if (this.oppNewWord.length < 5) {
      // alert("Word Too short")
    } else {
      // change colour of word...
      const rowId = '#row' + this.oppGuessNumber
      const row = document.querySelector(rowId)
      // changing colour to green and yellow - one loop
      for (let i = 0; i < this.oppNewWord.length; i++) {
        const letterId = this.oppNewWord[i]

        for (let j = 0; j < this.oppNewWord.length; j++) {
          if (this.oppNewWord[j] === this.guessWord[i]) {
            const index = j + 7
            const colId = '#col' + index
            const cell = row.querySelector(colId)
            if(cell.style.backgroundColor != 'rgb(0, 128, 0)'){
              cell.style.backgroundColor = 'rgb(177, 185, 53)'
            }
          } 
        }
        if (this.oppNewWord[i] === this.guessWord[i]) {
          const index = i + 7
          const colId = '#col' + index
          const cell = row.querySelector(colId)
          cell.style.backgroundColor = 'rgb(0, 128, 0)'
        }
        for(let j = 0; j < this.oppNewWord.length; j++){
          const index = j + 7
          const colId = '#col' + index
          const cell = row.querySelector(colId)
          if(cell.style.backgroundColor != 'rgb(0, 128, 0)' && cell.style.backgroundColor != 'rgb(177, 185, 53)'){
            cell.style.backgroundColor = 'rgb(105, 105, 105)'
          }
        }
        
      }
    }
  }

  // reset(){
  //   this.newWord = ''
  //   this.guessNumber = 1
  //   for (let i = 1; i < 6; i++) {
  //     const rowId = '#row' + 1
  //     const row = document.querySelector(rowId)
  //     for (let j = 0; i < 12; i++) {
  //       console.log(i);
  //     }
  //   }

  // }

  updateGrid() {
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

// socket functions
// this changed what is inside of the function
function appendMessage(message) {
  const messageElement = document.getElementById('text-container')
  messageElement.innerText = message
}

// Aquire word from .ejs file and server
const test = document.getElementsByClassName('wordVal')
const testValue = test[0].dataset.testValue
const wordle = new Wordle(testValue.replace(/['"]+/g, '').toUpperCase())

const backBtn = document.getElementById('backBtn')
// backBtn.setAttribute("hidden", "hidden");
const winMsg = document.getElementById('winMsg')
// winMsg.setAttribute("hidden","hidden");
const loseMSg = document.getElementById('loseMsg')
// loseMSg.setAttribute("hidden", "hidden");

console.log(wordle.guessWord)


const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', { name: name, word: wordle.guessWord })

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('incoming-word', word => {
  //here is where we do the wordle thing.
  wordle.oppNewWord = word.message
  wordle.oppGuessNumber = word.guess
  wordle.oppColourWord()
})

socket.on('user-connected', data => {
  appendMessage(`${data.name} connected: GuessWord updated.`)
  wordle.guessWord = data.word
})

const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
  button.addEventListener('click', e => {
    switch (button.innerText) {
      case 'DEL':
        wordle.deleteLetter()
        wordle.updateGrid()
        break
      case 'ENTER':
        // just a test. 
        wordle.oppColourWord()
        fetch('/check', {
          method: 'POST',
          headers: {
            Authorization: 'wordcheck',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            word: wordle.newWord.toLowerCase()
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.truth) {
              // where the socket features happen
              const message = wordle.newWord
              socket.emit('send-word', { message: message, guess: wordle.guessNumber })
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
            }
            else {
              alert('Not a word')
            }
          });
        break
      case 'Return Home':
        // TODO code that sends user back to gamemode selection screen
        break
      case 'Send':
        e.preventDefault()
        const message = messageInput.value
        appendMessage(`You: ${message}`) // appends on your side
        socket.emit('send-chat-message', message)
        messageInput.value = ''
        break
      default:
        wordle.appendLetter(button.innerText)
        wordle.updateGrid()
    }
  })
})


// module.exports = { Wordle }
