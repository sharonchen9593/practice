class Stack {
    constructor() {
        this.list = []
    }
    push(value) {
        this.list.push(value)
        return this.list;
        // returns the entire list
    }

    pop() {
        return this.list.pop();
        //returns the one that's popped off
    }

    peek() {
        return this.list[this.list.length - 1];
        // returns top element
    }

    isEmpty() {
        return this.list.length === 0;
        // returns boolean
    }
}

const x = new Stack();
x.pop(1)
x.push(1)
x.push(2)
x.pop()
x.push(3)
x.peek()
x.isEmpty()
x.pop()
x.pop()
x.pop()
x.isEmpty()