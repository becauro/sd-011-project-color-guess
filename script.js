const resetGameButton = document.getElementById('reset-game');
const colours = [];
const allBalls = document.getElementsByClassName('ball');
const winner = document.querySelector('#answer');
const allPalettes = document.getElementById('color-palette')
const score = document.getElementById('score');
const buttonForReady = document.getElementById('teste');

function createPaletteContainer(num) {
  for (let index = 0; index < num; index += 1) {
    const palettesBox = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettesBox);
    palettesBox.className = 'ball';
  }
}
createPaletteContainer(6);

function randomColor() {
  const paletteColor = document.getElementsByClassName('ball');
  for (let index = 0; index < paletteColor.length; index += 1) {
    const r = parseInt(Math.random() * 255, 10);
    const g = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 10);
    paletteColor[index].style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    colours.push(paletteColor[index])
    const colourPicked = colours[Math.floor(Math.random()*colours.length)];
    winner.textContent = colourPicked.style.backgroundColor;
  }
}
buttonForReady.addEventListener('click', randomColor);

function correctAswner() {
  allPalettes.addEventListener('click', (event) => {
    const clickedColor = event.target;
    if (clickedColor.style.backgroundColor === winner.textContent) {
      alert('Acertou!');
    } else {
      alert('Errou!');
    }
  });
}
correctAswner();