class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAfter(value, afterValue) {
        if (this.head === null && !afterValue) {
            // if head doesn't exists, assign node to head and tail
            const node = new Node(value)
            this.head = node;
            this.tail = node;
            return this;
        }

        let afterNode = this.exists(afterValue);

        if ((this.head === null && afterValue) || (!afterNode && afterValue)) {
            return this;
        }

        const node = new Node(value, afterNode ? afterNode.next: null);

        if (!afterValue) {
            // if afterValue is null, add to end of the list
            this.tail.next = node;
            this.tail = node;
        } else {
            // if afterValue and head exists
            afterNode.next = node;
            // if afterValue exists, but is equal to the tail;
            if (afterValue === this.tail.value) {
                this.tail = node;
            }
        }

        return this;
    }

    addBefore(value, beforeValue) {
        if (this.head === null && !beforeValue) {
            const node = new Node(value);
            this.head = node;
            this.tail = node;
            return this;
        }

        if (this.head === null && beforeValue) {
            return this;
        }

        let beforeNode = null;
        let prevNode = null;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === beforeValue) {
                beforeNode = currentNode;
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        const node = new Node(value, beforeNode ? beforeNode : this.head );

        if (!beforeValue) {
            this.head = node;
        } else {
            prevNode.next = node;
        }

        return this;
    }

    remove(value) {
        let prevNode = null;
        let currentNode = this.head;
        let removeNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                removeNode = currentNode;
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if (!removeNode) {
            return this;
        }

        if (removeNode.value === this.head.value) {
            this.head = this.head.next;
        }

        if (this.tail.value === removeNode.value) {
            this.tail = prevNode;
        }

        if (removeNode && prevNode) {
            prevNode.next = removeNode.next;
        }

        return this;
    }

    exists(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const print = (list) => {
    let node = list.head;
    let printStatement = '';
    while (node) {
        printStatement += (node.value + ' => ');
        node = node.next;
    }
    console.log(printStatement)
};

const x = new LinkedList();
print(x)
x.remove('A')
print(x)
x.addAfter('A')
print(x)
x.addAfter('C', 'M')
print(x)
x.addAfter('B', 'A')
print(x)
x.addBefore('X', 'B')
print(x)
x.remove('C')
print(x)
x.remove('A')
print(x)
x.remove('B')
print(x)
x.remove('X')
print(x)