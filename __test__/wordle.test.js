/**
 * @jest-environment jsdom
 */


//const { test } = require('picomatch');
const {Wordle} = require('../src/wordle')

test('testing constructor', () => {
    const wordle = new Wordle();
    expect(wordle.newWord).toBe('')
    //expect(wordle.guessNumber).toBe(1)
})

test("testing appendLetter function", () => {
    const wordle = new Wordle();
    letter = 'a'
    wordle.appendLetter(letter);
    expect(wordle.newWord).toBe('a');
})

test("Testing enter goes to next line", () => {
    const wordle = new Wordle();
    wordle.newWord = "DUCKS"
    wordle.enterWord();
    expect(wordle.guessNumber).toBe(2);
})

test("Testing enter does not go to next line when word length is 3", () => {
    const wordle = new Wordle();
    wordle.newWord = "SUPE"
    wordle.enterWord();
    expect(wordle.guessNumber).toBe(1);
})

test("Testing enter does not go to next line when word length is 0", () => {
    const wordle = new Wordle();
    wordle.newWord = ""
    wordle.enterWord();
    expect(wordle.guessNumber).toBe(1);
})

test("Testing delete function will remove a letter", () => {
    const wordle = new Wordle();
    wordle.newWord = "duck"
    wordle.deleteLetter();
    expect(wordle.newWord).toBe("duc");
})


