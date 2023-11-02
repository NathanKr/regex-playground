import {expect, test} from 'vitest'

test('does israel appear in text - use literal notation',()=>{
    const text = 'does Israel appear in text - case not sensitive';
    const regexPttern = /israel/i; // literal notation
    const israelInPattern = regexPttern.test(text)
    expect(israelInPattern).toBeTruthy()
})

test('does israel appear in text - use RegEx constructor',()=>{
    const text = 'does Israel appear in text - case not sensitive';
    const patternString = 'israel';
    const patternOptions = 'i'

    const regexPttern = RegExp(patternString,patternOptions); // RegExp object
    const israelInPattern = regexPttern.test(text)
    expect(israelInPattern).toBeTruthy()
})

test('match with or : israel or jesrusalem appear',()=>{
    const regexPttern = /israel|jerusalem/i; // literal notation
    const text1 = 'does Israel appear in text - case not sensitive';
    expect(regexPttern.test(text1)).toBeTruthy()
    const text2 = 'does Jerusalem appear in text - case not sensitive';
    expect(regexPttern.test(text2)).toBeTruthy()
    const text3 = 'does TelAviv appear in text - case not sensitive';
    expect(regexPttern.test(text3)).toBeFalsy()

})
