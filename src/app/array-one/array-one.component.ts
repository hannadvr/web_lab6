import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayOne } from '../Class/arrayOne';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent implements OnInit {
  arrayOne: ArrayOne = new ArrayOne();
  searchLetter: string = '';
  errorMessage: string = '';
  isSearched: boolean = false;

  ngOnInit(): void {}

  filterNames(letterInput: string): void {
    this.errorMessage = '';
    this.isSearched = false;

    // Введення має бути не порожнім і містити лише 1 літеру
    if (!letterInput || letterInput.trim().length === 0) {
      this.errorMessage = 'Помилка валідації: введіть літеру для пошуку!';
      return;
    }

    const trimmed = letterInput.trim();
    if (trimmed.length > 1) {
      this.errorMessage = 'Помилка валідації: введіть лише одну літеру!';
      return;
    }

    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]$/.test(trimmed)) {
      this.errorMessage = 'Помилка валідації: введене значення має бути літерою!';
      return;
    }

    this.searchLetter = trimmed.toUpperCase();
    this.arrayOne.filterByLetter(this.searchLetter);
    this.isSearched = true;
  }
}