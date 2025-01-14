
let main = document.getElementById("main-container");
for (let i = 0; i < 30; i++) {
  let cDiv = document.createElement("div"); 
  cDiv.classList.add("color-container"); 
  let realColor =Rcolor();
  cDiv.innerText = realColor; 
  cDiv.style.backgroundColor = realColor;
  main.appendChild(cDiv); 
}

function Rcolor () {
  let char = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let ri = Math.floor(Math.random() * 16);
let c = char[ri];
    color += c
  }
  return color;
}

console.log("Divs added successfully");
