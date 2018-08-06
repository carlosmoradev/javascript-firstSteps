// Archivo que busca realizar manipulacion de strigs en base a cuatro reglas de claradas

// 1. si la palabra termina con "ar", se le quitan esas dos letras.Ejm geringoza(programar) -- > programar

// 2. Si la palabra inicia con Z, se le añade "pe"
// al final.Ejm geringoza(zorro) -- > zorrope
// geringoza(zarpar) -- > zarppe-- > aplica tambien regla 1.

// 3. Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y agregar un guion Medio
// ejm: geringoza(abecedario) -- > abece - dario

// 4. Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.

function geringoza(str) {
    let translation = str

    //Aplicar primer condicion

    if (str.toLowerCase().endsWith('ar')) { //obliga al string a quedar en minuscula y pregunta si termina en "ar"
        translation = str.slice(0, -2) //La funcion slice() permite cortar caracteres
    }

    // Aplicar segunda condición

    if (str.toLowerCase().startsWith('z')) { //Consulta si la palabra comienza por "z"
        translation += 'pe'
    }

    return translation.toLowerCase()
}

console.log(geringoza("PARADIGMAR"))
console.log(geringoza("ZORRO"))
console.log(geringoza("ZARPAR"))