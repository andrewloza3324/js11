let a = document.querySelector(".red");
let b = document.querySelector(".yellow");
let color1 = "yellow";
let color2 = "red";
let temp = "";
function swapColors() {
  temp = color1;
  color1 = color2;
  color2 = temp;
  a.style.backgroundColor = color1;
  b.style.backgroundColor = color2;
}
a.addEventListener("mousedown", swapColors);
b.addEventListener("mousedown", swapColors);
