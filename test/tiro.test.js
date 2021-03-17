const { expect } = require("@jest/globals")
const Tiro = require('../src/tiro')

const testRonda = {
    ronda: expect.any(Number),
    tiros: expect.any(Number),
    pinsRestantes: {
        tiro1: expect.any(Number),
        tiro2: expect.any(Number)
    },
    isStrike: expect.any(Boolean),
    isSpare: expect.any(Boolean),
    puntajeFinal: expect.any(Number)
}

test('Retornar datos del tiro como objeto', () => {
    expect(Tiro.tirar(0)).toMatchObject(testRonda)
})