// Creating a Wordle class
class Wordle {
    constructor() {
        this.newWord = ''
        this.guessNumber = 1;
    }

    appendLetter(letter) {
        // added in functionality such that words can't be longer than five words
        if (this.newWord.length < 5) {
            this.newWord = this.newWord + letter
        } else {
            alert("Word Too Long")
        }
    }

    enterWord() {
        // have to check size of word
        if (this.newWord.length < 5) {
            alert("Word Too short")
        } else {
            //Updating the guessNumber
            this.guessNumber = this.guessNumber + 1;
            this.newWord = '';
        }
    }

    updateGrid() {
        
        let row = document.querySelector('#row1')
        let cell = row.querySelector('#col1')
        cell.innerText = this.newWord[this.newWord.length-1]
        console.log(this.newWord)
    }
}
const wordle = new Wordle()

const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        wordle.appendLetter(button.innerText);
        wordle.updateGrid();
    })
})

module.exports = {Wordle};