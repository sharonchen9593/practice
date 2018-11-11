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

const stack = new Stack();
stack.push(9)
stack.push(6)
stack.push(8)
stack.push(7)
stack.push(2)
stack.push(1)
stack.push(5)
stack.push(4)
stack.push(3)

/**
 * Sort a stack such that the smallest items are on top. can use a temp stack, but can't copy
 * the elements to other data structure. Stack has the following aperations: push, pop, peek,
 * and isEmpty.
 *
 * Time Complexity:
 * Space Complexity:
 **/

const moveLargerToTempStack = (stack, tempStack) => {
    const nextItem = stack.pop();
    tempStack.push(nextItem);
    return;
}

const moveLargerToOriginalStack = (stack, tempStack) => {
    const nextItem = stack.pop();

    while (!tempStack.isEmpty() && tempStack.peek() > nextItem) {
        let tempItem = tempStack.pop();
        stack.push(tempItem);
    }

    tempStack.push(nextItem);
    return;
}

const sortStack = (stack) => {
    const tempStack = new Stack();
    if (tempStack.isEmpty()) {
        const nextItem = stack.pop();
        tempStack.push(nextItem);
    }

    while (!stack.isEmpty()) {
        if (tempStack.peek() <= stack.peek()) {
            moveLargerToTempStack(stack, tempStack);
        }

        if (tempStack.peek() > stack.peek()) {
            // move all numbers larger than stack.peek back to original stack and add the small number to the temp stack.
            moveLargerToOriginalStack(stack, tempStack);
        }
    }

    while (!tempStack.isEmpty()) {
        const tempItem = tempStack.pop();
        stack.push(tempItem);
    }

    return stack;
}

sortStack(stack);