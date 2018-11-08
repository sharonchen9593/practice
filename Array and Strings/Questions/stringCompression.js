/**
 * Perform basic string compression using counts of repeated chars.
 * Ex: 'aaabccccaaa' would become 'a3b1c5a3'
 *
 * Hints: 92, 110
 * 
 * Time Complexity:
 * Space Complexity:
 **/

const compress = (str) => {
    let result = '';
    let previousLetter = str[0];
    let previousLetterCount = 0;
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter === previousLetter) {
            previousLetterCount++;
        } else {
            result = result + previousLetter + previousLetterCount;
            previousLetter = letter;
            previousLetterCount = 1;
        }
    }

    result = result + previousLetter + previousLetterCount;

    return result
}

compress('aaabccccaaa')