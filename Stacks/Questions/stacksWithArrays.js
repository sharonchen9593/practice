/**
 * Use a single array to implement 3 stacks.
 *
 * Hints: 2, 12, 38, 58
 *
 * Time Complexity:
 * Space Complexity:
 **/

class TripleStack {
    constructor(capacity) {
        this.capacity = capacity;
        this.list = [];
        this.sizes = [0,0,0]; // array of 3 indices that tell you the length of each stack;
    }

    push(stackNum, item) {
        if (this.sizes[stackNum - 1] < this.capacity) {
            const firstIndexInStack = (stackNum - 1) * this.capacity;
            const firstEmptyIndex = firstIndexInStack + this.sizes[stackNum - 1];
            this.list[firstEmptyIndex] = item;
            this.sizes[stackNum - 1]++;
        }
        return this.list;
    }

    pop(stackNum) {
        if (!this.isEmpty(stackNum)) {
            const firstIndexInStack = (stackNum - 1) * this.capacity;
            const lastIndexInStack = firstIndexInStack + this.sizes[stackNum - 1] - 1;
            const popped = this.list[lastIndexInStack];
            this.list[lastIndexInStack] = undefined;
            this.sizes[stackNum - 1]--;
            return popped;
        }
        return undefined;
    }

    peek(stackNum) {
        const firstIndexInStack = (stackNum - 1) * this.capacity;
        const lastIndexInStack = firstIndexInStack + this.sizes[stackNum - 1] - 1;
        return this.list[lastIndexInStack];
    }

    isEmpty(stackNum) {
        if (this.sizes[stackNum - 1] === 0) {
            return true;
        }
        return false;
    }
}

const stack = new TripleStack(3)
stack.push(1, 1)
stack.push(2, 4)
stack.push(2, 5)
stack.push(1, 2)
stack.push(1, 3)
stack.push(3, 7)
stack.push(2, 6)
stack.push(3, 8)
stack.push(3, 9)

stack.peek(3)
stack.pop(3)
stack.pop(3)
stack.pop(1)
stack.peek(1)