import { Module } from '@nestjs/common';
import { BubbleSortSingleton } from './bubble-sort.service';
import { BubbleSortController } from './bubble-sort.controller';

@Module({
  controllers: [BubbleSortController],
  providers: [BubbleSortSingleton],
})
export class BubbleSortModule {}
