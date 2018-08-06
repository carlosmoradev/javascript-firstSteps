//calcular el cubo de cubo de un numero

let numero = prompt('Ingrese el numero a calcular')
    // let numero = 5

let calcularCubo = (numero) => Math.pow(numero, 3)

console.log(`el cubo de ${numero} es ${calcularCubo(numero)}`)