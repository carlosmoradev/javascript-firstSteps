class Toggable {
    constructor(element) {
        // Inicializar el estado interno
        this.el = this.el
        this.el.innerHTML = 'Off'
        this.activated = false

    }
    onClick() {
        //Cambiar el estado
        this.activated = !this.activated
        this.toogleText()
    }

    toggleText() {
        //Cambiar el texto
        this.element.innerHTML = this.activated ? 'On' : 'Off'
    }
}

const button = document.getElementById('boton')
const miBoton = new toggable(buton)