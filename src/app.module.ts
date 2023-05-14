import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BubbleSortModule } from './bubble-sort/bubble-sort.module';
import { CalculatorModule } from './calculator/calculator.module';
import { ShortestPathModule } from './shortest-path/shortest-path.module';

@Module({
  imports: [BubbleSortModule, CalculatorModule, ShortestPathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
