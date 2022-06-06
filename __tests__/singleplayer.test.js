/**
 * @jest-environment jsdom
 */
// const { test } = require('picomatch');

jest.mock('../views/singleplayer.ejs')
document.body.innerHTML = `
<div class='wordVal' data-test-value='<%= JSON.stringify('words') %>'></div>
  `
const { Wordle } = require('../public/singleplayer.js')

test('testing constructor', () => {
  const wordle = new Wordle()
  expect(wordle.newWord).toBe('')
  // expect(wordle.guessNumber).toBe(1)
})

test('testing appendLetter function', () => {
  const wordle = new Wordle()
  letter = 'a'
  wordle.appendLetter(letter)
  expect(wordle.newWord).toBe('a')
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
