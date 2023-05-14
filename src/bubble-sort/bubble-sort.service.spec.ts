import { Test, TestingModule } from '@nestjs/testing';
import { BubbleSortService } from './bubble-sort.service';

describe('BubbleSortService', () => {
  let service: BubbleSortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BubbleSortService],
    }).compile();

    service = module.get<BubbleSortService>(BubbleSortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
