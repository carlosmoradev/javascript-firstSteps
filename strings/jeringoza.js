function minMay(str) {
    let inverso = ''

    let capitalize = true

    for (let i = 0; i < inverso.length; i++) {

        let letra = str.charAt(i)
        inverso += capitalize ? letra.toUpperCase() : letra.toLowerCase()
        capitalize = !capitalize

    }
    return inverso

}

function jeringoza(str) {
    let translation = str
    let inverso = str.split('').reverse().join('')

    if (inverso === translation) {

        console.log(`Que curioso: ${translation} es un palíndromo!.`);
        // return inverso.split('');

        return minMay(translation)

    } else {

        //Aplicar primer condicion

        if (str.toLowerCase().endsWith('ar')) { //obliga al string a quedar en minuscula y pregunta si termina en "ar"
            translation = str.slice(0, -2) //La funcion slice() permite cortar caracteres
        }

        // Aplicar segunda condición

        if (str.toLowerCase().startsWith('z')) { //Consulta si la palabra comienza por "z"
            translation += 'pe'
        }

        //Aplicar tercera condicion

        if (translation.length >= 10) {
            let firstHalf = translation.slice(0, translation.length / 2) //calcula la mitad de letras desde la primera posicion
            let secondHalf = translation.slice(translation.length / 2) //toma la mitad siguiente del string

            translation = `${firstHalf}-${secondHalf}`
        }

        return translation.toLowerCase()
    }
}


console.log(jeringoza("PARADIGMAR"))
console.log(jeringoza("ZORRO"))
console.log(jeringoza("ZARPAR"))
console.log(jeringoza("ZARRAPASTRORIZACION"))
console.log(jeringoza("SOMETEMOS"))