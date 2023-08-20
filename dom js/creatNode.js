console.log("********CREAT NODE******");
const newPar = document.createElement("p");
const text = document.createTextNode("Bu bir p elemntidir");
newPar.appendChild(text);
const h2 = document.querySelector(".item-list h2");
console.log(h2);

h2.after(newPar);
const newPars = document.createElement("p");
const texts = document.createTextNode("Bu bir p elemntidir");
newPars.appendChild(texts);
h2.before(newPars);

//? id, class
newPars.id = "newpar";
newPars.className = "center ";
//! alternatif yöntem
newPar.setAttribute("id", "purple"); //? id veya class ekler
newPar.setAttribute("class", "pink");

//? input value : inputların değeri .value ile alınır
const myinput = document.getElementById("input"); //? element
console.log(myinput.value);

//? classlist
newPars.classList.add("bg-tomato", "left", "blue");
newPars.classList.remove("left"); //? left class'ı silindi
if (!newPars.classList.contains("blue")) {
  newPars.classList.add("blue");
} else {
  newPars.classList.add("orange");
}
newPars.classList.toggle("white"); //! yoksa ekler varsa kaldırır*****
//? getAttribute()
console.log(newPars.getAttribute("class"));
console.log(myinput.getAttribute("name"));
console.log(myinput.getAttribute("type"));
const btn = document.getElementById("btn");
console.log(btn);
console.log(btn.getAttribute("type"));

console.log(myinput.id);
console.log(newPars.className);
//!  innerHTML(??? ciddi güvenlik açığı!!!!)
newPar.innerHTML += `<li>new line</li>`;
const newdiv = document.querySelector(".new-div");
console.log(newdiv);
newdiv.innerHTML = `<a href="https://www.google.com" class="red">google`;
const diva = document.querySelector(".new-div").innerHTML;
console.log(diva);
const newline = document.createElement("div");
document.querySelector("#btn").after(newline);
const newtext = document.createTextNode("bu yeni linedir");
newline.appendChild(newtext);
newline.className = "red";
