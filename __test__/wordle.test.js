/**
 * @jest-environment jsdom
 */


const {Wordle} = require('../src/wordle')

test('testing constructor', () => {
    const wordle = new Wordle();
    expect(wordle.newWord).toBe('')
})

test("testing appendLetter function", () => {
    const wordle = new Wordle();
    letter = 'a';
    wordle.appendLetter(letter);
    expect(wordle.newWord).toBe('a');
})



