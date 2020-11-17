const main = document.querySelector("main");
main.style.flexDirection = "column";
main.style.display = "flex";
main.style.alignItems = "center";
main.style.width = "50%";

const screen = document.createElement("div");
screen.style.height = "80px";
screen.style.width = "50%";
screen.style.border = "2px solid black";
//let myScreen = document.querySelector("div");
//myScreen.style.backgroundColor = "#F9AFE4";
//myScreen.style.display = "flex";

const buttons = document.createElement("div");
buttons.style.border = "2px solid black";
buttons.style.display ="flex";
buttons.style.flexDirection = "column";
buttons.style.width = "50%";
//let myButton = document.querySelector("div");
//myButton.style.color = "#411BA6";
//myButton.style.fontFamily = "Helvetica";
//myButton.style.fontSize = "25px";

const row1 = document.createElement("div");
row1.style.display="flex";
row1.style.justifyContent = "space-between";

const row2 = document.createElement("div");
row2.style.display = "flex";
row2.style.justifyContent = "space-between";

const row3 = document.createElement("div");
row3.style.display = "flex";
row3.style.justifyContent = "space-between";

const row4 = document.createElement("div");
row4.style.display="flex";
row4.style.justifyContent = "space-between";

const row5 = document.createElement("div");
row5.style.display = "flex";
row5.style.justifyContent = "space-between";

main.appendChild(screen);
main.appendChild(buttons);
buttons.appendChild(row1);
buttons.appendChild(row2);
buttons.appendChild(row3);
buttons.appendChild(row4);
buttons.appendChild(row5);

const oper = [
    "C", "=", "-", "+", "/", "*", ",","1", "2", "3", "4", "5", "6", "7", "8", "9", "0" 
]
for (let i = 0; i <= oper.length-1; i++){
    const ope = document.createElement("buttons");
    ope.textContent = oper[i];
    ope.style.width = "30%";

    //for (let i = 0; i <= 9; i++) {
    //const button = document.createElement("button");
    //button.textContent = i;
  
    //main.appendChild(button);
  
    //button.addEventListener("click", function () {
    //  screen.textContent += String(i);

    let cases = oper[i];
    switch(cases){

        default:
            ope.addEventListener("click", function (){
                screen.textContent += oper[i];
            });
            break;

        case "=":
            ope.addEventListener("click", function (){
                screen.textContent = eval(screen.textContent);
            })
            break;
            //const egal = document.createElement("button");
            //egal.textContent = "=";
            //main.appendChild(egal);
            //egal.addEventListener("click", function (){
            //    screen.textContent= eval(screen.textContent);
        
        case "C":
            ope.addEventListener("click", function (){
                screen.textContent="";
            });
        //const clear = document.createElement("button");
        //clear.textContent = "C";
        //main.appendChild(clear);
        //clear.addEventListener("click", function(){
    };    //screen.textContent = "";

    if (i <= 3){
        row1.appendChild(ope);
    }
    if ((i > 3) && (i <= 7)){
        row2.appendChild(ope);
    }
    if ((i > 7) && (i <= 11)) {
        row3.appendChild(ope);
      }
      if (i > 11 && i <= 15) {
        row4.appendChild(ope);
      }
      if (i > 15 && i <= 19) {
        row5.appendChild(ope);
      }

    
};