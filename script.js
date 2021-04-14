const visorColor = document.getElementById('rgb-color');
const panelColor = document.querySelector('.colors');
const result = document.getElementById('answer');
const btnRest = document.getElementById('reset-game');
const score = document.getElementById('score');

function randColor() {
  return Math.floor(Math.random(255) * 255);
}

function addball(qtd) {
  for (let index = 0; index < qtd; index += 1) {
    const creatBall = document.createElement('div');
    creatBall.classList.add('ball');
    creatBall.style.backgroundColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
    panelColor.appendChild(creatBall);
  }
}

addball(6);

function getBallRand() {
  const getBalls = document.querySelectorAll('.ball');
  const rand = Math.floor(Math.random(getBalls.length) * getBalls.length);
  visorColor.innerText = getBalls[rand].style.backgroundColor.replace('rgb', '');
}

getBallRand();
let acertou = 0;

panelColor.addEventListener('click', (event) => {
  const elem = event.target.style.backgroundColor.replace('rgb', '');
  const text = visorColor.innerText;

  if (elem === text) {
    result.innerText = 'Acertou!';
    acertou += 3;
    score.innerText = acertou;
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
});

btnRest.addEventListener('click', () => {
  panelColor.innerHTML = '';
  result.innerText = 'Escolha uma cor';
  addball(6);
  getBallRand();
});
