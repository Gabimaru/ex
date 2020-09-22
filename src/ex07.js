const calc = (op, x, y) => {
    return `${x} ${op} ${y}`
}

let nb1 = calc('+', 10, 11) // nb1 === 21
console.log(nb1)
let nb2 = calc('-', 6, 4) // nb2 === 2
console.log(nb2)
let nb3 = calc('*', 4, 5) // nb3 === 20
console.log(nb3)
let nb4 = calc('/', 10, 2) // nb4 == 5
console.log(nb4)
