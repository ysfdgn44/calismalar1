// ! Object literal*******
const book1 = {
  title: "The karamozov brothers",
  author: "dostoyevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in${this.year}`;
  },
};
console.log(book1);
console.log(book1.getSummary());
// !object ten miras yoluyla bazı özellikler geliyor =>inheritans
console.log(book1.hasOwnProperty("year"));
const book2 = {
  title: "The ka",
  author: "dostoye",
  year: 1865,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in${this.year}`;
  },
};
// ! Object Constructur

function Book(title, author, year) {
  this.title = title; //? title yerine herhangi birşey yazabiliriz ama best practice böyle
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in${this.year}`;
  //   };
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in${this.year}`;
};
console.log(Book.prototype); //? bir nesnenin prototype larına .protype ile erişilebilir.
const book3 = new Book("kaşağı", "ömer seyfettin", 1924);
const book4 = new Book("sefiller", "victor hugo", 1856);
console.log(book3);
console.log(book4.__proto__); //! ancak bir istance(örnek)in prototype larına ise .__proto__ ile erişilebilir.
Book.prototype.price = 0;
book3.price = 200;
book4.price = 2200;
console.log(book3, book4);

// ! INHERITANCE (KALITIM ES5)

// ?Sub _CLASS
function Magazine(title, author, year, month) {
  // ?inheritance
  Book.call(this, title, author, year);
  this.month = month;
}
// !prototypeları miras alabilmek için object.creat metodu kullanılabilir
Magazine.prototype = Object.create(Book.prototype);
console.log(Magazine.prototype);
const mag1 = new Magazine("sızıntı", "mfg", 1990, "april");
console.log(mag1.getSummary());
