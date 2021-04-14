window.onload = function start() {
  const circles = document.querySelectorAll('.ball');

  for (let index = 0; index < circles.length; index += 1) {
    const color1 = parseInt(Math.random() * 255, 10);
    const color2 = parseInt(Math.random() * 255, 10);
    const color3 = parseInt(Math.random() * 255, 10);
    circles[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  }
  const number = parseInt(Math.random() * 6, 10);
  const colorTarget = document.querySelector('#rgb-color');
  const colorSorted = circles[number].style.backgroundColor;
  colorTarget.innerHTML = colorSorted;
};

const circleClick = document.querySelector('#colors');
const result = document.querySelector('#answer');
const score = document.querySelector('#score');
let counter = 0;

function check(event) {
  const colorTarget = document.querySelector('#rgb-color');
  const colorSelected = event.target;
  if (colorSelected.style.backgroundColor === colorTarget.innerText) {
    result.innerText = 'Acertou!';
    counter += 3;
    score.innerText = `${counter}`;
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
}

circleClick.addEventListener('click', check);

const buttonReset = document.querySelector('#reset-game');

function restart() {
  window.onload();
  result.innerText = 'Escolha uma cor';
}

buttonReset.addEventListener('click', restart);
