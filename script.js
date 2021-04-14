const ballClass = 'ball';

const objective = document.getElementById('rgb-color');
const optionsContainer = document.getElementById('options-container');
const options = document.getElementsByClassName(ballClass);
const answer = document.getElementById('answer');

const divElement = document.createElement('div');

function createColorOptions(quantity) {
  for (let index = 0; index < quantity; index += 1) {
    const newDiv = divElement.cloneNode();
    newDiv.classList.add(ballClass);
    optionsContainer.appendChild(newDiv);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
  return `(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
}

function setColorElements() {
  for (let index = 0; index < options.length; index += 1) {
    options[index].style.backgroundColor = `rgb${generateRandomColor()}`;
  }
}

function setObjective() {
  const randomOption = options[getRandomNumber(0, options.length - 1)];
  const color = window.getComputedStyle(randomOption).backgroundColor;
  objective.innerText = color.slice(-(color.length - 3));
}

function checkAnswer({ target }) {
  if (target.classList.contains(ballClass)) {
    if (window.getComputedStyle(target).backgroundColor === `rgb${objective.innerText}`) {
      answer.innerText = 'Acertou!';
    } else answer.innerText = 'Errou! Tente novamente!';
  }
}

function onLoad() {
  createColorOptions(6);
  setColorElements();
  setObjective();
  optionsContainer.addEventListener('click', checkAnswer);
}

window.onload = onLoad;
