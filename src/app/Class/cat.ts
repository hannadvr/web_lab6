import { Animal } from './animal';

export class Cat extends Animal {
  breed: string; // порода тварини

  constructor(name: string, h: number, breed: string) {
    // k = 15
    super(name, h, 15);
    this.breed = breed ? breed : 'Звичайна';
  }

  // Перевизначаємо метод: переводимо вагу в грами
  override weight(): number {
    return super.weight() * 1000;
  }
}