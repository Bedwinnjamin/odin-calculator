let inputNum = 0;
let displayNum = 0;
let operand = "";

function parser(){
  
}

const computer = document.querySelector('#equal');
paperer.addEventListener('click', () => {
  compute(inputNum, displayNum, operand);
});

function compute(num1, num2 = 0, op){
  switch (op){
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide
      break;
    case "=":
      break;
    case "%":
      break;          
  }
}

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function percentile(num1){
  return num1 / 100;
}