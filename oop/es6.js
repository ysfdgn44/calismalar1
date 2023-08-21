// *  ***ES6 OOP
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // * bu alana yazılan metotlar bütün instance ların belleğinde yeralır
    this.getTitle = function () {
      return this.title;
    };
  }
  // !  bu kısma yazılanlar prototype alanına kaydedilir
  getSummary() {
    return `${this.title} was written by ${this.author} in${this.year}`;
  }
  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }
}
const book1 = new Book("The karamozov brothers", "dostoyevski", 1886);

console.log(book1);
console.log(book1.__proto__);
console.log(book1.getAge());
console.log(book1.getSummary());
// ! INHERITANCE
class Magazine extends Book {
  constructor(title, author, year, month) {
    // ! book'un
    super(title, author, year);
    this.month = month;
  }
}
const mag1 = new Magazine("sre", "einstion", 1924, "nov");
console.log(mag1);
console.log(mag1.getAge());
console.log(mag1.getSummary());
