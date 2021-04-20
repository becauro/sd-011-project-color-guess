const colorRGB = document.getElementById('rgb-color');
const paletteColors = document.getElementById('paleta');
const answer = document.getElementById('answer');
const buttonResetGame = document.getElementById('botao-resetar');

document.getElementById('title').innerText = 'Color Guess';
buttonResetGame.innerText = 'Reiniciar jogo';

// Gera um número inteiro aleatório
function randomNumber(number) {
  return Math.round(Math.random() * number);
}

// Gera uma cor aleatória
function generateColor() {
  return `RGB(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}

// Gera uma array de cores
function createArrayColors(dimensionArray) {
  const arrayColors = [];
  for (let index = 0; index < dimensionArray; index += 1) {
    arrayColors.push(generateColor());
  }
  return arrayColors;
}
// Cria paleta de cores
function createPalette() {
  const listOfRandomColors = createArrayColors(6);
  for (let index = 0; index < listOfRandomColors.length; index += 1) {
    const randomColor = document.createElement('div');
    randomColor.className = 'ball';
    randomColor.style.background = listOfRandomColors[index];
    paletteColors.appendChild(randomColor);
  }
  return listOfRandomColors;
}

function randomColorFromList() {
  const colorsFromList = createPalette();
  const randomNumberX = randomNumber(5);
  colorRGB.innerText = colorsFromList[randomNumberX].substr(3);
}

function checkColor(event) {
  const clickedColor = event.target.style.backgroundColor;
  const tempRGBcolor = `rgb${colorRGB.innerText}`;

  if (clickedColor === tempRGBcolor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function eraseAndRestartPalette() {
  const oldPalette = document.getElementsByClassName('ball');
  for (let index = oldPalette.length - 1; index >= 0; index -= 1) {
    oldPalette[index].remove();
  }
  randomColorFromList();
  answer.innerText = 'Escolha uma cor';
}

window.onload = function opening() {
  randomColorFromList();
  answer.innerText = 'Escolha uma cor';
};

paletteColors.addEventListener('click', checkColor);
buttonResetGame.addEventListener('click', eraseAndRestartPalette);
