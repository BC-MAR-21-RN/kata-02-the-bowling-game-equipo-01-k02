class Tiro {
    /*  Controlador de tiros (2 tiros, tirar los 10 pins en 1 o 2 tiros(strike y spare))
     *  
     * Strike: Si se eliminan los 10 pins en el primer tiro, esta ronda sumará los puntos de los 2 siguientes tiros.
     * Spare: Si se eliminan los 10 pins en los dos tiros, esta ronda sumará los puntos del siguiente tiro.*/
    static tirar(turno) {
        console.log('*******************');
        let pins = 10
        for (let intento = 0; intento <= 1; intento++) {
            let tiro = Math.floor(Math.random() * (pins >= 10 ? 10 : pins + 1));
            pins -= tiro;
            console.log('pins restantes', pins)
            if (pins == 0 && intento == 0) {
                console.log('Strike!!')
                return 10
            } else if (pins == 0 && intento == 1) {
                console.log('Spare!!')
                return 10
            }
        }
        return (10 - pins);
    }

}

module.exports = Tiro;