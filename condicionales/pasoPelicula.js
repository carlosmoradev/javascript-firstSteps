const starWars8 = 'The Last Jedi'
const pgStarWars8 = 13

const nameCarlos = 'Carlos'
const ageCarlos = 39

const nameFede = 'Federico'
const ageFede = 12

function canWatchStarWars8(name, age) {
    if (age < pgStarWars8) {
        alert(`${name} no tiene la edad minima Requerida. su edad es ${age} y la edad minima es ${pgStarWars8}`)
    } else {
        alert(`${name} Puede pasar a ver ${starWars8}`)
    }
}

canWatchStarWars8(nameCarlos, ageCarlos)
canWatchStarWars8(nameFede, ageFede)