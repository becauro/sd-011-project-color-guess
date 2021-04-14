const color = document.getElementsByClassName('ball');
const rgbColor = document.getElementById('rgb-color');

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const msg = `(${r}, ${g}, ${b})`;
  return msg;
}

function randomRgb() {
  rgbColor.innerText = randomColor();
}

function ballColor() {
  const randomPosition = Math.floor(Math.random() * 6);
  const rgbColorComplete = `rgb${rgbColor.innerText}`;
  console.log(rgbColorComplete)

  for (let i = 0; i < color.length; i += 1) {
    color[i].style.backgroundColor = `rgb${randomColor()}`;
  }

  color[randomPosition].style.backgroundColor = rgbColorComplete;
}

function checkCorrect() {
  const p = document.getElementById('answer');
  const rgbColorComplete = `rgb${rgbColor.innerText}`;
  p.innerText = 'Escolha uma cor';

  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', () => {
      if (color[i].style.backgroundColor === rgbColorComplete) {
        p.innerText = 'Acertou!';
      } else {
        p.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

function resetGame() {
  const button = document.getElementById('reset-game');

  button.addEventListener('click', () => {
    randomRgb();
    ballColor();
    checkCorrect();
  })
}

ballColor();
checkCorrect();
resetGame()
