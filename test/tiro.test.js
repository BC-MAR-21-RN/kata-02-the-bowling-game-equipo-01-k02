const { expect } = require("@jest/globals")
const Tiro = require('../src/tiro')
let tiro = new Tiro()

const testRonda = {
    ronda: expect.any(Number),
    tiros: expect.any(Number),
    pinsRestantes: {
        tiro1: expect.any(Number),
        tiro2: expect.any(Number),
    },
    isStrike: expect.any(Boolean),
    isSpare: expect.any(Boolean),
    puntajeFinal: expect.any(Number)
}

test('Retornar datos del tiro como objeto', () => {
    expect(tiro.tirar(0)).toMatchObject(testRonda)
})

test('Retornar numero entre 0 y 10 ', () => {
    expect(tiro.realizarTiro(10)).toBeGreaterThanOrEqual(0);
    expect(tiro.realizarTiro(10)).toBeLessThanOrEqual(10)
})