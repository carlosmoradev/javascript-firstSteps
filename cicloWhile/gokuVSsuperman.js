let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

// function ambosSiguenVivos() {
//     return vidaGoku > 0 && vidaSuperman > 0
// }
const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;
const gokuSigueVivo = () => vidaGoku > 0;

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

let round = 0

while (ambosSiguenVivos()) {
    round
    console.log(`Round: ${round}`)

    let golpeGoku = calcularGolpe()
    let golpeSuperman = calcularGolpe()

    if (golpeGoku > golpeSuperman) {
        //Ataca Goku
        console.log(`Goku ataca a superman con un golpe de ${golpeGoku}`)
        vidaSuperman = vidaSuperman - golpeGoku
        console.log(`Superman queda en ${vidaSuperman} de vida`)

    } else {
        //Ataca Superman
        console.log(`Superman ataca a Goju con un golpe de ${golpeSuperman}`)
        vidaGoku -= golpeSuperman
        console.log(`Goku queda en ${vidaGoku} de vida.`)

    }

}

if (gokuSigueVivo()) {
    console.log(`Goku gano la pelea.  Su vida es de: ${vidaGoku}`)
} else {
    console.log(`El ganador es superman con una vida de ${vidaSuperman}`)
}