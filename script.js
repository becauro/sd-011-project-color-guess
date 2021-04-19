const colorBalls = document.querySelector('#color-palette').children;
const rgbColor = document.querySelector('#rgb-color');
const colorSelectionH2 = document.querySelector('#color-selection h2');

function randomColor() {
  const random = 'rgb(X,X,X)';
  let tank = '';
  for (let i = 0; i < random.length; i += 1) {
    const randomNumber = Math.floor(Math.random() * 256);
    if (random[i] === 'X') {
      tank += randomNumber;
    } else tank += random[i];
  }
  return tank;
}

// prettier-ignore
(function GenerateColors() {
  for (let i = 0; i < colorBalls.length; i += 1) {
    colorBalls[i].style.backgroundColor = randomColor();
  }
}());

function randomCorrect() {
  return Math.floor(Math.random() * 6);
}

colorBalls[randomCorrect()].style.backgroundColor = 'rgb( 168, 34, 1)';

function checkAnswer() {
  for (let i = 0; i < colorBalls.length; i += 1) {
    colorBalls[i].addEventListener('click', (event) => {
      const r = event.target.style.backgroundColor;
      const s = `rgb${rgbColor.innerText}`;
      const t = colorSelectionH2;
      if (r === s) {
        t.innerText = 'Acertou!';
      } else if (r !== s) {
        t.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
checkAnswer();
console.log(`"rgb${rgbColor.innerText}"`);
