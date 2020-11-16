//const calculator = {
//    displayValue : '0',
//    firstOperand : null,
//    waitingFotSecondOperand : false,
//    operator: null

const body = document.querySelector("body");
const screen = document.createElement("div");

const addition = document.createElement("button");
addition.textContent.Content = "+";
body.appendChild(addition);

const division = document.createElement("body");
division.textContent.Content


const multiplication = document.createElement("button");
multiplication.textContent.Content = "*";
body.appendChild(multiplication);

for(let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent=i;

    body.appendChild(button);
    body.appendChild(button);

    multiplication.addEventListener("click", function(){
        screen.textContent = "Well Hello There";
    })

}

