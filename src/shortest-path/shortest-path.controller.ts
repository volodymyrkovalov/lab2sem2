import { Controller, Get } from '@nestjs/common';
import { ShortestPathService, Graph } from './shortest-path.service';

@Controller('shortest-path')
export class ShortestPathController {
  constructor(private shortestPathService: ShortestPathService) {}

  @Get()
  findShortestPath(): string[] {
    const graph: Graph = {
      A: [
        { to: 'B', weight: 3 },
        { to: 'C', weight: 2 },
      ],
      B: [{ to: 'D', weight: 2 }],
      C: [
        { to: 'D', weight: 1 },
        { to: 'E', weight: 4 },
      ],
      D: [
        { to: 'E', weight: 3 },
        { to: 'F', weight: 2 },
      ],
      E: [{ to: 'G', weight: 1 }],
      F: [{ to: 'G', weight: 2 }],
      G: [],
    };
    const startNode = 'A';
    const endNode = 'G';

    const path = this.shortestPathService.findShortestPath(
      graph,
      startNode,
      endNode,
    );
    console.log(
      `Shortest path from ${startNode} to ${endNode}: ${path.join(' -> ')}`,
    );
    return path;
  }
}
