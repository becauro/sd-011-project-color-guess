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
