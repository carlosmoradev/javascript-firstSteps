function Punto(x, y) {

    this.x = x
    this.y = y

}

const p1 = new Punto(0, 4) //new crea un nuevo objeto


const p2 = {
    x: 3,
    y: 0
}

function distancia(p1, p2) {
    const x = p1.x - p2.x
    const y = p1.y - p2.x

    return Math.sqrt(x * x + y * y)
}

console.log(distancia(p1, { x: 20, y: -7 }).toFixed(2))