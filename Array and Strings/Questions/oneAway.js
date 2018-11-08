/**
 * Check if two strings are one edit away from each other. (replace, insert, remove)
 *
 * Example:
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 *
 * Hints: 23, 97, 130
 *
 * Time Complexity: O(N);
 * Space Complexity: O(N);
 **/

const oneAway = (str1, str2) => {
    // if length is more than 1 different, then return false
    const length1 = str1.length;
    const length2 = str2.length;

    const lengthDiff = Math.abs(length1-length2);

    if (lengthDiff > 1) {
        return false;
    }
    // if same length, check if replace
    if (lengthDiff === 0) {
        return isReplace(str1, str2);
    }
    // if one length away, check insert or remove
    if (lengthDiff ===1) {
        return isInsertOrRemove(str1, str2);
    }
}

const isInsertOrRemove = (str1, str2) => {
    const longString = str1.length > str2.length ? str1: str2;
    const shortString = str1.length < str2.length ? str1: str2;

    let shortIndex = 0;
    let difference = 0;

    for (let longIndex = 0; longIndex < longString.length; longIndex++) {
        const shortLetter = shortString[shortIndex];
        const longLetter = longString[longIndex];
        if (shortLetter === longLetter) {
            shortIndex++;
        } else if (shortLetter !== longLetter && difference < 1) {
            difference++
        } else if (shortLetter !== longLetter && difference >= 1) {
            return false;
        }
    }

    return true;
}

const isReplace = (str1, str2) => {
    let diff = 0;
    for (let i = 0; i<str1.length; i++) {
        const letter1 = str1[i];
        const letter2 = str2[i];

        if (letter1 !== letter2 && diff < 1) {
            diff++;
        } else if (letter1 !== letter2 && diff >= 1 ) {
            return false;
        }
    }

    return true;
}

oneAway('pale', 'ple') // true
oneAway('pales', 'pale') // true
oneAway('pale', 'bale') // true
oneAway('pale', 'bake') // false
oneAway('pal', 'pales') // false