const nombre = 'Carlos'
const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

function correr() {
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min)) + min //Math.random() devuelve un valor entre 0 y 1
        //Math.floor() redondea al valor inferior
}

let totalKms = 0

const length = dias.length
for (let i = 0; i < length; i++) {
    const kms = correr()
    totalKms = totalKms + kms
    console.log(`El dia ${dias[i]} ${nombre} corrió  ${kms} kms.`)
}

const promedioKms = totalKms / dias.length
console.log(`\n En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} \n`)