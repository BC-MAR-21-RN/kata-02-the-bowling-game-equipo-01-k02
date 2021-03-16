const ContadorDePuntaje = require('./src/puntaje')

let miJuego = new ContadorDePuntaje()

miJuego.startGame()


/**
 * 
 * Controlador del juego (10 rondas con suma del puntaje, imprimir en consola)
 * Controlador de tiros (2 tiros, tirar los 10 pins en 1 o 2 trios(strike y spare))
 *  
 * Strike: Si se eliminan los 10 pins en el primer tiro, esta ronda sumará los puntos de los 2 siguientes tiros.
 * Spare: Si se eliminan los 10 pins en los dos tiros, esta ronda sumará los puntos del siguiente tiro.
 * * */