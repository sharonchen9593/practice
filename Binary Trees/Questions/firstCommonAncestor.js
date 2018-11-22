/**
 * Find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes
 * in a data structure. (not necessarily a BST). Find with access to parent and without access.
 *
 * Hints: 10, 16, 28, 36, 46, 70, 80, 96
 *
 * Time Complexity:
 * Space Complexity:
 **/

 const withParent = (root, a, b) => {
    if (!isInTree(root, a) || !isInTree(root, b)) {
        return null;
    } else if (a === root) {
        return a;
    } else if (b === root) {
        return b;
    }


 }

 const isInTree = (tree, node) => {
    if (tree === node) {
        return true;
    }

    if (!tree) {
        return false;
    }

    const isInLeft = isInTree(tree.left, node);

    const isInRight = isInTree(tree.right, node);

    return isInLeft || isInRight;
 }