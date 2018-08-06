let base = 5

let height = 7

function triangleArea(base, height) {
    return base * height / 2
}

let triangleAreaArrowFunction = (base, height) => base * height / 2

console.log(`el area de un triangulo de base ${base} y altura ${height} es:  ${triangleArea(base, height)}
en formato de funcion clasica`)

console.log(`el area de un triangulo de base ${base} y altura ${height} es:  ${triangleAreaArrowFunction(base, height)}
en formato de funcion flecha o arrow function`)