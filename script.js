const divColors = document.querySelectorAll('.ball');
const initialAnswer = document.getElementById('answer');
initialAnswer.innerText = 'Escolha uma cor';

function generateRandomColor() {
  const color = [];
  for (let index = 0; index < 3; index += 1) {
    const number = Math.floor(Math.random() * 255);
    color.push(number);
  }
  const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  return rgbColor;
}

function updateParagraphColor(colorArray) {
  const spanValue = document.getElementById('rgb-color');
  const index = Math.floor(Math.random() * 6);
  const color = colorArray[index];
  spanValue.innerText = `${color}`;
}

function addColor() {
  let colorForCheck = [];
  for (let index = 0; index < divColors.length; index += 1) {
    const color = generateRandomColor();
    divColors[index].style.backgroundColor = color;
    colorForCheck.push(color);
  }
  updateParagraphColor(colorForCheck);
}

function response(value) {
  const answer = document.getElementById('answer');
  if (value) {
    answer.innerText = 'Acertou!';
    return;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function checkAnswer(event){
  const colorOfChoice = event.target.style.backgroundColor;
  const colorToGuess = document.getElementById('rgb-color').innerText;
  if (colorOfChoice === colorToGuess) {
    response(true);
    return;
  } else {
    response(false);
  }
}

function createEventListeners() {
  for (let index = 0; index < divColors.length; index += 1) {
    divColors[index].addEventListener('click', checkAnswer);
  }
}

function init() {
  createEventListeners()
  addColor();
}

window.onload = init;
