console.log("***** 3 arrow FUNCTION********");

// const r = +prompt("r");
// const h = +prompt("h");
// const hacim = (r, h) => Math.PI * r * r * h;

// console.log(`${r},${h}=hacim: ${hacim(r, h).toFixed(5)}`);
// console.log(`${r},${h}=hacim: ${hacim(r, h).toPrecision(4)}`);

// const age = (year) => new Date().getFullYear() - year;
// console.log(`AGE:` + age(1992));
// let n = +prompt("fibonacci kaçı bulmak istiyorsunuz: ");
//******* fibonacci  *******/
// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let sum = 0;

//   for (i = 2; i < n; ++i) {
//     sum = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = sum;
//   }
//   return `fibonacci ${n} = ${sum}`;
// };
// console.log(fibo(11));
//!********** recursive fibonacci//

// const fibon = (n) => {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fibon(n - 1) + fibon(n - 2);
//   }
// };
// const n = +prompt(" sayı giriniz ");
// if (n <= 0) {
//   console.log("n should be bigger than zero");
// } else {
//   console.log(`Fibonacci ${n} = ${fibon(n)}`);
// }
//*? faktöriyel alma**//
// let fakto = 1;
// const fakt = (n) => {
//   for (i = 1; i <= n; i++) {
//     fakto = i * fakto;
//   }
//   return fakto;
// };
// console.log(fakt(15));

//*! **** recursive faktöriyel alma?//
const faktor = (n) => {
  if (n < 0) {
    return 0;
  } else if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * faktor(n - 1);
  }
};
const n = +prompt("sayı giriniz");
if (n < 0) {
  console.log("n sould be bigger than zero");
} else {
  console.log(`${n} faktoryel =${faktor(n)}`);
}
