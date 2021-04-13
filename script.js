const getP = document.querySelector('#rgb-color');
const getBall = document.getElementsByClassName('ball')

function mathRandom() {
  return Math.floor(Math.random() * 255);
}

function randomColorBalls() {
  for(let index = 0; index < getBall.length; index += 1) {
    getBall[index].style.backgroundColor = `rgb(${mathRandom()}, ${mathRandom()}, ${mathRandom()})`;
  }
}
randomColorBalls();

function rgbColorParagraph() {
  const color = Math.floor(Math.random() * 6)
  getP.innerHTML = getBall[color].style.backgroundColor
}
rgbColorParagraph();
