const balls = document.getElementById('balls');
const rgbColor = document.getElementById('rgb-color');

function generateRamdomColor() {
  const color = [];
  for (let index = 0; index < 3; index++) {
    color[index] = Math.ceil(Math.random() * 255);
  }
  return `(${color[0]} , ${color[1]} , ${color[2]})`
}

function createDivBall() {
  const colors = [];
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    colors[index] = generateRamdomColor();
    ball.style.backgroundColor = `rgb${colors[index]}`;
    balls.appendChild(ball);
  }
  return colors;
}
let colors = createDivBall();
console.log(colors);