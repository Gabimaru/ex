const sortAscend = (nbr) => {
    return nbr.sort((el1, el2) => el1 - el2)
}

console.log(sortAscend([99, 100, 101, 1])) // returns [1, 100, 99, 101]

// Enoncé
/*
Ecrivez une fonction sortAscend qui prend comme paramètre une liste et classe cette list par ordre croissant.

sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101]
*/
