const colorOptions = 6;
let currentRGB = '';

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomRGB = `(${r}, ${g}, ${b})`;
  return randomRGB;
}

function randomRGBText() {
  currentRGB = '';
  const container = document.querySelector('#rgb-color');
  currentRGB = generateRandomRGB();
  container.innerText = currentRGB;
}

randomRGBText();

function clickInTheBalls(ball) {
  const answerText = document.querySelector('#answer');
  ball.addEventListener('click', () => {
    const ballColor = ball.style.backgroundColor;
    const correctColor = `rgb${currentRGB}`;
    if (ballColor === correctColor) {
      answerText.innerText = 'Acertou!';
    } else {
      answerText.innerText = 'Errou! Tente novamente!';
    }
  });
}

function generateColorBalls() {
  const container = document.querySelector('#circle-container');
  const selectedBall = Math.floor(Math.random() * 6);
  container.innerHTML = '';
  for (let index = 0; index < colorOptions; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    container.appendChild(ball);
    if (index === selectedBall) {
      ball.style.backgroundColor = `rgb${currentRGB}`;
    } else {
      ball.style.backgroundColor = `rgb${generateRandomRGB()}`;
    }
    clickInTheBalls(ball);
  }
}

generateColorBalls();

function resetGameButton() {
  const btnResetGame = document.querySelector('#reset-game');
  const answerText = document.querySelector('#answer');
  btnResetGame.addEventListener('click', () => {
    randomRGBText();
    generateColorBalls();
    answerText.innerText = 'Escolha uma cor';
  });
}

resetGameButton();
