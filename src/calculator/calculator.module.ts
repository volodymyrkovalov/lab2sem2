import { Module } from '@nestjs/common';
import { OperationFactory } from './calculator.service';
import { CalculatorController } from './calculator.controller';

@Module({
  controllers: [CalculatorController],
  providers: [OperationFactory],
})
export class CalculatorModule {}
