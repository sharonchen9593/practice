/**
 * Check if a binary tree is balanced. (Heights of two subtrees never differ by more than 1)
 *
 * Hints: 21, 33, 49, 105, 124
 *
 * Time Complexity:
 * Space Complexity:
 **/

const isBalancedHelper = (tree) => {
    let leftDepth = 0;
    let rightDepth = 0;

    if (tree.left) {
        leftDepth = isBalanced(tree.left) + 1;
    }

    if (tree.right) {
        rightDepth = isBalanced(tree.right) + 1;
    }

    if (Math.abs(leftDepth - rightDepth) > 1) {
        return {
            balanced: false,
            depth: Math.max(leftDepth.depth, rightDepth.depth),
        };
    }

    if (!leftDepth || !rightDepth) {
        return {
            balanced: false,
            depth: Math.max(leftDepth.depth, rightDepth.depth),
        };
    }

    return {
        balanced: true,
        depth: Math.max(leftDepth.depth, rightDepth.depth),
    };
}


const isBalanced = (tree) => {
    const leftDepth = isBalancedHelpter(tree.left);
    const rightDepth = isBalancedHelpter(tree.right);

    if (!leftDepth.balanced || !rightDepth.balanced) {
        return false;
    }

    if (Math.abs(leftDepth.depth - rightDepth.depth) > 1) {
        return false;
    }

    return true;
}
