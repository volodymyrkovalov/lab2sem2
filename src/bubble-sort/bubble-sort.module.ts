import { Module } from '@nestjs/common';
import { BubbleSortService } from './bubble-sort.service';
import { BubbleSortController } from './bubble-sort.controller';

@Module({
  controllers: [BubbleSortController],
  providers: [BubbleSortService]
})
export class BubbleSortModule {}
