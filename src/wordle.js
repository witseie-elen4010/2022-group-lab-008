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
            // alert("Word Too Long")
        }
    }

    enterWord() {
        // have to check size of word
        if (this.newWord.length < 5) {
            // alert("Word Too short")
        } else {
            //Updating the guessNumber
            this.guessNumber = this.guessNumber + 1;
            this.newWord = '';
        }
    }

    updateGrid() {
        let rowId = '#row' + this.guessNumber
        let row = document.querySelector(rowId)

        // filling the cells with letters in the words
        for (let i = 1; i<=5; i++) {
            let colId = '#col' + i
            let cell = row.querySelector(colId)
            
            //filling cell with letters from newWord
            if (i <= this.newWord.length) {
                cell.innerText = this.newWord[i-1]
            } else {
                cell.innerText = '.'
            }
        } 
    }
}
const wordle = new Wordle()

const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
    button.addEventListener('click', () => {

        //Three conditionals - 
        //delete - will be implemented at a later stage
        //append - alreadu implemented
        //enter - already implemented
        switch(button.innerText) {
            case 'DEL':
                console.log('deleteFunction')
                break;
            case 'ENTER':
                wordle.enterWord();
                break;
            default:
                wordle.appendLetter(button.innerText);
                wordle.updateGrid();
        }
    })
})

module.exports = {Wordle};