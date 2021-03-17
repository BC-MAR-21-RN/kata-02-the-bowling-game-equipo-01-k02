const Tiro = require("./tiro");

class ContadorDePuntaje {
    constructor() {
        this.rounds = 10;
        this.scoreFinal = 0;
        this.rondas = [];
    }


    turno(turno) {
        let scoreEnTurno = Tiro.tirar(turno);
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

        for (let i = 0; i < this.rondas.length; i++) {
            if (rondas[i].isStrike) {
                rondas[i].puntajeFinal = rondas[i].puntajeFinal + rondas[i + 1].puntajeFinal;
            } else if (rondas[i].isSpare) {
                rondas[i].puntajeFinal = rondas[i].puntajeFinal + (10 - rondas[i + 1].pinsRestantes.tiro1);
            }
            this.scoreFinal += rondas[i].puntajeFinal;
        }
        console.table(rondas);
        console.log("Puntaje Final *************************** " + this.scoreFinal + " ***********************************");
    }


}
module.exports = ContadorDePuntaje;