export class ArrayOne {
  surnames: string[] = [
    'Шевченко',
    'Коваленко',
    'Бондаренко',
    'Бойко',
    'Мельник'
  ];
  filteredSurnames: string[] = [];

  constructor() {}

  filterByLetter(letter: string): string[] {
    if (!letter || letter.trim() === '') {
      this.filteredSurnames = [];
      return [];
    }
    const cleanLetter = letter.trim().toLowerCase()[0];
    this.filteredSurnames = this.surnames.filter(s =>
      s.toLowerCase().startsWith(cleanLetter)
    );
    return this.filteredSurnames;
  }
}