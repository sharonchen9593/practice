/**
 * check if string 2 is a rotation of string 1.
 *
 * Hints: 51, 100
 *
 * Time Complexity:
 * Space Complexity:
 **/

const rotation = (str1, str2) => {
    const repeatStr1 = str1.repeat(2).toLowerCase();
    return repeatStr1.includes(str2.toLowerCase());
}

rotation('sharon', 'harons') // true
rotation('sharon', 'haront') // false