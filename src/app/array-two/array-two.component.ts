import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTwo } from '../Class/arrayTwo';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent implements OnInit {
  arrayTwo: ArrayTwo = new ArrayTwo();
  rowsCount: number = 10;
  colsCount: number = 7;
  errorMessage: string = '';
  isCalculated: boolean = false;

  ngOnInit(): void {
  }

  generateAndCalculate(r: string, c: string): void {
    this.errorMessage = '';
    this.isCalculated = false;

    // Перевірка на заповненість
    if (!r.trim() || !c.trim()) {
      this.errorMessage = 'Помилка валідації: введіть кількість рядків та стовпців!';
      return;
    }

    const rows = parseInt(r, 10);
    const cols = parseInt(c, 10);

    // Перевірка на ціле число
    if (isNaN(rows) || isNaN(cols)) {
      this.errorMessage = 'Помилка валідації: значення мають бути цілими числами!';
      return;
    }

    // Валідація меж
    if (rows < 1 || rows > 10) {
      this.errorMessage = 'Помилка валідації: кількість рядків має бути в діапазоні від 1 до 10!';
      return;
    }

    if (cols < 1 || cols > 7) {
      this.errorMessage = 'Помилка валідації: кількість стовпців має бути в діапазоні від 1 до 7!';
      return;
    }

    this.rowsCount = rows;
    this.colsCount = cols;

    this.arrayTwo.genArray(this.rowsCount, this.colsCount);
    this.arrayTwo.calculateOddIndexSum();
    this.isCalculated = true;
  }

  // Обидва індекси непарні
  isOddIndex(i: number, j: number): boolean {
    return i % 2 !== 0 && j % 2 !== 0;
  }
}