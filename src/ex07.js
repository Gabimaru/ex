const add = (nb1, nb2) => {
    return nb1 + nb2
}

const sub = (nb1, nb2) => {
    return nb1 - nb2
}

const mul = (nb1, nb2) => {
    return nb1 * nb2
}

const div = (nb1, nb2) => {
    return nb1 / nb2
}

const calc = (op, nb1, nb2) => {
    switch (op) {
        case '+':
            return add(nb1, nb2)
        case '-':
            return sub(nb1, nb2)
        case '*':
            return mul(nb1, nb2)
        case '/':
            return div(nb1, nb2)
        default:
            console.log('Error: Unknown operator')
    }
}
console.log(calc('+', 10, 11))
console.log(calc('-', 6, 4))
console.log(calc('*', 4, 5))
console.log(calc('/', 10, 2))
console.log(calc('%', 10, 5))

// Enoncé
/*
En partant de l'exercice précédent ecrivez une fonction calc qui prend 3 paramètres:
1 string qui correspondra à l'opérateur arithmétique et 2 nombres sur lesquels on appliquera l'opérateur.
La fonction calc devra utiliser les fonctions définies dans l'exercice précédent.

let nb1 = calc('+', 10, 11) // nb1 === 21
let nb2 = calc('-', 6, 4) // nb2 === 2
let nb3 = calc('*', 4, 5) // nb3 === 20
let nb4 = calc('/', 10, 2) // nb4 == 5
*/
