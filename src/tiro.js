class Tiro {
    tirar(turno) {

        let pins = 10;
        let tiros = [];
        let isStrike = false;
        let isSpare = false;
        for (var intento = 1; intento <= 2; intento++) {
            var tiro = Math.floor(Math.random() * (pins >= 10 ? 11 : pins + 1));
            pins = pins - tiro;
            if (pins == 0 && intento == 1) {
                isStrike = true;
            } else if (isStrike == false && (pins == 0 && intento != 1)) {
                isSpare = true;
            }
            tiros.push(pins);
        }


        return {
            ronda: turno + 1,
            tiros: tiros.length,
            pinsRestantes: {
                tiro1: tiros[0] == undefined ? 0 : tiros[0],
                tiro2: tiros[1] == undefined ? 0 : tiros[1]
            },
            isStrike: isStrike,
            isSpare: isSpare,
            puntajeFinal: (10 - tiros[0]) + (tiros[0] - tiros[1]),
        };

    }

}

module.exports = Tiro;