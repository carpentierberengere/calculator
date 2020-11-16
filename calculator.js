const main = document.querySelector("main");

const screen = document.createElement("div");


//--------------style--------------------------// 
main.appendChild(screen);
screen.style.border = "2px solid #E920AF";
screen.style.height = "50px";
screen.style.width = "360px";
//screen.style.display = "flex";
//screen.style.justifyContent = "center";

//---------------style 2-----------------------//
//let myScreen = document.querySelector("div");
//myScreen.style.backgroundColor = "#F9AFE4";
//myScreen.style.display = "flex";


//let myButton = document.querySelector("div");
//myButton.style.color = "#411BA6";
//myButton.style.fontFamily = "Helvetica";
//myButton.style.fontSize = "25px";



//-------------------numbers-------------------// 
for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent = i;
  
    main.appendChild(button);
  
    button.addEventListener("click", function () {
      screen.textContent += String(i);
    });
}

//-----------------button CLEAR----------------//
const clear = document.createElement("button");
clear.textContent = "C";
main.appendChild(clear);
clear.addEventListener("click", function(){
    screen.textContent = "";
});

//-----------------buttons OPERATION-------------//
const operations= ["+","-","*",":"]

for (let i=0; i<= operations.length-1;i++) {
    const ope = document.createElement("button");
    ope.textContent = operations[i];
    main.appendChild(ope);
    ope.addEventListener("click", function () {
        screen.textContent += operations[i];
    });
}

//------------------button EGAL-----------------//
const egal = document.createElement("button");
egal.textContent = "=";
main.appendChild(egal);
egal.addEventListener("click", function (){
    screen.textContent= eval(screen.textContent);
});



//const egal = document.createElement("button");
//egal.textContent = "=";
//main.appendChild(egal);
//egal.addEventListener("click", function egal(String){
//    return Function('return' + String)()
    //screen.textContent= Function('return' + screen.textContent)(); 
    //eval(screen.textContent);
//});

//const egal = document.createElement("button");
//egal.textContent = "=";
//main.appendChild(egal);
//egal.addEventListener("click", function egal(String){
//    return Function('return' + String)()
    //screen.textContent= Function('return' + screen.textContent)(); 
    //eval(screen.textContent);
//});

// Ajout de decimale 
//const decimal = document.createElement("button");
//decimal.textContent = ",";
//main.appendChild(decimal);
//decimal.addEventListener("click", function(){
//    screen.textContent = 




