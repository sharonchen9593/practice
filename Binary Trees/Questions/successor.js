/**
 * Find the next node of a given node in a BST. Each node as a link to its parent
 *
 * Hints: 79, 91
 *
 * Time Complexity:
 * Space Complexity:
 **/

 const successor = (node) => {
    if (!node.right && node.parent) {

        if (node.parent.value < node.value) {
            return node.parent.parent
        }

        return node.parent;
    }

    if (!node.right && !node.parent) {
        return null;
    }

    let current = node.right;

    while (current.left) {
        current = current.left;
    }

    return current;
 }