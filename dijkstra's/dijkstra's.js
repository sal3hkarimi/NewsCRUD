class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2, weight) {
    this.nodes.get(node1).push({ node: node2, weight });
    this.nodes.get(node2).push({ node: node1, weight });
  }

  dijkstra(startNode) {
    const distances = new Map();
    const visited = new Set();
    const queue = [];

    distances.set(startNode, 0);
    queue.push({ node: startNode, distance: 0 });

    while (queue.length > 0) {
      queue.sort((a, b) => a.distance - b.distance);
      const { node, distance } = queue.shift();

      if (visited.has(node)) continue;

      visited.add(node);

      for (const neighbor of this.nodes.get(node)) {
        const newDistance = distance + neighbor.weight;
        if (
          !distances.has(neighbor.node) ||
          newDistance < distances.get(neighbor.node)
        ) {
          distances.set(neighbor.node, newDistance);
          queue.push({ node: neighbor.node, distance: newDistance });
        }
      }
    }

    return distances;
  }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B", 25);
graph.addEdge("A", "C", 35);
graph.addEdge("B", "C", 15);
graph.addEdge("B", "E", 90);
graph.addEdge("C", "B", 50);
graph.addEdge("C", "D", 50);
graph.addEdge("C", "E", 30);
graph.addEdge("D", "E", 60);
graph.addEdge("D", "F", 20);
graph.addEdge("E", "D", 10);
graph.addEdge("E", "F", 70);

const distances = graph.dijkstra("A");
console.log(distances);
