const HINT_RGB = document.getElementById('rgb-color');
const GAME_COLORS = document.getElementById('game-colors');
function randomRgbColor() {
  const COLORS = [];
  for (let index = 0; index < 3; index += 1) {
    COLORS.push(Math.floor(Math.random() * 256));
  }
  const RANDOM_COLORS = `rgb(${COLORS[0]},${COLORS[1]},${COLORS[2]})`;
  return RANDOM_COLORS;
}

const WIN_INDEX = Math.floor(Math.random() * 6);

function gameColors() {
  let winColor;
  for (let index = 0; index < 6; index += 1) {
    const NEW_COLOR = document.createElement('div');
    NEW_COLOR.className = 'ball';
    NEW_COLOR.style.backgroundColor = randomRgbColor();
    GAME_COLORS.appendChild(NEW_COLOR);
    if (index === WIN_INDEX) {
      winColor = NEW_COLOR.style.backgroundColor;
    }
  }
  return winColor;
}

const WINNER = gameColors();
const END = WINNER.length;
HINT_RGB.innerText = WINNER.substring(3, END);

const ANSWER = document.getElementById('answer');

GAME_COLORS.addEventListener('click', (event) => {
  const SELECTED = event.target;
  if (SELECTED.style.backgroundColor === WINNER) {
    ANSWER.innerText = 'Acertou!';
  } else {
    ANSWER.innerText = 'Errou! Tente novamente!';
  }
});
