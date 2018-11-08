/**
 * Replace all spaces in a string with '%20'
 *
 * Example:
 * Input: "Mr John Smith     ", 13
 * Output: "Mr%20John%20Smith"
 *
 * Hints: 53, 118
 *
 * Time Complexity:
 * Space Complexity:
 **/

const urlify = (str) => {
    let arr = str.split(' ');
    arr = arr.filter((word) => {
        if (word !== '') {
            return word;
        }
    })
    return arr.join('%20')
}

urlify('Mr John Smith     ')