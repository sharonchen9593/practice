/**
 * Check if a string is a permutation of a palindrome.
 *
 * Example:
 * Input: Tact Coa
 * Output: true (permutations: "taco cat", "atco cta")
 *
 * Hints: 106, 121, 134, 136
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 **/

const palPerm = (str) => {
    const count = {};
    const strLowerCase = str.toLowerCase();
    for (var i = 0; i<strLowerCase.length; i++) {
        const letter = strLowerCase[i];
        if (letter !== ' ') {
            if (!count[letter]) {
                count[letter] = 1
            } else {
                count[letter]++;
            }
        }

    }

    const letters = Object.keys(count);
    let oddLetter = 0;
    let result = true;
    letters.forEach((letter) => {
        if (count[letter]%2 !== 0 && oddLetter < 1) {
            oddLetter++
        } else if(count[letter]%2 !== 0 && oddLetter >= 1) {
            result = false;
        }
    });

    return result;
}

palPerm('Tact Coa') // true
palPerm('tatt ccoa') // false