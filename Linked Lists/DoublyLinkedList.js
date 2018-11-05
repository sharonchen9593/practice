class DoublyLinkedList {
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

        const node = new Node(value, afterNode ? afterNode.next: null, afterNode || this.tail);

        if (!afterValue) {
            // if afterValue is null, add to end of the list
            this.tail.next = node;
            this.tail = node;
        } else {
            // if afterValue and head exists
            // if afterValue is not the tail assign the previous arrow of the next node to node.
            if (afterValue !== this.tail.value) {
                afterNode.next.prev = node;
            }
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

        let beforeNode = this.exists(beforeValue);

        // if beforeValue is passed in to an empty list or if beforeValue is passed into a list but does not exist in the list.
        if (this.head === null && beforeValue || (!beforeNode && beforeValue)) {
            return this;
        }

        // add to beginning of list if no beforeValue is passed in
        const node = new Node(value, beforeNode ? beforeNode : this.head, beforeNode ? beforeNode.prev : null );

        if (!beforeValue) {
            this.head = node;
        } else {
            beforeNode.prev.next = node;
            beforeNode.prev = node;
        }

        return this;
    }

    remove(value) {
        const removeNode = this.exists(value);

        if (!removeNode) {
            return this;
        }

        if (value !== this.head.value && value !== this.tail.value) {
            removeNode.prev.next = removeNode.next;
            removeNode.next.prev = removeNode.prev;
        }

        if (value === this.head.value && value === this.tail.value) {
            this.head = null;
            this.tail = null;
            return this;
        }


        if (removeNode.value === this.head.value) {
            this.head = this.head.next;
            this.head.prev = null;
        }

        if (this.tail.value === removeNode.value) {
            this.tail = removeNode.prev;
            this.tail.next = null;
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
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

const print = (list) => {
    return;
    let node = list.head;
    let printStatement = '';
    while (node) {
        printStatement += (node.value + ' => ');
        node = node.next;
    }
    console.log("print", printStatement)
};

const printRev = (list) => {

    let node = list.tail;
    let printStatement = '';
    while (node) {
        printStatement += (node.value + ' => ');
        node = node.prev;
    }
    console.log("printRev", printStatement)
};

const x = new DoublyLinkedList();
print(x)
printRev(x)
// console.log(x)
x.remove('A')
print(x)
printRev(x)
// console.log(x)
x.addAfter('A')
print(x)
printRev(x)
// console.log(x)
x.addAfter('C')
print(x)
printRev(x)
// console.log(x)
x.addAfter('B', 'A')
print(x)
printRev(x)
// console.log(x)
x.addBefore('X', 'B')
print(x)
printRev(x)
// console.log(x)
x.remove('B')
print(x)
printRev(x)
// console.log(x)
x.remove('A')
print(x)
printRev(x)
// console.log(x)
x.remove('B')
print(x)
printRev(x)
// console.log(x)
x.remove('C')
print(x)
printRev(x)
// console.log(x)
x.remove('X')
print(x)
printRev(x)