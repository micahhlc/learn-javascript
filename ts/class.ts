// Implement the interface using a Class
class Human {
  fName: string;
  lName: string;
  birthday: [number, number, number];
  hobbies: string[];
  email?: string;

  constructor(fName: string, lName: string, birthday: [number, number, number], hobbies: string[] = []) {
    this.fName = fName;
    this.lName = lName;
    this.birthday = birthday;
    this.hobbies = hobbies;
  }

  get age(): number {
    const [year, month, day] = this.birthday;
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  get fullName(): string {
    return `${this.fName} ${this.lName}`; // ✅ Correct string interpolation
  }
}

// Usage:
const person = new Human('Jane', 'Doe', [1990, 5, 15], ['reading']);

console.log(`Hello, ${person.fullName}`);
console.log(`Age: ${person.age} years old`); // Accesses the getter dynamically
console.log(person);
