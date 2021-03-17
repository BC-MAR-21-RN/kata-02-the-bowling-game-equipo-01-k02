const Tiro = require("./tiro");

class ContadorDePuntaje {
    constructor() {
        this.rounds = 10;
        this.scoreFinal = 0;
        this.rondas = [];
        this.tiro = new Tiro()
    }

    turno(turno) {
        let scoreEnTurno = this.tiro.tirar(turno);
        this.rondas.push(scoreEnTurno);
    }

    startGame() {
        for (let ronda = 0; ronda < this.rounds; ronda++) {
            this.turno(ronda);
        }

        this.displayScore();
    }

    displayScore() {
        let rondas = this.rondas;
        let finalGame = this.validateRules(rondas)

        console.table(finalGame);
        console.log("Puntaje Final *************************** " + this.scoreFinal + " ***********************************");
    }

    validateRules(rondas) {
        let ronda;

        for (let i = 0; i < this.rondas.length; i++) {
            if (rondas[i].isStrike) {
                ronda = rondas[i + 1] == undefined ? 0 : rondas[i + 1].puntajeFinal;

                rondas[i].puntajeFinal = rondas[i].puntajeFinal + ronda;
            } else if (rondas[i].isSpare) {
                ronda = rondas[i + 1] == undefined ? 0 : (10 - rondas[i + 1].pinsRestantes.tiro1);
                rondas[i].puntajeFinal = rondas[i].puntajeFinal + ronda;
            }
            this.scoreFinal += rondas[i].puntajeFinal;
        }

        return rondas;
    }


}
module.exports = ContadorDePuntaje;