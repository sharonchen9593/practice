/**
 * Two numbers represented by a linked list. Each node in the linked list is a single digit.
 * Digits are stored in reverse order so that the 1's place is at the head of the list. Write a
 * function that adds the two numbers together and returns the sum.
 *
 * Example:
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). 617 + 295
 * Output: 2 -> 1 -> 9. 912
 *
 * Follow up: What if digits are stored in forward order
 *
 * Hints: 7, 30, 71, 95, 109
 *
 * Time Complexity:
 * Space Complexity:
 **/

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        }
    }
}

const sumList = (list1, list2, carry, result) => {
    const value1 = list1.value;
    const value2 = list2.value;
    let remainder = 0;
    if (value1 || value2) {
        const sum = value1 + value2 + carry;
        remainder = sum % 10;
        const digit = Math.floor(sum/10);
    }

    const node =
}