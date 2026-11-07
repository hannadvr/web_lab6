import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../Class/animal';
import { Cat } from '../Class/cat';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animal_show: string = '';
  cat_show: string = '';
  errorMessage: string = ''; // Змінна для виведення помилки валідації

  calcAnimals(name1: string, h1: string, name2: string, h2: string, breed: string) {
    this.errorMessage = '';
    this.animal_show = '';
    this.cat_show = '';

    // 1. Валідація на заповнення текстових полів
    if (!name1.trim() || !name2.trim() || !breed.trim()) {
      this.errorMessage = 'Помилка валідації: усі текстові поля (клички та порода) мають бути заповнені!';
      return;
    }

    const height1 = parseFloat(h1);
    const height2 = parseFloat(h2);

    // 2. Валідація числових полів на коректність та діапазон
    if (isNaN(height1) || isNaN(height2)) {
      this.errorMessage = 'Помилка валідації: ріст тварини має бути числовим значенням!';
      return;
    }

    if (height1 <= 0 || height2 <= 0) {
      this.errorMessage = 'Помилка валідації: ріст тварини повинен бути строго більшим за 0!';
      return;
    }

    if (height1 > 3.0 || height2 > 1.5) {
      this.errorMessage = 'Помилка валідації: введено нереалістичний ріст (для тварини до 3 м, для кішки до 1.5 м)!';
      return;
    }

    // Якщо валідацію пройдено успішно — створюємо екземпляри класів
    try {
      const animal = new Animal(name1.trim(), height1, 20);
      const cat = new Cat(name2.trim(), height2, breed.trim());

      this.animal_show = `Кличка: ${animal.name}\nРіст: ${animal.h} м\nВага: ${animal.weight().toFixed(2)} кг`;
      this.cat_show = `Кличка: ${cat.name}\nРіст: ${cat.h} м\nПорода: ${cat.breed}\nВага: ${cat.weight().toFixed(0)} г`;
    } catch (e) {
      this.errorMessage = 'Помилка при створенні обʼєктів класу!';
      console.error(e);
    }
  }
}