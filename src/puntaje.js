const Tiro = require('./tiro')

class ContadorDePuntaje {
    constructor() {
        this.rounds = 10;
        this.opor = 2;
        this.tiro = new Tiro();
    }


    turno() {
        this.tiro.tirar()
    }

    startGame() {
        let ronda = this.round;
        for (let i = 0; i < this.rounds; i++) {
            this.turno()
        }
        ronda++
    }

}
module.exports = ContadorDePuntaje;