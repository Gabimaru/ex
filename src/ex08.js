function isPalindrome(el) {
    let rev = el.split('').reverse().join('')

    return el === rev ? true : false
}
console.log()

isPalindrome('tenet') // retruns true

isPalindrome('Alyra') // returns false
