import { Injectable } from '@nestjs/common';

@Injectable()
export class BubbleSortSingleton {
  private static instance: BubbleSortSingleton;

  public constructor() {
    console.log('init for singleton');
  }

  public static getInstance(): BubbleSortSingleton {
    if (!BubbleSortSingleton.instance) {
      BubbleSortSingleton.instance = new BubbleSortSingleton();
    }
    return BubbleSortSingleton.instance;
  }

  public sort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}
