const { expect } = require("@jest/globals")
const ContadorDePuntaje = require('../src/puntaje')
let puntaje = new ContadorDePuntaje();
puntaje.createGame();

let rondas = puntaje.rondas;

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

test('retornar rondas', () => {
    expect(puntaje.validateRules(rondas)).toEqual(
        expect.arrayContaining([
            testRonda
        ])
    )
})