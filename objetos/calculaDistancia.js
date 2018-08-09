function Punto(x, y) { //este bloque es un constructor
    this.x = x
    this.y = y
        // return this  //el return sobra porque en este caso js lo aplica automaticaente
}

Punto.prototype.moverEnX = function moverEnX(x) {
    this.x += x
}

Punto.prototype.moverEnY = function moverEnY(y) {
    this.y += y
}

Punto.prototype.distancia = function distancia(p) {
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
}

const p1 = new Punto(0, 4) //new crea un nuevo objeto

const p2 = new Punto(3, 0)


console.log(p1.distancia(p2))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))