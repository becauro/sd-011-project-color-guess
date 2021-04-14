const balls = document.getElementById('balls');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetGame = document.getElementById('reset-game');
const score = document.getElementById('score');

function generateRamdomColor() {
  const color = [];
  for (let index = 0; index < 3; index++) {
    color[index] = Math.ceil(Math.random() * 255);
  }
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

function createDivBall() {
  const colors = [];
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    colors[index] = generateRamdomColor();
    ball.style.backgroundColor = `${colors[index]}`;
    balls.appendChild(ball);
  }
  return colors;
}
let colors = createDivBall();
let randnum = Math.ceil(Math.random() * 5);
rgbColor.innerText = `${colors[randnum]}`;

balls.addEventListener('click', (event) => {
  eTarget = event.target;
  if (eTarget.className === 'ball') {
    console.log(rgbColor.innerText)
    console.log(eTarget.style.backgroundColor)
    if (`${eTarget.style.backgroundColor}` === `${rgbColor.innerText}`) {
      answer.innerText = 'Acertou!'
      score.innerText = Number(score.innerText) + 3;
    } else {
      answer.innerText = 'Errou! Tente novamente!'
    }
  }
});

resetGame.addEventListener('click', () => {
  answer.innerText = 'Escolha uma cor';
  for (let index = 0; index < balls.childElementCount;) {
    balls.removeChild(balls.children[index]);
  }
  let colors = createDivBall();
  let randnum = Math.ceil(Math.random() * 5);
  rgbColor.innerText = `${colors[randnum]}`;
});