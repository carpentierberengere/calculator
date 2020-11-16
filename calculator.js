const main = document.querySelector("main");

const screen = document.createElement("div");

// style 
main.appendChild(screen);
screen.style.border = "2px solid black";
screen.style.height = "50px";
screen.style.width = "360px";

// numbers & buttons
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
    screen.textContent= Function('return' + screen.textContent)(); //eval(screen.textContent);
});

//const decimal = document.createElement("button");
//decimal.textContent = ",";
//main.appendChild(decimal);
//decimal.addEventListener("click", function(){
//    screen.textContent = 
// Ajout de decimale 


const operations= ["+","-","*",":"]

for (let i=0; i<= operations.length-1;i++) {
    const ope = document.createElement("button");
    ope.textContent = operations[i];
    main.appendChild(ope);
    ope.addEventListener("click", function () {
        screen.textContent += operations[i];
    });
}




