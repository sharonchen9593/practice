/**
 * Decide if one string is a permutation of the other string.
 *
 * Hints: 1, 84, 122, 131
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 **/

const permutation = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const count1 = {};
    const count2 = {};

    for( let i = 0; i< str1.length; i++) {
        const letter1 = str1[i];
        if (!count1[letter1]) {
            count1[letter1] = 0;
        } else {
            count1[letter1]++;
        }

        const letter2 = str2[i];
        if (!count2[letter2]) {
            count2[letter2] = 0;
        } else {
            count2[letter2]++;
        }
    }
    let result = true;
    const letters = Object.keys(count1);
    letters.forEach((letter) => {
        if (count1[letter] !== count2[letter]) {
            result = false;
        }
    })

    return result;
}

permutation('hello', 'olleh'); // true
permutation('hello', 'world'); // false