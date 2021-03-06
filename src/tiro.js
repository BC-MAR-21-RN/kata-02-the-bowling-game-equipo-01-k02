class Tiro {
    realizarTiro(pins) {
        return Math.floor(Math.random() * (pins >= 10 ? 11 : pins + 1))
    }

    tirar(turno) {
        let pins = 10;
        let tiros = [];
        let isStrike = false;
        let isSpare = false;

        for (var intento = 1; intento <= 2; intento++) {
            let tiro = this.realizarTiro(pins);
            pins = pins - tiro;
            if (pins == 0) {
                if (intento == 1) {
                    isStrike = true;
                    tiros.push(pins);
                    break;
                } else {
                    isSpare = true;
                }
            }
            tiros.push(pins);
        }

        return this.resultado(turno, tiros, isStrike, isSpare);
    }

    resultado(turno, tiros, isStrike, isSpare) {
        const result = {
            ronda: turno + 1,
            tiros: tiros.length,
            pinsRestantes: {
                tiro1: tiros[0] == undefined ? null : tiros[0],
                tiro2: tiros[1] == undefined ? null : tiros[1],
            },
            isStrike: isStrike,
            isSpare: isSpare,
            puntajeFinal: tiros[1] != undefined ?
                10 - tiros[1] : 10 - tiros[0]
        };

        return result
    }

}

module.exports = Tiro;