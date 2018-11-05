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

class GraphLNode {
    constructor(vertex, edges = []) {
        this.vertex = vertex;
        this.edges = edges;
    }
}

class GraphL {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        this.adjList[v] = new GraphLNode;
        return this.adjList;
    }

    addEdge(v1, v2) {
        this.adjList[v1].edges.push(v2);
        this.adjList[v2].edges.push(v1);
        return this.adjList;
    }

    printGraph() {
        const vertices = Object.keys(this.adjList)
        vertices.forEach((v) => {
            console.log(v,  '->', this.adjList[v].edges.join(', '))
    })
    }

    bfsTraversal(v) {
        const visited = {};
        visited[v] = true
        const q = new Queue();
        q.enqueue(v);
        while (!q.isEmpty()) {
            const dqed = q.dequeue();
            console.log(dqed)
            const edges = this.adjList[dqed].edges;
            edges.forEach((edge) => {
                if (!visited[edge]) {
                visited[edge] = true;
                q.enqueue(edge)
            }
        })
        }
    }

    dfsTraversal(v, visited = {}) {
        if (!visited[v]) {
            visited[v] = true;
            console.log(v)
            const edges = this.adjList[v].edges;
            edges.forEach((edge) => {
                if (!visited[edge]) {
                this.dfsTraversal(edge, visited);
            }
        })
        }
    }
}

// const x = new GraphL()
// x.addVertex('a')
// x.addVertex('b')
// x.addVertex('c')
// x.addVertex('d')
// x.addVertex('e')
// x.addVertex('f')
// x.addEdge('a', 'b')
// x.addEdge('a', 'e')
// x.addEdge('a', 'd')
// x.addEdge('b', 'c')
// x.addEdge('d', 'e')
// x.addEdge('c', 'e')
// x.addEdge('c', 'f')
// x.addEdge('e', 'f')

// x.printGraph()

// console.log('bfs')
// x.bfsTraversal('a')
// console.log('dfs')
// x.dfsTraversal('a')

class GraphMNode {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class GraphM {
    constructor() {
        this.adjMat = [];
        this.vertexList = [];
        this.vertexMap = {};
    }

    addVertex(v) {
        const index = this.vertexList.length;
        this.vertexList.push(v);
        this.vertexMap[v] = index;
        this.adjMat.push([])
        let i = 0;
        while (i <= index) {
            if (i < index) {
                this.adjMat[i].push(0);
            }

            this.adjMat[index].push(0);
            i += 1;
        }
        return this.adjMat;
    }

    addEdge(v1, v2) {
        const v1Index = this.vertexMap[v1];
        const v2Index = this.vertexMap[v2];
        this.adjMat[v1Index][v2Index] = 1;
        this.adjMat[v2Index][v1Index] = 1;
        return this.adjMat;
    }

    printGraph() {
        console.log(this.adjMat)
    }

    bfsTraversal(v) {
        const index = this.vertexMap[v];
        const visited = {};
        visited[v] = true
        const q = new Queue();
        q.enqueue(index);
        while (!q.isEmpty()) {
            const dqedIndex = q.dequeue();
            const vertex = this.vertexList[dqedIndex]
            console.log(vertex);
            const edges = this.adjMat[dqedIndex];
            edges.forEach((edge, i) => {
                const edgeVertex = this.vertexList[i]
                if (edge === 1 && !visited[edgeVertex]) {
                visited[edgeVertex] = true;
                q.enqueue(i);
            }
        })
        }
    }

    dfsTraversal(v, visited={}) {
        visited[v] = true;
        console.log(v)
        const index = this.vertexMap[v];
        const edges = this.adjMat[index];
        edges.forEach((edge, i) => {
            const vertex = this.vertexList[i];
        if (edge === 1 && !visited[vertex]) {
            this.dfsTraversal(vertex, visited)
        }
    })
    }
}

// const y = new GraphM()
// y.addVertex('a')
// y.addVertex('b')
// y.addVertex('c')
// y.addVertex('d')
// y.addVertex('e')
// y.addVertex('f')
// y.addEdge('a', 'b')
// y.addEdge('a', 'e')
// y.addEdge('a', 'd')
// y.addEdge('b', 'c')
// y.addEdge('d', 'e')
// y.addEdge('c', 'e')
// y.addEdge('c', 'f')
// y.addEdge('e', 'f')
// y.printGraph()

// y.bfsTraversal('a')
// y.dfsTraversal('a')