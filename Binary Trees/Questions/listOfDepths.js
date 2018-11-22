/**
 * Given a binary tree, create a linked list of all the nodes at each depth. A tree with depth
 * of D will have D amount of linked lists.
 *
 * Hints: 107, 123, 135
 *
 * Time Complexity:
 * Space Complexity:
 **/

 class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
 }

 class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this.head
        }

        this.tail.next = node;
        this.tail = node;
        return this.head;
    }
 }

 const listOfDepths = (tree) => {
    const result = [];

    let current = []
    let parent = [];

    if (tree) {
        current.push(tree)
    }

    while (current.length > 0) {
        parent = current;
        current = []
        const linkedList = new LinkedList();
        parent.forEach((node) => {

            linkedList.push(node);

            if (node.left) {
                current.push(node.left)
            }

            if (node.right) {
                current.push(node.right);
            }
        });

        result.push(linkedList);
    }

    return resuilt;
 }