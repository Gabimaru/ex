// NUMBER 1

const count = (min, max, step) => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

count(0, 100, 1)
console.log('###############################')
count(15, 15000, 100)
console.log('###############################')
count(100, 150, 3)

// NUMBER 2
/*
const count = (min, max, step) => {
    for (let counter = min; counter <= max; counter += step) {
        console.log(counter)
    }
}

count(10, 100, 10)
console.log(count)
*/

// Enoncé
/*
Ecrivez une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step.
L'execution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step
*/
