/**
 * Determine if a string as all unique chars. Try with no additional data structures.
 *
 * Hints: #44, #117, #132
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 **/

const isUnique = (str) => {
    const arr = [];
    for ( let i = 0; i< str.length; i++) {
        const letter = str[i];
        const index = letter.charCodeAt();
        if (arr[index]) {
            return false;
        }
        arr[index] = true;
    }
    return true;
}

isUnique('hello'); // false
isUnique('helo'); // true