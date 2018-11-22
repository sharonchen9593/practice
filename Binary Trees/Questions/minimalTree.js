/**
 * Given a sorted array with unique integer elements, create a binary tree with minimal height
 *
 * Hints: 19, 73, 116
 *
 * Time Complexity:
 * Space Complexity:
 **/

 const minimalTree = (arr, tree = new BinaryTree()) => {
    const mid = Math.floor(arr.length / 2);
    const value = arr[mid];

    tree.push(value);

    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid + 1, arr.length);

    if (leftArr.length > 0) {
        minimalTree(leftArr);
    }

    if (rightArr.length > 0) {
        minimalTree(rightArr);
    }
 };