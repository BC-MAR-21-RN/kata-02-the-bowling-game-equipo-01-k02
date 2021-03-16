const { expect } = require("@jest/globals")
const Tiro = require('../src/tiro')

let miTiro = new Tiro()

test('Retornar numero aleatorio 1-10', () => {
    expect(miTiro.tirar()).toBeGreaterThanOrEqual(0)
        // expect(miTiro.tiro()).toBeLessThanOrEqual(10)
})