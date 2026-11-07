export class Animal {
    name: string;
    h: number; // ріст в метрах
    k: number; // коефіцієнт
  
    constructor(name: string, h: number, k: number = 20) {
      // Перевірка на коректність
      if (h > 0) {
        this.h = h;
      } else {
        this.h = 0.3; // дефолтне значення
      }
      this.name = name ? name : 'Тварина';
      this.k = k;
    }
  
    // Метод: вага тварини k * h^3 (у кг)
    weight(): number {
      return this.k * Math.pow(this.h, 3);
    }
  }