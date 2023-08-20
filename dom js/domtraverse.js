console.log("***************TRAVERSE DOM*****");
//! yukarı yönde traverse
//? *** parentElement, parentNode
const list = document.querySelector("li");
console.log(list);
console.log(list.parentElement);
console.log(list.parentNode);
console.log(list.parentElement.parentElement);
console.log(list.parentNode.parentNode);
console.log(list.parentElement.parentElement.parentElement);
//? **** closest(): belirtilen elementin parentlerinden ilk uygun parenti seçer
console.log(list.closest("section"));
const btn = document.querySelector("section.add-item #btn");
console.log(btn);
console.log(btn.closest("section").querySelector("input"));
console.log(list.closest("main").querySelectorAll("section.add-item input"));
console.log(list.closest("main").querySelector("section.add-item input"));
console.log(list.closest("body").querySelector("header h1"));
console.log(btn.closest("main"));

//!  AŞAĞI YÖNDE TRAVERSE ****//
const addItem = document.querySelector(".add-item");
console.log(addItem.children);
console.log(addItem.children[0]);
addItem.children[0].style.color = "red";
console.log(addItem.parentNode.parentNode.children[0].children[0]);
const h1 = document.querySelector("header");
console.log(h1.firstChild);
//!  yatay yönde traverse
//? *** nextElementSibling,previousElementSibling
const ul = document.querySelector("ul");
console.log(ul);
const lists = ul.children;
console.log(lists);
const js = lists[2];
const react = js.nextElementSibling;
const django = js.nextElementSibling.nextElementSibling;
const css = js.previousElementSibling;
console.log(css);
console.log(django);
console.log(react);
