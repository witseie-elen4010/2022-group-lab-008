/**
 * @jest-environment jsdom
 */
// const { test } = require('picomatch');



//'use strict';

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



