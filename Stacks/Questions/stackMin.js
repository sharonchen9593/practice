/**
 * Implement a stack with push, pop and min functions. They should all operate in O(1) time.
 *
 * Hints: 27 59, 78
 *
 * Time Complexity:
 * Space Complexity:
 **/

class Stack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(item) {
        if (this.min.length === 0) {
            this.min.push(item);
        } else if (item <= this.min[this.min.length - 1]) {
            this.min.push(item);
        }
        this.stack.push(item)
        return this.stack;
    }

    pop() {
        const popped = this.stack.pop();
        if (popped === this.min[this.min.length - 1]) {
            this.min.pop();
        }

        return popped;
    }

    getMin() {
        return this.min[this.min.length - 1]
    }
}

const x = new Stack()

x.push(4)
x.push(2)
x.push(1)
x.push(3)
x.push(1)

x.getMin()
x.pop()
x.getMin()
x.pop()
x.getMin()
x.pop()
x.getMin()