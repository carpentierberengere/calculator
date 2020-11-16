const body = document.querySelector("body");

const screen = document.createElement("div");


for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent = i;
  
    body.appendChild(button);
  
    button.addEventListener("click", function () {
      ecran.textContent += String(i);
    });
  }

const c = document.createElement("button");
c.textContent = "C";
body.appendChild(c);
c.addEventListener("click", function(){
    screen.textContent = "";
});

const egal = document.createElement("button");
egal.textContent = "=";
body.appendChild(egal);
egal.addEventListener("click", function(){
    screen.textContent=eval(screen.textContent);
});

const operations= ["+","-","*",":"]

for (let i=0; i<= operations.length-1;i++) {
    const op = document.createElement("button");
    op.textContent = operations[i];
    body.appendChild(op);
    op.addEventListener("click", function () {
        ecran.textContent += operations[i];
    });
}

body.appendChild(screen);
screen.style.border = "2px solid black";
screen.style.height = "150px";


