class Tiro {
    constructor() {
            this.pins = 10;
            this.turno = 0;
            this.intento = 0;
            this.puntos = 0;
        }
        /*  Controlador de tiros (2 tiros, tirar los 10 pins en 1 o 2 tiros(strike y spare))
         *  
         * Strike: Si se eliminan los 10 pins en el primer tiro, esta ronda sumará los puntos de los 2 siguientes tiros.
         * Spare: Si se eliminan los 10 pins en los dos tiros, esta ronda sumará los puntos del siguiente tiro.*/
    tirar() {
        const shoot = Math.floor(Math.random() * 11);
        const puntos = (this.pins - shoot)
        if (this.intento == 0 && shoot == 10) { return 0 } else if (shoot < 10) {
            return this.pins - shoot
        }
    }

}

module.exports = Tiro;