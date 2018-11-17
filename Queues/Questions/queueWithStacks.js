/**
 * Implement Queue using 2 stacks
 *
 * Hints: 15, 32, 43
 *
 * Time Complexity:
 * Space Complexity:
 **/

class Stack {
    constructor() {
        this.list = [];
    }

    push(value) {
        this.list.push();
    }

    pop() {
        return this.list.pop();
    }

    peek() {
        return this.list[this.list.length-1];
    }

    isEmpty() {
        return this.list.length === 0;
    }
}

class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    push(value) {
        this.pushStack.push(value);

        if (this.popStack.isEmpty()) {
            this.addValuesIntoPopStack();
        }
    }

    addValuesIntoPopStack() {
        while(!this.pushStack.isEmpty()) {
            const popped = this.pushStack.pop();
            this.popStack.push(popped);
        }
    }

    pop() {
        if (!this.popStack.isEmpty()) {
            return this.popStack.pop();
        } else {
            this.addValuesIntoPopStack();
            return this.popStack.pop();
        }
    }

    peek() {
        if (!this.popStack.isEmpty()) {
            return this.popStack.peek();
        } else {
            this.addValuesIntoPopStack();
            return this.popStack.peek();
        }
    }
}