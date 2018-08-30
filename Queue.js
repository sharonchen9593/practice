// enqueue, dequeue, front, rear

class Q {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enQ(value) {
        const node = new Node(value);

        if (!value) {
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
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
            return this;
        }

        this.first = this.first.next;
        return this;
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
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const x = new Q();
x.read();
x.deQ();
x.read();
x.enQ();
x.read();
x.enQ();
x.read();
x.enQ(1)
x.read();
x.enQ(2)
x.read();
x.enQ(3)
x.read();
x.enQ(4)
x.read();
x.deQ();
x.read();
x.deQ();
x.read();
x.deQ();
x.read();
x.deQ();
x.read();
x.deQ();
x.read();
x.enQ(1)
x.read();