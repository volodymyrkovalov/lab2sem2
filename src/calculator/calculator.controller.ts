import { Controller, Get, Param } from '@nestjs/common';
import { OperationFactory, OperationType } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  private operationFactory: OperationFactory;

  constructor() {
    this.operationFactory = new OperationFactory();
  }

  @Get(':a/:b/:operation')
  calculate(
    @Param('a') a: number,
    @Param('b') b: number,
    @Param('operation') operation: string,
  ): number {
    const opType = OperationType[operation as keyof typeof OperationType];
    const op = this.operationFactory.createOperation(opType);
    return op.calculate(a, b);
  }
}
