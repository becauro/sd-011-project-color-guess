const colorRGB = document.getElementById('rgb-color');
const paletteColors = document.getElementById('paleta');

document.getElementById('title').innerText = 'Color Guess';

// Gera um número inteiro aleatório
function randomNumber(number) {
  return Math.round(Math.random() * number);
}

// Gera uma cor aleatória
function generateColor() {
  return `RGB(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
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
  colorRGB.innerText = colorsFromList[randomNumber(5)];
}

// Imprime cor RGB
// function printColor() {
// }

window.onload = function opening() {
  randomColorFromList();
};
