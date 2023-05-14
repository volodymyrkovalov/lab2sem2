import { Test, TestingModule } from '@nestjs/testing';
import { BubbleSortController } from './bubble-sort.controller';
import { BubbleSortService } from './bubble-sort.service';

describe('BubbleSortController', () => {
  let controller: BubbleSortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BubbleSortController],
      providers: [BubbleSortService],
    }).compile();

    controller = module.get<BubbleSortController>(BubbleSortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
