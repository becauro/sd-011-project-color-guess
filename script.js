const getP = document.querySelector('#rgb-color');
const getBall = document.getElementsByClassName('ball');
const getColorOptions = document.getElementById('color-options');
const getAnswer = document.getElementById('answer');
const getReset = document.getElementById('reset-game');

function mathRandom() {
  return Math.floor(Math.random() * 255);
}

function randomColorBalls() {
  for (let index = 0; index < getBall.length; index += 1) {
    getBall[index].style.backgroundColor = `rgb(${mathRandom()}, ${mathRandom()}, ${mathRandom()})`;
  }
}
randomColorBalls();

function rgbColorParagraph() {
  const color = Math.floor(Math.random() * 6);
  getP.innerHTML = getBall[color].style.backgroundColor;
}
rgbColorParagraph();

function rightOrWrong() {
  getColorOptions.addEventListener('click', (event) => {
    if (getP.innerText === event.target.style.backgroundColor) {
      getAnswer.innerHTML = 'Acertou!';
    } if (getP.innerText !== event.target.style.backgroundColor) {
      getAnswer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
rightOrWrong();

function resetGame() {
  getReset.addEventListener('click', () => {
    randomColorBalls()
    rgbColorParagraph()
    getAnswer.innerHTML = 'Escolha uma cor'
  })
}
resetGame()
