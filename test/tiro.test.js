const { expect } = require("@jest/globals")
const Tiro = require('../src/tiro')

let random = Math.floor(Math.round() * 11)
test('Retornar numero aleatorio 1-10', () => {
    expect(Tiro.tirar(random)).toBeGreaterThanOrEqual(0)
    expect(Tiro.tirar(random)).toBeLessThanOrEqual(10)
})