// insert, getHighest, deleteHighest

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    getParentIndex(index) {
        return Math.floor(index/2);
    }

    getLeftChildIndex(index) {
        return index * 2;
    }

    getRightChildIndex(index) {
        return index * 2 + 1;
    }

    insert(value, priority) {
        const node = new Node(value, priority);
        this.heap.push(node);

        // bubble up
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        // console.log(currentIndex, parentIndex, this.heap[parentIndex])
        while(this.heap[parentIndex] && this.heap[parentIndex].priority > priority) {
            const parentItem = this.heap[parentIndex];
            const currentItem = this.heap[currentIndex];
            this.heap[parentIndex] = currentItem;
            this.heap[currentIndex] = parentItem;

            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
        return this.heap;
    }

    getLowest() {
        return this.heap[1];
    }

    deleteLowest() {
        const lastNode = this.heap[this.heap.length - 1];
        this.heap[this.heap.length - 1] = null;
        this.heap[1] = lastNode;

        let currentIndex = 1;
        let leftChildIndex = this.getLeftChildIndex(1);
        let rightChildIndex = this.getRightChildIndex(1);

        while ((this.heap[leftChildIndex] && this.heap[currentIndex].priority > this.heap[leftChildIndex].priority) || (this.heap[rightChildIndex] && this.heap[currentIndex].priority > this.heap[rightChildIndex].priority)) {
            if (this.heap[rightChildIndex].priority > this.heap[leftChildIndex].priority) {
                const currentNode = this.heap[currentIndex];
                const childNode = this.heap[leftChildIndex];
                this.heap[currentIndex] = childNode;
                this.heap[leftChildIndex] = currentNode;
                currentIndex = leftChildIndex;
                leftChildIndex = this.getLeftChildIndex(currentIndex);
                rightChildIndex = this.getRightChildIndex(currentIndex);
            } else if (this.heap[leftChildIndex].priority > this.heap[rightChildIndex].priority) {
                const currentNode = this.heap[currentIndex];
                const childNode = this.heap[rightChildIndex];
                this.heap[currentIndex] = childNode;
                this.heap[rightChildIndex] = currentNode;
                currentIndex = rightChildIndex;
                leftChildIndex = this.getLeftChildIndex(currentIndex);
                rightChildIndex = this.getRightChildIndex(currentIndex);
            }
        }

        return this.heap;
    }

    getParentIndex(index) {
        return Math.floor(index/2);
    }

    getLeftChildIndex(index) {
        return index*2;
    }

    getRightChildIndex(index) {
        return index*2+1;
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

const x = new MinHeap();
x.insert(5, 5)
x.insert(2, 2)
x.insert(1,1)
x.insert(3, 3)
x.insert(7, 7)
x.deleteLowest()
x.getLowest()