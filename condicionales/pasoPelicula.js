const starWars8 = 'Star Wars 8 - The Last Jedi'
const pgStarWars8 = 13

const nameCarlos = 'Carlos'
let ageCarlos = 39

const nameFede = 'Federico'
let ageFede = 12

function canWatchStarWars8(name, age, isWithAdult) {
    if (age >= pgStarWars8) {
        alert(`${name} Puede pasar a ver ${starWars8}`)
    } else if (isWithAdult == true) {
        alert(`${name} puede pasar a ver ${starWars8}.  Aunque su edad es ${age}, se encuentra acompañado por un adulto.`)
    } else {
        alert(`${name} no tiene la edad minima Requerida. su edad es ${age} y la edad minima es ${pgStarWars8}`)
    }
}

canWatchStarWars8(nameCarlos, ageCarlos)
canWatchStarWars8(nameFede, ageFede, true)