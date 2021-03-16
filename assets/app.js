const btns = document.querySelectorAll("button");
const btnIdentifier = btns.classList;
const screen = document.getElementById("screen");
const resultScreen = document.getElementById("result");
// console.log(btnIdentifier);
const btnNames = [];
let result = 0,
  firstNum = 0,
  secondNum = 0,
  temp = "",
  tempOperator = "";
let operator = "";

for (i = 0; i < btns.length; i++) {
  btnNames[i] = btns[i].className;
}

function calculation(tempOperator) {
  firstNum = parseInt(temp);
  temp = "";
  operator = tempOperator;
}

function calculateResult() {
  secondNum = parseInt(temp);
  temp = "";
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    default:
      break;
  }
  renderResult(result);
  console.log(result);
}

function render() {
  screen.textContent = `${temp}`;
}

function renderResult(result) {
  resultScreen.textContent = `${result}`;
}

function clear() {
  firstNum = 0;
  secondNum = 0;
  result = 0;
  render();
  renderResult(result);
}

btns[0].addEventListener("click", () => {
  clear();
});

btns[1].addEventListener("click", () => {
  temp += btns[1].textContent;
  render();
});
btns[2].addEventListener("click", () => {
  temp += btns[2].textContent;
  render();
});
btns[3].addEventListener("click", () => {
  temp += btns[3].textContent;
  render();
});
btns[4].addEventListener("click", () => {
  tempOperator = btns[4].textContent;
  calculation(tempOperator);
});
btns[5].addEventListener("click", () => {
  temp += btns[5].textContent;
  render();
});
btns[6].addEventListener("click", () => {
  temp += btns[6].textContent;
  render();
});
btns[7].addEventListener("click", () => {
  temp += btns[7].textContent;
  render();
});
btns[8].addEventListener("click", () => {
  tempOperator = btns[8].textContent;
  calculation(tempOperator);
});
btns[9].addEventListener("click", () => {
  temp += btns[9].textContent;
  render();
});
btns[10].addEventListener("click", () => {
  temp += btns[10].textContent;
  render();
});
btns[11].addEventListener("click", () => {
  temp += btns[11].textContent;
  render();
});
btns[12].addEventListener("click", () => {
  tempOperator = btns[12].textContent;
  calculation(tempOperator);
});
btns[13].addEventListener("click", () => {
  temp += btns[13].textContent;
  render();
});
btns[14].addEventListener("click", () => {
  temp += btns[14].textContent;
  render();
});
btns[15].addEventListener("click", () => {
  tempOperator = btns[15].textContent;
  calculateResult();
});
btns[16].addEventListener("click", () => {
  tempOperator = btns[16].textContent;
  calculation(tempOperator);
});
