function addBalls() {
  const element = document.getElementById('wrapper-balls');
  const amountOfBalls = 6;
  for (let i = 0; i < amountOfBalls; i += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    element.appendChild(div);
  }
}
addBalls();

function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function getBackgroundColor() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.background = randomRgb();
  }
}
getBackgroundColor();

function getBackGroundValue() {
  const balls = document.querySelectorAll('.ball');
  const prop = [];
  for (let i = 0; i < balls.length; i += 1) {
    prop.push(balls[i].style.background);
  }
  const result =  prop.sort();
  return result[0];
}
// console.log(getBackGroundValue());

function handleRgbValue() {
  const element = document.getElementById('rgb-color');
  element.innerHTML = getBackGroundValue().replace('rgb', "");
}
handleRgbValue();

function clickBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', trueOrFalse);
  }
}
clickBalls();

function trueOrFalse(event) {
  const bgValue = getBackGroundValue();
  const answer = document.getElementById('answer');
  const score = document.getElementById('score');
  if (bgValue === event.target.style.background) {
    answer.innerHTML = 'Acertou! Novas Cores!';
    score.innerText = Number(score.innerText) + 3;
    storageScore();
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    score.innerHTML = 0;
  }
}

function reload() {
  getBackgroundColor();
  handleRgbValue();
  document.getElementById('answer').innerHTML = 'Escolha uma cor';
}

function storageScore() {
  const score = document.getElementById('score');
  sessionStorage.setItem('score', score.innerHTML)
}

// window.onload = function() {
//   const score = document.getElementById('score');
//   score.innerHTML = sessionStorage.getItem('score');
// }