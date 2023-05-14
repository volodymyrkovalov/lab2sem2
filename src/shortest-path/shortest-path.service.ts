import { Injectable } from '@nestjs/common';

interface Edge {
  to: string;
  weight: number;
}

export interface Graph {
  [key: string]: Edge[];
}

interface DistanceCalculator {
  calculateDistance(weight: number, currentDistance: number): number;
}

class DijkstraDistanceCalculator implements DistanceCalculator {
  calculateDistance(weight: number, currentDistance: number): number {
    return currentDistance + weight;
  }
}

class BellmanFordDistanceCalculator implements DistanceCalculator {
  calculateDistance(weight: number, currentDistance: number): number {
    return currentDistance === Infinity ? weight : currentDistance + weight;
  }
}

@Injectable()
export class ShortestPathService {
  private distanceCalculator: DistanceCalculator =
    new DijkstraDistanceCalculator();

  setDistanceCalculator(distanceCalculator: DistanceCalculator): void {
    this.distanceCalculator = distanceCalculator;
  }

  findShortestPath(graph: Graph, startNode: string, endNode: string): string[] {
    const distances = {};
    const visited = {};
    const previous = {};

    for (const node in graph) {
      distances[node] = Infinity;
    }
    distances[startNode] = 0;

    while (true) {
      let closestNode = null;
      let closestDistance = Infinity;

      for (const node in graph) {
        const distance = distances[node];
        if (!visited[node] && distance < closestDistance) {
          closestNode = node;
          closestDistance = distance;
        }
      }

      if (closestNode === null) {
        break;
      }

      visited[closestNode] = true;

      for (const edge of graph[closestNode]) {
        const distance = this.distanceCalculator.calculateDistance(
          edge.weight,
          distances[closestNode],
        );
        if (distance < distances[edge.to]) {
          distances[edge.to] = distance;
          previous[edge.to] = closestNode;
        }
      }
    }

    const path = [endNode];
    let previousNode = endNode;

    while (previousNode !== startNode) {
      previousNode = previous[previousNode];
      path.unshift(previousNode);
    }

    return path;
  }
}
