// Creating a Wordle class
class Wordle {
    constructor() {
        this.newWord = ''
        this.guessNumber = 1;
        this.guessWord = 'SUPER'
        this.win = null;
    }

    gameResult() {
        if (this.guessWord == this.newWord) {
            //alert('Well Done You Win !!!')
            this.win = true;
            //console.log("YOU WIN!")
        }
        if (this.guessNumber == 6 & this.guessWord != this.newWord) {
            //alert("You Have lost The Game :(")
            this.win = false;
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

            //Updating the guessNumber
            this.gameResult();
            this.guessNumber = this.guessNumber + 1;
            this.newWord = '';
        }
    }

    colourWord() {
        if (this.newWord.length < 5) {
            // alert("Word Too short")
        } else {

            // change colour of word... 
            let rowId = '#row' + this.guessNumber
            let row = document.querySelector(rowId)
            // changing colour to green and yellow - one loop
            for (let i = 0; i < this.newWord.length; i++) {
                for (let j = 0; j < this.newWord.length; j++) {
                    if (this.newWord[j] == this.guessWord[i]) {
                        let index = j + 1;
                        let colId = '#col' + index;
                        let cell = row.querySelector(colId);
                        cell.style.backgroundColor = '#b1b935';
                        break;
                    }
                }
                if (this.newWord[i] == this.guessWord[i]) {
                    let index = i + 1;
                    let colId = '#col' + index;
                    let cell = row.querySelector(colId);
                    cell.style.backgroundColor = 'Green';
                }
            }
        }

    }

    updateGrid() {
        let rowId = '#row' + this.guessNumber
        let row = document.querySelector(rowId)

        // filling the cells with letters in the words
        for (let i = 1; i <= 5; i++) {
            let colId = '#col' + i
            let cell = row.querySelector(colId)

            //filling cell with letters from newWord
            if (i <= this.newWord.length) {
                cell.innerText = this.newWord[i - 1]
            } else {
                cell.innerText = '.'
            }
        }
    }
}

const wordle = new Wordle()

let backBtn = document.getElementById("backBtn");
backBtn.setAttribute("hidden", "hidden");
let winMsg = document.getElementById("winMsg");
winMsg.setAttribute("hidden","hidden");
let loseMSg = document.getElementById("loseMsg");
loseMSg.setAttribute("hidden", "hidden");

const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        switch (button.innerText) {
            case 'DEL':
                wordle.deleteLetter();
                wordle.updateGrid();
                break;
            case 'ENTER':
                wordle.colourWord();
                wordle.enterWord();
                if(wordle.win != null){
                    backBtn.removeAttribute("hidden");
                    if(wordle.win == true){
                        winMsg.removeAttribute("hidden");
                    }
                    if(wordle.win == false){
                        loseMSg.removeAttribute("hidden");
                    }
                }
                break;
            case 'Return Home':
                //TODO code that sends user back to gamemode selection screen
                break;
            default:
                wordle.appendLetter(button.innerText);
                wordle.updateGrid();
        }
    })
})

module.exports = { Wordle };