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
  const container = document.querySelector('#rgb-color');
  currentRGB = generateRandomRGB();
  container.innerText = currentRGB;
}

randomRGBText();

function generateColorBalls() {
  const container = document.querySelector('#circle-container');
  const selectedBall = Math.floor(Math.random() * 6);
  for (let index = 0; index < colorOptions; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    container.appendChild(ball);
    if (index === selectedBall) {
      ball.style.backgroundColor = `rgb${currentRGB}`;
    } else {
      ball.style.backgroundColor = `rgb${generateRandomRGB()}`;
    }
  }
}

generateColorBalls();

function clickInTheBalls() {
  const ballsArray = document.getElementsByClassName('ball');
  const answerText = document.querySelector('#answer');
  for (let index = 0; index < ballsArray.length; index += 1) {
    const ball = ballsArray[index];
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
}

clickInTheBalls();
