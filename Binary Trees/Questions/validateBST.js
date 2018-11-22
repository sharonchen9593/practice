/**
 * Check if a binary tree is a binary search tree
 *
 * Hints: 35, 57, 86, 113, 128
 *
 * Time Complexity:
 * Space Complexity:
 **/

 const validateBST = (tree) => {
    if (!tree) {
        return true;
    }

    if (tree.left.value > tree.value) {
        return false;
    }

    if (tree.right.value < tree.value) {
        return false;
    }

    const leftTree = validateBST(tree.left);
    const rightTree = validateBST(tree.right);

    if (!leftTree || !rightTree) {
        return false;
    }

    return true;
 }