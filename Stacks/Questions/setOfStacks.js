/**
 * Implement a SetOfStacks data structure that is composed of multiple stacks and should create
 * a new stack when the previous stack exceeds capacity. Push and pop should behave the same as
 * a single stack.
 *
 * Follow up: Implement popAt(index) to pop at a specific stack
 *
 * Hints: 64, 81
 *
 * Time Complexity:
 * Space Complexity:
 **/


class Node {
    constructor(item, next, previous) {
        this.value = item;
        this.next = next;
        this.prev = previous;
    }
}

class Stack {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    push(item) {
        if (this.size < this.capacity) {
            const node = new Node(item, null, this.tail);
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
        }

        this.size++;
        return this.head;
    }

    pop() {
        if (!this.isEmpty()) {
            const popped = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return popped;
        }
    }

    popLast() {
        if (!this.isEmpty()) {
            const popped = this.head.value;
            this.head = this.head.next;
            if (this.head === null) {
                this.tail === null;
            } else {
                this.head.prev = null;
            }

            this.size--;
            return popped;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}

class SetOfStacks {
    constructor(capacity) {
        this.stacksArr = [];
        this.capacity = capacity;
        const firstStack = new Stack(capacity);
        this.stacksArr.push(firstStack);
    }

    push(item) {
        const lastStack = this.stacksArr[this.stacksArr.length - 1];
        if (!lastStack.isFull()) {
            lastStack.push(item)
        } else {
            const newStack = new Stack(this.capacity);
            newStack.push(item);
            this.stacksArr.push(newStack);
        }

        return this.stacksArr
    }

    pop() {
        const lastStack = this.stacksArr[this.stacksArr.length - 1];
        const popped = lastStack.pop();
        if (lastStack.isEmpty()) {
            this.stacksArr.pop();
        }

        return popped;
    }

    popAt(stackNum) {
        const stack = this.stacksArr[stackNum - 1];
        const popped = stack.pop();

        if (this.stacksArr[this.stacksArr.length - 1].isEmpty()) {
            this.stacksArr.pop();
        }

        if (stackNum < this.stacksArr.length) {
            this.shiftStacks(stackNum);
        }

        return popped;
    }

    shiftStacks(stackNum) {
        while (stackNum < this.stacksArr.length) {
            const nextStack = this.stacksArr[stackNum];
            const last = nextStack.popLast();
            const stack = this.stacksArr[stackNum - 1];
            stack.push(last);
            stackNum++
        }
    }
}

const stack = new SetOfStacks(3);

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(9)

stack.popAt(1);
stack.popAt(1);
stack.popAt(1);
stack.popAt(2);
stack.popAt(2);
stack.popAt(1);