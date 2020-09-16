function add(a, b){
    if(b === undefined){
        b = a;
    }
    finalValue = parseFloat(a) + parseFloat(b);
    display.textContent = finalValue;
}

function subtract(a, b){
    if(b === undefined){
        b = a;
    }
    finalValue = (a - b);
    display.textContent = finalValue;
}

function multiply(a, b){
    if(b === undefined){
        b = a;
    }
    finalValue = a * b;
    display.textContent = finalValue;
}

function divide(a, b){
    if(b === undefined){
        b = a;
    }

    if(b === '0'){
        display.textContent = 'Nope';
        return;
    }

    finalValue = a / b;
    display.textContent = finalValue;
}

function operate(){
    if(operator === "+"){
        add(firstNum, displayValue);
    }
    else if(operator === "-"){
        subtract(firstNum, displayValue);
    }
    else if(operator === "*"){
        multiply(firstNum, displayValue);
    }
    else if(operator === "/"){
        divide(firstNum, displayValue);
    }
}

function addToDisplay(e){
    if(display.textContent === '0'){
        display.textContent = '';
    }

    display.textContent = displayValue;
    displayValue += this.textContent;
    display.textContent += this.textContent;
}

function addDecimal(e){
    if(display.textContent.includes('.')){
        return;
    }

    display.textContent += '.';
    displayValue += '.';
}

function saveValue(e){
    if(firstNum !== null){
        operate();
        operator = this.textContent;
        firstNum = finalValue;
        displayValue = '';

        return;
    }

    firstNum = displayValue;
    operator = this.textContent;

    display.textContent = displayValue;
    displayValue = '';
}

function allClear(){
    display.textContent = '0';
    firstNum = null;
    displayValue = '';
    operator = '';
    finalValue = '';
}

function changeSign(){
    displayValue = displayValue * -1;
    display.textContent = displayValue;
}

const display = document.getElementById('screen');
const numberButton = document.getElementsByClassName('numbers');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');
const operatorButton = document.getElementsByClassName('operators');
const clear = document.getElementById('clear');
const negative = document.getElementById('negative');
let displayValue = '';
let firstNum = null;
let operator;
let finalValue;

for(i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', addToDisplay);
}

for(i = 0; i < operatorButton.length; i++){
    operatorButton[i].addEventListener('click', saveValue);
}

decimal.addEventListener('click', addDecimal);
equals.addEventListener('click', operate);
clear.addEventListener('click', allClear);
negative.addEventListener('click', changeSign);

