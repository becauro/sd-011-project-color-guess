const colorOptions = 6;
let currentRGB = '';
let canPlay = true;

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

function sumScore(score) {
  let scoreNum = parseInt(score.innerText, 10);
  scoreNum += 3;
  return scoreNum;
}

function subtractScore(score) {
  let scoreNum = parseInt(score.innerText, 10);
  if (scoreNum > 0) {
    scoreNum -= 1;
  }
  return scoreNum;
}

function clickInTheBalls(ball) {
  const answerText = document.querySelector('#answer');
  const score = document.querySelector('#score');
  ball.addEventListener('click', () => {
    if (canPlay) {
      const ballColor = ball.style.backgroundColor;
      const correctColor = `rgb${currentRGB}`;
      if (ballColor === correctColor) {
        answerText.innerText = 'Acertou!';
        score.innerText = sumScore(score);
      } else {
        answerText.innerText = 'Errou! Tente novamente!';
        score.innerText = subtractScore(score);
      }
      canPlay = false;
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
    canPlay = true;
  });
}

resetGameButton();
