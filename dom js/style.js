//*************************************
//! ****DESTRUCTRİNG(ARRAY) ***********
// ***********************************
const names = ["ahmet", "vahap", "yusuf", "bayram", "salih"];
//* CLASICAL
const mehmet = names[1]; //*index
const [p1, p2, , p3] = names;
console.log(p1);
console.log(names);
console.log(mehmet);
console.log(p3);
//*************************************
//! ****REST(...)***********
// ***********************************
//********ARRAY */
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];
const [x, y, ...z] = autos;
console.log(x, y, z);
const auto = ["anadol", "reno", "bmw", "mercedes", "ferrari"];
const [t, ...v] = autos;
console.log(t, v);
//********OBJECT */
const personel = {
  name: "yusuf",
  surname: "doğan",
  age: 31,
  job: "frontend developer",
};
const { age, job, ...fullName } = personel;
console.log(fullName);
const { name } = personel;
console.log(name);
//! Bir fonksiyonun argümanlarını diziye çevirmek için kullanılabilir//
const sum = (a, b) => a + b;
console.log(sum(2, 5, 4));
//*** normalde hata vermeli ama vermiyor bu sıkıntı bir durum    */
const sumAll = (...numbers) => {
  return numbers.reduce((a, p) => a + p, 0);
};
console.log(sumAll(1, 5, 7, 25, 45));
const showName = (name, surname, ...titles) => {
  return `${name} ${surname}is a ${titles.join(" and ")}`;
};
console.log(
  showName("yusuf", "doğan", "husband", "pilot", "engineer", "developper")
);
//*************************************
//! ****SPREAD(...)***********
// ***********************************
//? Spread operatörü ise iterables olan bir elemani bireysel değerler
//? haline getirir.
//? ARRAY CONCATINATION******
const flyingVehicles = ["plane", "helicopter", "ufo"];
const automobile = ["truck", "suv", "car"];
const allVehicles = [flyingVehicles, automobile];
console.log(allVehicles);
const allVehicles2 = [...flyingVehicles, ...automobile];
const allVehicles3 = [...flyingVehicles, "biyckle", ...automobile];
console.log(allVehicles2);
console.log(allVehicles3);
let citrus = ["orange", "limon", "lime"];
const fruits = ["epple", "apricot", ...citrus, "chery"];
console.log(fruits);
console.log(...fruits);
console.log(...citrus, ...fruits);
//?  STRING SPREAD
let buryan = "buryan bitlise ait bir yemektir";
console.log(...buryan);
console.log([...buryan]);
const number = [1, 7, 89, 7, 546, 8];
console.log(Math.max(number));
console.log(Math.max(...number));
console.log(Math.min(...number));
const numberco = [...number];
const header = document.getElementsByTagName("header");
console.log(header[0]);
header[0].innerHTML = "yusuf";
console.log(header[0].textContent);
console.log(header[0].innerHTML);
console.log(header[0].innerText);
console.log(header[1].innerText);
header[1].innerHTML += `<li><a color="red" href="https://www.google.com">Google</a></li>`;
const headers = document.getElementsByClassName("header");
console.log(headers);
const headerRed = [...headers];
headerRed.map((p) =>
  console.log(((p.style.color = "yellow"), (p.style.backgroundColor = "red")))
);
// console.log((headers[1].li[0].style.color = "yellow"));
const myheader = document.querySelector("header");
myheader.style.color = "green";
console.log(myheader);
const myheaderC = document.querySelector(".header");
myheaderC.style.color = "green";
console.log(myheaderC);
const headerh1 = document.querySelector(".header h1");
headerh1.style.backgroundColor = "lightblue";
console.log(headerh1);
const headerAll = document.querySelectorAll("header");
// headerAll.style.backgroundColor = "blue  ";
const head = document.querySelector("header");
console.log(head.parentNode.parentNode);
