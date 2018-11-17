/**
 * Given a circularly linked list, find the node at the beginning of the loop.
 *
 * Example:
 * Input: a -> b -> c -> d -> e -> c
 * Output: c
 *
 * Hints: 50, 69, 83, 90
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

    add(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this.head;
        }

        this.tail.next = node;
        this.tail = node;
        return this.head
    }

    loopTailTo(node) {
        this.tail.next = node;
    }
}

const x = new LinkedList();

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');

x.add(a)
x.add(b)
x.add(c)
x.add(d)
x.add(e)
x.add(f)
x.add(g)
x.add(h)
x.loopTailTo(d)

const findLoopStart = (list) => {
    let slow = list.head.next;
    let fast = list.head.next.next;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow = list.head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    console.log(slow)
    return slow;
}

findLoopStart(x)