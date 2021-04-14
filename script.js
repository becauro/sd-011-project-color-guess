const ballClass = 'ball';

const score = document.getElementById('score');
const objective = document.getElementById('rgb-color');
const optionsContainer = document.getElementById('options-container');
const options = document.getElementsByClassName(ballClass);
const answer = document.getElementById('answer');
const buttonReset = document.getElementById('reset-game');

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

function addToScore(option) {
  const scoreValue = parseInt(score.innerText, 10);

  if (option) score.innerText = scoreValue + 3;
  else score.innerText = scoreValue > 0 ? scoreValue - 1 : 0;
}

function checkAnswer({ target }) {
  if (target.classList.contains(ballClass)) {
    if (window.getComputedStyle(target).backgroundColor === `rgb${objective.innerText}`) {
      answer.innerText = 'Acertou!';
      answer.style.color = 'green';
      addToScore(true);
    } else {
      answer.innerText = 'Errou! Tente novamente!';
      answer.style.color = 'red';
      addToScore(false);
    }
  }
}

function setGame() {
  setColorElements();
  setObjective();
  answer.innerText = 'Escolha uma cor';
  answer.style.color = 'black';
}

function onLoad() {
  createColorOptions(6);
  setGame();
  optionsContainer.addEventListener('click', checkAnswer);
  buttonReset.addEventListener('click', setGame);
}

window.onload = onLoad;
