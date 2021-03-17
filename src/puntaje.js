const Tiro = require('./tiro')

class ContadorDePuntaje {
    constructor() {
        this.rounds = 10;
        this.opor = 2;
        this.scoreFinal = 0;
    }


    turno(turno) {
        let scoreEnTurno = Tiro.tirar(turno)
        console.log('En round ' + turno + ' : ' + scoreEnTurno + ' puntos');
        this.scoreFinal += scoreEnTurno
    }

    startGame() {
        for (let ronda = 0; ronda < this.rounds; ronda++) {
            this.turno(ronda)
            console.log(this.scoreFinal);
        }
    }

}
module.exports = ContadorDePuntaje;