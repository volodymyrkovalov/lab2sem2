import { Injectable } from '@nestjs/common';

export enum OperationType {
  Addition,
  Subtraction,
  Multiplication,
  Division,
}

export interface IOperation {
  calculate(a: number, b: number): number;
}

@Injectable()
export class Addition implements IOperation {
  calculate(a: number, b: number): number {
    return a + b;
  }
}

@Injectable()
export class Subtraction implements IOperation {
  calculate(a: number, b: number): number {
    return a - b;
  }
}

@Injectable()
export class Multiplication implements IOperation {
  calculate(a: number, b: number): number {
    return a * b;
  }
}

@Injectable()
export class Division implements IOperation {
  calculate(a: number, b: number): number {
    return a / b;
  }
}

@Injectable()
export class OperationFactory {
  createOperation(type: OperationType): IOperation {
    switch (type) {
      case OperationType.Addition:
        return new Addition();
      case OperationType.Subtraction:
        return new Subtraction();
      case OperationType.Multiplication:
        return new Multiplication();
      case OperationType.Division:
        return new Division();
      default:
        throw new Error('Invalid operation type');
    }
  }
}
