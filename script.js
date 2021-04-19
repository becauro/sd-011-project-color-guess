const colorBalls = document.querySelector('#color-palette').children;
const rgbColor = document.querySelector('#rgb-color');
const h2 = document.querySelector('h2');
const resetButton = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function randomColor() {
  const random = 'rgb(X,X,X)';
  let tank = '';
  for (let i = 0; i < random.length; i += 1) {
    const randomN = Math.floor(Math.random() * 256);
    if (random[i] === 'X') {
      tank += randomN;
    } else tank += random[i];
  }
  return tank;
}

// prettier-ignore
function GenerateColors() {
  for (let i = 0; i < colorBalls.length; i += 1) {
    colorBalls[i].style.backgroundColor = randomColor();
  }
}
GenerateColors();

function randomNumber() {
  return Math.floor(Math.random() * 6);
}

colorBalls[randomNumber()].style.backgroundColor = 'rgb( 168, 34, 1)';

let scoreValue = 0;

function answerFunction(event) {
  const r = event.target.style.backgroundColor;
  const s = `rgb${rgbColor.innerText}`;
  const t = h2;
  if (r === s) {
    t.innerText = 'Acertou!';
    scoreValue += 3;
    score.innerText = `Placar:${scoreValue}`;
  } else if (r !== s) {
    t.innerText = 'Errou! Tente novamente!';
  }
}

function checkAnswer() {
  for (let i = 0; i < colorBalls.length; i += 1) {
    colorBalls[i].addEventListener('click', answerFunction);
  }
}
checkAnswer();
console.log(`"rgb${rgbColor.innerText}"`);

function comparison(x, i) {
  const a = x[i] !== 'r';
  const b = x[i] !== 'g';
  const c = x[i] !== 'b';
  return a && b && c;
}

const regularRGB = 'rgb(255, 255, 255)';

function randomColorNumber() {
  return colorBalls[randomNumber()].style.backgroundColor;
}

function resetGameFunction() {
  GenerateColors();
  const x = randomColorNumber();
  let temp = '';
  for (let i = 0; i < x.length; i += 1) {
    if (comparison(x, i)) {
      temp += x[i];
    }
  }

  h2.innerText = 'Escolha uma cor';
  rgbColor.innerText = temp;
  rgbColor.style.backgroundColor = `rgb${temp}`;
}

function resetGame() {}
resetButton.addEventListener('click', resetGameFunction);
resetGame();
