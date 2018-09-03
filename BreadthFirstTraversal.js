class Q {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enQ(treeNode) {
        const node = new Node(treeNode);

        if (!treeNode) {
            return this;
        }

        if (!this.first) {
            this.first = node;
            this.last = node;
            return this;
        }

        this.last.next = node;
        this.last = node;
        return this;
    }

    deQ() {
        const dQed = this.first
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
            return dQed;
        }
        this.first = this.first.next;
        return dQed;
    }

    isEmpty() {
        return this.first === null;
    }

    front() {
        return this.first;
    }

    rear() {
        return this.last;
    }

    read() {
        let currentNode = this.first;
        let output = '';
        while (currentNode) {
            output += (currentNode.value + ' => ');
            currentNode = currentNode.next;
        }

        console.log(output);
    }
}

class Node {
    constructor(treeNode, next) {
        this.treeNode = treeNode;
        this.next = next;
    }
}

class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const node13 = new TreeNode(13);
const node7 = new TreeNode(7);
const node4 = new TreeNode(4);
const node14 = new TreeNode(14, node13);
const node6 = new TreeNode(6, node4, node7);
const node1 = new TreeNode(1);
const node10 = new TreeNode(10, null, node14);
const node3 = new TreeNode(3, node1, node6);
const node8 = new TreeNode(8, node3, node10);

const breadthFirstTraversal = (node) => {
    const q1 = new Q();
    const q2 = new Q();
    const list = [];

    q1.enQ(node);

    let currentQ = q1;
    let nextQ = q2;

    while (!currentQ.isEmpty() || !nextQ.isEmpty()) {
        if (currentQ.isEmpty()) {
            const tempQ = currentQ;
            currentQ = nextQ;
            nextQ = currentQ;
        } else {
            const removed = currentQ.deQ();
            list.push(removed.treeNode.value);
            nextQ.enQ(removed.treeNode.left);
            nextQ.enQ(removed.treeNode.right);
        }
    }

    return list;
}

breadthFirstTraversal(node8)

