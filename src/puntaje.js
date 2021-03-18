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
        let result = 0;

        for (const item of finalGame) {
            result = result + item.puntajeFinal
        }

        this.scoreFinal = result;

        console.table(finalGame);
        console.log("Puntaje Final *************************** " + this.scoreFinal + " ***********************************");
    }

    validateRules(rondas) {
        let ronda;
        let tiroExtra;

        for (let i = 0; i < rondas.length; i++) {
            if (rondas[i].isStrike) {
                // if (i == 9) {
                //     tiroExtra = this.tiro.tirar();
                //     console.log(tiroExtra)
                // }
                ronda = rondas[i + 1] == undefined ? 0 : rondas[i + 1].puntajeFinal;
                rondas[i].puntajeFinal = rondas[i].puntajeFinal + ronda;
            } else if (rondas[i].isSpare) {
                // if (i == 9) {
                //     tiroExtra = this.tiro.realizarTiro(10);
                //     rondas[i].pinsRestantes.tiro3 = (10 - tiroExtra);
                // }
                ronda = rondas[i + 1] == undefined ? 0 : (10 - rondas[i + 1].pinsRestantes.tiro1);
                rondas[i].puntajeFinal = rondas[i].puntajeFinal + ronda;
            }
            // ronda = rondas[i + 1] == undefined ? 0 : (10 - rondas[i + 1].pinsRestantes.tiro1);
            // rondas[i].puntajeFinal = rondas[i].puntajeFinal + ronda;
        }


        return rondas;
    }


}
module.exports = ContadorDePuntaje;