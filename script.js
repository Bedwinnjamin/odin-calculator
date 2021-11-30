let inputNum = '';
let displayNum = '';
let operand = '';
let decimal = false;

const states = {
  ENTRY: "first",
  NUM: "num",
  OPER: "oper",
}

let state = states.ENTRY;


const displayLast = document.querySelector('#display-last');
const displayCur = document.querySelector('#display-current');

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
  if(state == states.NUM)
  {
    inputNum = inputNum.slice(0, -1);
    displayCur.innerText = inputNum;
    if(!inputNum)
    {
      state = states.OPER;
    }
  }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  displayNum = '';
  inputNum = '';
  displayLast.innerText = '0';
  displayCur.innerText = inputNum;
  state.ENTRY;
});

const computer = document.querySelector('#equal');
computer.addEventListener('click', () => {
  if(state == states.NUM)
  {
    displayNum = compute(displayNum, inputNum, operand);
    displayLast.innerText = displayNum;
    inputNum = "";
    displayCur.innerText = inputNum;
    state = states.OPER;
  }
});

const ops = document.querySelectorAll('.op');
ops.forEach(item => {
  item.addEventListener('click', event => {
    if(state == states.NUM)
    {
      
      if(displayNum === ''){
        operand = item.innerText;
        displayNum = inputNum;
      }
      else{
        displayNum = compute(displayNum, inputNum, operand)
        operand = item.innerText;
      }
      inputNum = "";
      displayCur.innerText = inputNum;
      displayLast.innerText = displayNum + " " + operand;
      state = states.OPER;
    }
    else if(state == states.OPER)
    {
      operand = item.innerText;
      displayLast.innerText = displayNum + " " + operand;
    }
  })
});

const numbers = document.querySelectorAll('.numericBtn');
numbers.forEach(item => {
  item.addEventListener('click', event => {
    if(!decimal && item.innerText == '.'){
      if(inputNum){
        numberBtn(item.innerText);
      }
      else{
        numberBtn('0'+item.innerText);
      }
      decimal = true;
    }
    if(item.innerText != '.')
      numberBtn(item.innerText);
    state = states.NUM;
  })
});

function numberBtn(num){
  inputNum += num;
  displayCur.innerText = inputNum;
}

function compute(num1, num2 = 0, op){
  switch (op){
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "=":
      break;
    case "%":
      break;          
  }
}

function add(num1, num2){
  return +num1 + +num2;
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

