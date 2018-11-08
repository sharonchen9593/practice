/**
 * If an element in an MxN matrix is 0, set the entire row and column to 0.
 *
 * Hints: 17, 74, 102
 *
 * Time Complexity: O(N);
 * Space Complexity: O(1);
 **/

const zeroMatrix = (mat) => {
    const xZeros = {};
    const yZeros = {};

    for (let x = 0; x < mat.length ; x++) {
        const row = mat[x];
        for (let y = 0; y< row.length; y++) {
            const num = row[y];
            if (num === 0) {
                xZeros[x] = true;
                yZeros[y] = true;
            }
        }
    }

    for (let x = 0; x < mat.length ; x++) {
        const row = mat[x];
        for (let y = 0; y< row.length; y++) {
            if(xZeros[x]) {
                mat[x][y] = 0;
            }
            if (yZeros[y]) {
                mat[x][y] = 0;
            }
        }
    }

    return mat
}

zeroMatrix(
    [
        [1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1]
    ]
)