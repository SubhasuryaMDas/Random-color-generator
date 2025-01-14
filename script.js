let realColor = Rcolor();

let main = document.getElementById("main-container");
for (let i = 0; i < 30; i++) {
  let cDiv = document.createElement("div");
  cDiv.classList.add("color-container");
  let realColor = Rcolor();
  cDiv.innerText = realColor;
  cDiv.style.backgroundColor = realColor;
  main.appendChild(cDiv);


}
//  let bgBody = function (e) {
//    if (e.target.tagName === "Div") {
//      bdy.style.backgroundColor = realColor;
//    }
//    console.log(e);
//  };
let bdy = document.querySelector("body");
// main.addEventListener("click", (e) => {
//   if (e.target.tagName.toUpperCase() === "DIV") {
//     bdy.style.backgroundColor = e.target.textContent; // Set body's background color
//     console.log(`Background changed to: ${e.target.textContent}`);
//   }
// });
let changeBg = function(e){
        if (e.target.tagName.toUpperCase() === "DIV") {
          bdy.style.backgroundColor = e.target.textContent; // Set body's background color
          console.log(`Background changed to: ${e.target.textContent}`);
        }
}
main.addEventListener("click", changeBg);



function Rcolor() {
  let char = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let ri = Math.floor(Math.random() * 16);
    let c = char[ri];
    color += c;
  }
  return color;
}

console.log("Divs added successfully");
