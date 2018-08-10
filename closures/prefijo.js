function generaPrefijo(palabra) {
    return function prefijo(prefijo) {
        console.log(`${palabra}${prefijo}`)
    }
}

const prefijoRe = generaPrefijo("Re-")
const prefijoIn = generaPrefijo("In")

prefijoRe("complicado")
prefijoIn("parable")