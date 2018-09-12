// add vertex(v), add edge(v1, v2), print graph
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const node = new Node(value, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        return this;
    }

    dequeue() {
        const dqed = this.head ? this.head.value : null;
        this.head = this.head ? this.head.next : null;
        if (this.head === null) {
            this.tail = null;
        }
        return dqed;
    }

    isEmpty() {
        return this.head === null;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        this.adjList[v] = [];
        return this.adjList
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
        return this.adjList
    }

    printGraph() {
        const vertices = Object.keys(this.adjList)
        vertices.forEach((v) => {
            console.log(v,  '->', this.adjList[v].join(', '))
    })
    }

    bfsTraversal(v) {
        const visited = {};
        visited[v] = true
        const q = new Queue();
        q.enqueue(v);
        while (!q.isEmpty()) {
            const dqed = q.dequeue();
            const edges = this.adjList[dqed];
            edges.forEach((edge) => {
                if (!visited[edge]) {
                visited[edge] = true;
                q.enqueue(edge)
            }
        })
        }
    }
}

dfsTraversal = (v) => {

}

const x = new Graph()
x.addVertex('a')
x.addVertex('b')
x.addVertex('c')
x.addVertex('d')
x.addVertex('e')
x.addVertex('f')
x.addEdge('a', 'b')
x.addEdge('a', 'e')
x.addEdge('a', 'd')
x.addEdge('b', 'c')
x.addEdge('d', 'e')
x.addEdge('c', 'e')
x.addEdge('c', 'f')
x.addEdge('e', 'f')

x.bfsTraversal('a')