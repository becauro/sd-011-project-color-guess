const ballClass = 'ball';

const optionsContainer = document.getElementById('options-container');

const spanElement = document.createElement('span');

function createColorOptions(quantity) {
  for (let index = 0; index < quantity; index += 1) {
    const newSpan = spanElement.cloneNode();
    newSpan.classList.add(ballClass);
    optionsContainer.appendChild(newSpan);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
  return `(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
}

function setColorElements() {
  const elements = document.getElementsByClassName(ballClass);

  for (let index = 0; index < elements.length; index += 1) {
    elements[index].style.backgroundColor = `rgb${generateRandomColor()}`;
  }
}

function onLoad() {
  createColorOptions(6);
  setColorElements();
}

window.onload = onLoad;
