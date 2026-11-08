import { randomInt } from './randomInt';

export class ArrayTwo {
  a: number[][] = [];
  oddIndexSum: number = 0;
  oddElementsList: string[] = [];

  constructor() {}

  // Генерація матриці
  genArray(rows: number = 10, cols: number = 7): void {
    this.a = [];
    const rnd = new randomInt();
    for (let i = 0; i < rows; i++) {
      this.a[i] = [];
      for (let j = 0; j < cols; j++) {
        this.a[i][j] = rnd.randomInteger(-10, 10);
      }
    }
  }

  // Знаходження суми елементів
  calculateOddIndexSum(): number {
    this.oddIndexSum = 0;
    this.oddElementsList = [];

    for (let i = 0; i < this.a.length; i++) {
      for (let j = 0; j < this.a[i].length; j++) {
        // Якщо індекси обидва непарні
        if (i % 2 !== 0 && j % 2 !== 0) {
          this.oddIndexSum += this.a[i][j];
          this.oddElementsList.push(`A[${i}][${j}] = ${this.a[i][j]}`);
        }
      }
    }
    return this.oddIndexSum;
  }
}