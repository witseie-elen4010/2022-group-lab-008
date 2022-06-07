/**
 * @jest-environment jsdom
 */
// const { test } = require('picomatch');


//Mock singlePLayer.ejs file
jest.mock('../views/singlePlayer.ejs')
document.body.innerHTML = `
<div class='wordVal' data-test-value='<%= JSON.stringify('words') %>'></div>
<div id="GuessGrid" class="Guess Grid mt-5">
      <div id="row1" class="row text-center justify-content-center">
        <div id="col1" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;" >
          .
        </div>
        <div id="col2" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;">
          .
        </div>
        <div id="col3" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;">
          .
        </div>
        <div id="col4" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;">
          .
        </div>
        <div id="col5" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;">
          .
        </div>
      </div>
      <div id="row2" class="row text-center justify-content-center">
        <div id="col1" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;;" >
          .
        </div>
        <div id="col2" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;">
          .
        </div>
        <div id="col3" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;">
          .
        </div>
        <div id="col4" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col5" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
      </div>
      <div id="row3" class="row text-center justify-content-center">
        <div id="col1" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;" >
          .
        </div>
        <div id="col2" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col3" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col4" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col5" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
      </div>
      <div id="row4" class="row text-center justify-content-center">
        <div id="col1" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;" >
          .
        </div>
        <div id="col2" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col3" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col4" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col5" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
      </div>
      <div id="row5" class="row text-center justify-content-center">
        <div id="col1" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;" >
          .
        </div>
        <div id="col2" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col3" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col4" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col5" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
      </div>
      <div id="row6" class="row text-center justify-content-center">
        <div id="col1" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff;" >
          .
        </div>
        <div id="col2" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col3" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col4" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
        <div id="col5" class="col-1" style = "border:2px solid rgb(88, 86, 86); background-color: #ffffff">
          .
        </div>
      </div>
    </div>
    div class="Keyboard mt-5">
      <div  class="row text-center justify-content-center">
        <div class="col">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button id="Q" type="button" class="btn btn-secondary">Q</button>
            <button id="W" type="button" class="btn btn-secondary">W</button>
            <button id="E" type="button" class="btn btn-secondary">E</button>
            <button id="R" type="button" class="btn btn-secondary">R</button>
            <button id="T" type="button" class="btn btn-secondary">T</button>
            <button id="Y" type="button" class="btn btn-secondary">Y</button>
            <button id="U" type="button" class="btn btn-secondary">U</button>
            <button id="I" type="button" class="btn btn-secondary">I</button>
            <button id="O" type="button" class="btn btn-secondary">O</button>
            <button id="P" type="button" class="btn btn-secondary">P</button>
          </div>
        </div>
      <!-- so here is where we add out identifiers -->
      </div>
      <div class="row text-center justify-content-center">
        <div class="col">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button id="A" type="button" class="btn btn-secondary">A</button>
            <button id="S" type="button" class="btn btn-secondary">S</button>
            <button id="D" type="button" class="btn btn-secondary">D</button>
            <button id="F" type="button" class="btn btn-secondary">F</button>
            <button id="G" type="button" class="btn btn-secondary">G</button>
            <button id="H" type="button" class="btn btn-secondary">H</button>
            <button id="J" type="button" class="btn btn-secondary">J</button>
            <button id="K" type="button" class="btn btn-secondary">K</button>
            <button id="L" type="button" class="btn btn-secondary">L</button>
          </div>
        </div>
      </div>
      <div class="row text-center justify-content-center">
        <div class="col">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">ENTER</button>
            <button id="Z" type="button" class="btn btn-secondary">Z</button>
            <button id="X" type="button" class="btn btn-secondary">X</button>
            <button id="C" type="button" class="btn btn-secondary">C</button>
            <button id="V" type="button" class="btn btn-secondary">V</button>
            <button id="B" type="button" class="btn btn-secondary">B</button>
            <button id="N" type="button" class="btn btn-secondary">N</button>
            <button id="M" type="button" class="btn btn-secondary">M</button>
            <button type="button" class="btn btn-secondary">DEL</button>
          </div>
        </div>
      </div>
    </div>

`
require('../public/singleplayer.js')
const $ = require('jquery');
const { Wordle } = require('../public/singleplayer.js')

test('testing constructor', () => {
  const wordle = new Wordle()
  expect(wordle.newWord).toBe('')
  // expect(wordle.guessNumber).toBe(1)
})

test('testing appendLetter function', () => {
  const wordle = new Wordle()
  letter = 'A'
  wordle.appendLetter(letter)
  expect(wordle.newWord).toBe('A')
})

test('Testing enter goes to next line', () => {
  const wordle = new Wordle()
  wordle.newWord = 'DUCKS'
  wordle.enterWord()
  expect(wordle.guessNumber).toBe(2)
})

test('Testing enter does not go to next line when word length is 3', () => {
  const wordle = new Wordle()
  wordle.newWord = 'SUPE'
  wordle.enterWord()
  expect(wordle.guessNumber).toBe(1)
})

test('Testing enter does not go to next line when word length is 0', () => {
  const wordle = new Wordle()
  wordle.newWord = ''
  wordle.enterWord()
  expect(wordle.guessNumber).toBe(1)
})

test('Testing delete function will remove a letter', () => {
  const wordle = new Wordle()
  wordle.newWord = 'duck'
  wordle.deleteLetter()
  expect(wordle.newWord).toBe('duc')
})

test('Testing delete function will not remove letter when there is no letter to remove', () => {
  const wordle = new Wordle()
  wordle.newWord = ''
  wordle.deleteLetter()
  expect(wordle.newWord).toBe('')
  expect(wordle.guessNumber).toBe(1)
})

test('Testing the the gameResult function will set win to true when the new word is correct', () => {
  const wordle = new Wordle('SUPER')
  wordle.newWord = 'SUPER'
  wordle.gameResult()
  expect(wordle.win).toBe(true)
})

test('Testing the the gameResult function will set win to false when the new word is correct and all guesse have been used', () => {
  const wordle = new Wordle()
  wordle.newWord = 'Ducks'
  wordle.guessNumber = 6
  wordle.gameResult()
  expect(wordle.win).toBe(false)
})

test('Update grid can update a single letter cell on the wordle board', () => {
  const wordle = new Wordle()
  wordle.newWord = 'H'
  wordle.updateGrid()
  const row = document.querySelector('#row1')
  const cell = row.querySelector('#col1')

  expect(cell.innerText).toBe('H')
})

test('Update grid can update an entire word on the wordle board', () => {
  const wordle = new Wordle()
  word = 'HELLO'
  wordle.newWord = word
  wordle.updateGrid()

  rowID = '#row1'

  for (let i = 1; i <= 5; i++){
    colID = '#col' + i
    const row = document.querySelector(rowID)
    const cell = row.querySelector(colID)
    expect(cell.innerText).toBe(word.charAt(i-1))

  }
})

test('', () => {
  const wordle = new Wordle()
  wordle.guessWord = 'SUPER'
  wordle.newWord = 'SXXXU'
  wordle.colourWord()

  //Check colour of cell
  //The Cell with the S must be green
  colID = '#col1'
  rowID = '#row1'
  const row = document.querySelector(rowID)
  const cell = row.querySelector(colID)
  expect(cell.style.backgroundColor).toBe('rgb(0, 128, 0)')

  //All the cells with an X must be grey
  for (let i = 2; i < 5; i++){
    colID = '#col' + i
    const row = document.querySelector(rowID)
    const cell = row.querySelector(colID)
    expect(cell.style.backgroundColor).toBe('rgb(105, 105, 105)')
  }

  //The cell with the U must be yellow
  colID = '#col5'
  rowID = '#row1'
  const row1 = document.querySelector(rowID)
  const cell1 = row1.querySelector(colID)
  expect(cell1.style.backgroundColor).toBe('rgb(177, 185, 53)')

  //check colour of keyboard keys
  //S must be Green
  const letterIdS = 'S'
  const letterBtnS = document.getElementById(letterIdS)
  expect(letterBtnS.style.backgroundColor).toBe('rgb(0, 128, 0)')

  //X must be Grey
  const letterIdX = 'X'
  const letterBtnX = document.getElementById(letterIdX)
  expect(letterBtnX.style.backgroundColor).toBe('rgb(105, 105, 105)')

  //U must be yellow
  const letterIdU = 'U'
  const letterBtnU = document.getElementById(letterIdU)
  expect(letterBtnU.style.backgroundColor).toBe('rgb(177, 185, 53)')

})