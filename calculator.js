const main = document.querySelector("main");

const screen = document.createElement("div");


for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent = i;
  
    main.appendChild(button);
  
    button.addEventListener("click", function () {
      screen.textContent += String(i);
    });
  }

const c = document.createElement("button");
c.textContent = "C";
main.appendChild(c);
c.addEventListener("click", function(){
    screen.textContent = "";
});

const egal = document.createElement("button");
egal.textContent = "=";
main.appendChild(egal);
egal.addEventListener("click", function(){
    screen.textContent=eval(screen.textContent);
});

const operations= ["+","-","*",":"]

for (let i=0; i<= operations.length-1;i++) {
    const op = document.createElement("button");
    op.textContent = operations[i];
    main.appendChild(op);
    op.addEventListener("click", function () {
        screen.textContent += operations[i];
    });
}

main.appendChild(screen);
screen.style.border = "2px solid black";
screen.style.height = "50px";


