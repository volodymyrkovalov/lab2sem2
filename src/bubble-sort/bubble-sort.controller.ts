import { Controller, Get } from '@nestjs/common';
import { BubbleSortSingleton } from './bubble-sort.service';

@Controller('bubble-sort')
export class BubbleSortController {
  private bubbleSortSingleton: BubbleSortSingleton;

  constructor() {
    this.bubbleSortSingleton = BubbleSortSingleton.getInstance();
  }

  @Get()
  sort(): number[] {
    const arr = [4, 2, 3, 1, 5];
    return this.bubbleSortSingleton.sort(arr);
  }
}
