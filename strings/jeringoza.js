function jeringoza(str) {
    let translation = str

    //Inicio con la cuarta condicion debido a que no aplicaria para ninguna de las otras condiciones.

    //let inverso = (str) => str.split('').reverse().join('')
    let inverso = str.split('').reverse().join('')

    if (str === inverso) {

        for (let i = 0; i < inverso.length; i++) {

            let letra = inverso[i]
            if (i % 2) {
                letra = letra.toUpperCase()
            }

        }
        return letra

    } else {

        // function minMay(str) {
        //     // let length = str.length
        //     let translation = ''
        //     let capitalize = true

        //     for (let i = 0; i < inverso.length; i++) {
        //         let char = str.charAt(i)
        //         translation += capitalize ? char.toUpperCase() : char.toLowerCase()
        //         capitalize = !capitalize
        //     }
        //     return translation
        // }


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