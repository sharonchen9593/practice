// insert, getHighest, deleteHighest

class Heap {
    constructor(comparator) {
        const defaultComparator =  (a, b) => {
            return a - b;
        };

        this.comparator = comparator || defaultComparator;

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

    push(value) {
        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);

        while(this.heap[parentIndex] && this.comparator(this.heap[parentIndex], value) > 0) {
            const parentItem = this.heap[parentIndex];
            const currentItem = this.heap[currentIndex];
            this.heap[parentIndex] = currentItem;
            this.heap[currentIndex] = parentItem;

            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
        return this.heap;
    }

    peek() {
        return this.heap[1];
    }

    pop() {
        const lastNode = this.heap[this.heap.length - 1];
        const poppedValue = this.heap[1];
        this.heap.pop();

        if (this.heap.length > 1) {
            this.heap[1] = lastNode;
        }


        let currentIndex = 1;
        let leftChildIndex = this.getLeftChildIndex(1);
        let rightChildIndex = this.getRightChildIndex(1);
        let compareLeftChild = (this.heap[leftChildIndex] && this.heap[currentIndex] && this.comparator(this.heap[currentIndex], this.heap[leftChildIndex])  > 0 )
        let compareRightChild = (this.heap[rightChildIndex] && this.heap[currentIndex] && this.comparator(this.heap[currentIndex], this.heap[rightChildIndex]) > 0 );
        while (compareLeftChild || compareRightChild) {
            const comparator = this.heap[rightChildIndex] ? this.comparator(this.heap[rightChildIndex], this.heap[leftChildIndex]) : 1;
            if (comparator > 0) {
                const currentNode = this.heap[currentIndex];
                const childNode = this.heap[leftChildIndex];
                this.heap[currentIndex] = childNode;
                this.heap[leftChildIndex] = currentNode;
                currentIndex = leftChildIndex;
                leftChildIndex = this.getLeftChildIndex(currentIndex);
                rightChildIndex = this.getRightChildIndex(currentIndex);
            } else if (comparator < 0) {
                const currentNode = this.heap[currentIndex];
                const childNode = this.heap[rightChildIndex];
                this.heap[currentIndex] = childNode;
                this.heap[rightChildIndex] = currentNode;
                currentIndex = rightChildIndex;
                leftChildIndex = this.getLeftChildIndex(currentIndex);
                rightChildIndex = this.getRightChildIndex(currentIndex);
            }
            compareRightChild = (this.heap[rightChildIndex] && this.heap[currentIndex] && this.comparator(this.heap[currentIndex], this.heap[rightChildIndex]) > 0 );
            compareLeftChild = (this.heap[leftChildIndex] && this.heap[currentIndex] && this.comparator(this.heap[currentIndex], this.heap[leftChildIndex])  > 0 )
        }
        console.log(poppedValue)
        return poppedValue;
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

const currentLocation = {
    x: 5,
    y: 5,
};

const x = new Heap((a, b) => {
    const aDistance = Math.sqrt(Math.pow(a.x - currentLocation.x, 2) + Math.pow(a.y - currentLocation.y, 2));
const bDistance = Math.sqrt(Math.pow(b.x - currentLocation.x, 2) + Math.pow(b.y - currentLocation.y, 2));

return aDistance - bDistance;
});
x.push({x: 0, y: 0})
x.push({x: 9, y: 9})
x.push({x: 5, y: 5})
x.push({x: 6, y: 6})
x.push({x: 4, y: 4})
x.pop()
x.pop()
x.pop()
x.pop()
x.pop()
x.pop()

// const x = new Heap((a, b) => {
//   return a - b;
// });
// x.push(5)
// x.push(2)
// x.push(1)
// x.push(3)
// x.push(7)
// x.pop()
// x.pop()
// x.pop()
// x.pop()
// x.pop()
// x.pop()
// x.getLowest()

// insert(value)
// pop()
// peek()
// set((a, b) => number) OR new MinHeap

