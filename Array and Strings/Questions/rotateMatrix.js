/**
 * Given an NxN matrix, rotate the image by 90 degrees. Try doing it in place.
 *
 * Hints: 51, 100
 *
 * Time Complexity:
 * Space Complexity:
 **/

const rotate = (mat) => {
    const layers = Math.floor(mat.length/2);

    for(let x = 0; x < layers; x++) {
        for(let y = 0; y < mat.length - 2; y++) {
            const temp = mat[x][y]
            const firstRotation = move(x, y, temp, mat);
            const secondRotation = move(firstRotation.x, firstRotation.y, firstRotation.temp, mat)
            const thirdRotation = move(secondRotation.x, secondRotation.y, secondRotation.temp, mat)
            const fourthRotation = move(thirdRotation.x, thirdRotation.y, thirdRotation.temp, mat)
        }
    }

    return mat;
}

const move = (x, y, temp, mat) => {
    const newX = y;
    const newY = mat.length - x -1;
    const newTemp = mat[newX][newY];
    mat[newX][newY] = temp;
    return { x: newX, y: newY, temp: newTemp}
}

rotate(
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
    ]
)

/**
 (0, 0) => (0, 3), (0, 1) => (1, 3), (0, 2) => (2, 3), (0, 3) => (3, 3)
 (1, 0) => (0, 2), (1, 1) => (1, 2), (1, 2) => (2, 2), (1, 3) => (3, 1)


 (x, y)

 x = y

 y = length - x

 **/
