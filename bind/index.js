class Toggable {
    constructor(element) {
        // Inicializar el estado interno
        this.element = this.el
        this.element.innerHTML = 'Off'
        this.activated = false
        this.element.addEventListener('click', this.onClick)

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