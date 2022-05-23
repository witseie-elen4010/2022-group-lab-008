// Creating a Wordle class
class Wordle {
    constructor() {
        this.newWord = ''
    }

    appendLetter(letter) {
        this.newWord = this.newWord + letter
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