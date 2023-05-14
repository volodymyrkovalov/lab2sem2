import { Test, TestingModule } from '@nestjs/testing';
import { ShortestPathController } from './shortest-path.controller';
import { ShortestPathService } from './shortest-path.service';

describe('ShortestPathController', () => {
  let controller: ShortestPathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortestPathController],
      providers: [ShortestPathService],
    }).compile();

    controller = module.get<ShortestPathController>(ShortestPathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
