// 2

const rgbColor = document.getElementById('rgb-color');
function generateRandomColor() {
  const redCode = Math.floor(Math.random() * 255);
  const greenCode = Math.floor(Math.random() * 255);
  const blueCode = Math.floor(Math.random() * 255);
  const rgbCode = `(${redCode}, ${greenCode}, ${blueCode})`;
  rgbColor.innerText = rgbCode;
}
window.addEventListener('load', generateRandomColor);

// 3

const ballContainer = document.getElementById('ball-container');
function generateBalls() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ballContainer.appendChild(ball);
  }
}
window.addEventListener('load', generateBalls);

// 4

function createBallColors() {
  const colorBalls = document.getElementsByClassName('ball');
  for (let index = 0; index < 6; index += 1) {
    const redCode = Math.floor(Math.random() * 255);
    const greenCode = Math.floor(Math.random() * 255);
    const blueCode = Math.floor(Math.random() * 255);
    colorBalls[index].style.backgroundColor = `rgb(${redCode}, ${greenCode}, ${blueCode})`;
    console.log(colorBalls[index].style.backgroundColor);
  }
}
window.addEventListener('load', createBallColors);

// 5

const answer = document.getElementById('answer');
function checkAnswer(event) {
  const shortAnswer = event.target.style.backgroundColor.slice(3);
  if (shortAnswer === rgbColor.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

ballContainer.addEventListener('click', checkAnswer);
