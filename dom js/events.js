const h1 = document.querySelector("header h1");
h1.onmouseover = function () {
  h1.style.color = "red";
};
h1.onmouseout = () => {
  h1.style.color = "black";
};
const print = () => {
  document.write("print");
};
const button = document.getElementById("btn");
let langInput = document.querySelector(".add-item #input");
const ul = document.createElement("ul");
button.after(ul);
print();
const adddbtn = document.getElementById("btn");
// adddbtn.onclick = () => {
//   alert("btn active");
// };
// window.onload = print();
langInput.addEventListener("keydown", (event) => {
  console.log(event);
  //   if (event.keyCode == 13) {
  if (event.code === "Enter") {
    button.click();
  }
});

button.addEventListener("click", () => {
  !langInput.value
    ? alert("please enter a languages")
    : (ul.innerHTML += `<li>${langInput.value}</li>`);
  langInput.value = "";
  langInput.focus();
});
window.addEventListener("load", () => {
  langInput.focus();
});
const ul2 = document.querySelector(".item-list ul");
console.log(ul2);
const deletebtn = document.createElement("button");
button.after(deletebtn);
deletebtn.type = "button";
deletebtn.innerHTML = "DELETE";
deletebtn.ariaPlaceholder = "DELETE";
deletebtn.id = "dltbtn";
deletebtn.value = "DELETE";
document.getElementById("dltbtn").style.marginLeft = "0.2rem";

deletebtn.addEventListener("click", () => {
  !ul.
    ? alert("no things for remove")
    : document.querySelector("section.add-item ul").removeChild("last-child");
});
