const isPalindrome = (el) => {
    let rev = el.split('').reverse().join('')
    console.log(rev)
    console.log(el)
    return el === rev
}

isPalindrome('tenet') // retruns true
console.log(isPalindrome('tenet'))
isPalindrome('Alyra') // returns false
console.log(isPalindrome('Alyra'))

// Enoncé
/*
Ecrivez une fonction isPalindrome qui prend une string en paramètre.
Cette fonction retourne true si le paramètre est un palindrome sinon retourne false

isPalindrome('tenet') // retruns true
isPalindrome('Alyra') // returns false
*/
