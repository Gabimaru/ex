// NUMBER 1

const showStars = (nbStars) => {
    for (let i = 1; i <= nbStars; i += 1) {
        console.log('*'.repeat(i))
    }
}

showStars(10)

// NUMBER 2
/*
const showStars = (nbr) => {
    let counter = '*'
    while (counter.length <= nbr) {
        console.log(counter)
        counter += '*'
    }
}

showStars(3)
*/

// Enoncé
/*
Ecrivez une fonction showStars qui prend en paramètre un nombre nbStars et qui affiche sur le terminal comme suit:

showStars(3)

output:

*
**
***

showStars(10)

output:

*
**
***
****
*****
******
*******
********
*********
**********
*/
