import { Module } from '@nestjs/common';
import { ShortestPathService } from './shortest-path.service';
import { ShortestPathController } from './shortest-path.controller';

@Module({
  controllers: [ShortestPathController],
  providers: [ShortestPathService]
})
export class ShortestPathModule {}
