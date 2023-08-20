const mylist = document.querySelector("li");
console.log(mylist);
mylist.style.color = "green";
const additem = document.querySelector(".add-item");
console.log(additem);
additem.style.border = "3px solid red";
const addbtn = document.querySelector("#btn");
console.log(addbtn);
addbtn.style.cursor = "pointer";
const item2 = document.querySelector(".item-list h2");
item2.style.color = "yellow";
const addbtnn = document.querySelector('input[type="button"]');
console.log(addbtnn.value);
addbtnn.style.backgroundColor = "red";

const list = document.querySelectorAll("ul li");
console.log(list);
list.forEach((p) => console.log(p.innerText));
console.log(
  document.querySelectorAll("section.item-list ul li:nth-child(3)")[0].innerText
);
console.log(document.querySelectorAll("ul li:nth-child(4)")[0].innerHTML);
console.log(document.querySelector("ul li:nth-child(4)").innerHTML);
console.log(document.querySelector("ul").innerHTML);
// document.querySelector("ul li:nth-child(2)").innerHTML = "<p>google</p>";
