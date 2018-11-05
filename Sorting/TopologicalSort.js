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
        // this.adjList[v2].edges.push(v1);
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

    topologicalSort(visited = {}) {
        const sortedList = [];
        const vertices = Object.keys(this.adjList);
        if (vertices.length > 0) {
            for (var i = 0; i < vertices.length; i++) {
                const vertex = vertices[i];
                const cyclic = this.checkIfCyclic(vertex);
                if (cyclic) {
                    return "graph must be acyclic";
                }
                if (!visited[vertex]) {
                    this.recurseGraph(vertex, visited, sortedList);
                }
            }
        }
        return sortedList.reverse()
    }

    checkIfCyclic(vertex, visited = {}) {
        let cyclic = false;
        if (!visited[vertex]) {
            const newVisited = {...visited}
            newVisited[vertex] = true;
            const edges = this.adjList[vertex].edges;
            for (var i = 0; i < edges.length; i++) {
                const edge = edges[i]
                if (visited[edge]) {
                    cyclic = true;
                    break;
                } else {
                    cyclic = this.checkIfCyclic(edge, newVisited);
                }
            }
        }
        return cyclic;
    }

    recurseGraph(vertex, visited, sortedList) {
        visited[vertex] = true;
        const edges = this.adjList[vertex].edges;
        if (edges.length > 0) {
            edges.forEach((edge) => {
                if (!visited[edge]) {
                this.recurseGraph(edge, visited, sortedList)
            }
        })
        }
        sortedList.push(vertex)
        return sortedList
    }
}

const x = new GraphL();
x.addVertex('a')
x.addVertex('b')
x.addVertex('c')
x.addVertex('d')
x.addVertex('e')
x.addVertex('f')
x.addVertex('g')
x.addVertex('h')
x.addVertex('i')
x.addVertex('j')

x.addEdge('a', 'b')
x.addEdge('a', 'f')
x.addEdge('b', 'h')
x.addEdge('d', 'c')
x.addEdge('d', 'e')
x.addEdge('d', 'h')
x.addEdge('d', 'i')
x.addEdge('e', 'i')
x.addEdge('g', 'a')
x.addEdge('g', 'b')
x.addEdge('g', 'c')
x.addEdge('i', 'c')
x.addEdge('j', 'e')

x.topologicalSort();