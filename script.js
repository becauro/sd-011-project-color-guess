const colorOptions = 6;

function generateRandomRGB() {
  const container = document.querySelector('#rgb-color');
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomRGB = '(' + r + ', ' + g + ', ' + b + ')';
  container.innerText = randomRGB;
}

generateRandomRGB();

function generateColorBalls() {
  const container = document.querySelector('#circle-container');
  for (let index = 0; index < colorOptions; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    container.appendChild(ball);
  }
}

generateColorBalls();