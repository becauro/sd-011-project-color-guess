const ballList = document.getElementsByClassName('ball');
function generateRandomColor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function score() {
  const points = document.getElementById('score');
  let number = parseInt(points.innerText, 10);
  number += 3;
  // sessionStorage.setItem('score', number);
  points.innerText = number;
}

function removeEventsCheckAnswer(method) {
  for (let index = 0; index < ballList.length; index += 1) {
    ballList[index].removeEventListener('click', method);
  }
}

function checkAnswer(event) {
  const ball = event.target;
  const answer = ball.style.backgroundColor;
  const question = document.getElementById('rgb-color').innerText;
  const result = document.getElementById('answer');
  if (answer === question) {
    result.innerText = 'Acertou!';
    score();
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
  removeEventsCheckAnswer(checkAnswer);
}

function createColors() {
  const container = document.getElementById('ball-container');
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = generateRandomColor();
    ball.addEventListener('click', checkAnswer);
    container.appendChild(ball);
  }
}

function getQuestion() {
  const question = document.getElementById('rgb-color');
  const draw = ballList[Math.floor(Math.random() * ballList.length)];
  question.innerText = draw.style.backgroundColor;
}

function resetGame() {
  for (let index = 0; index < ballList.length; index += 1) {
    ballList[index].style.backgroundColor = generateRandomColor();
    ballList[index].addEventListener('click', checkAnswer);
  }
  getQuestion();
  document.getElementById('answer').innerText = 'Escolha uma cor';
}

function addEventResetGame() {
  const button = document.getElementById('reset-game');
  button.addEventListener('click', resetGame);
}

// function loadScore() {
//   const points = document.getElementById('score');
//   const memory = sessionStorage.getItem('score');
//   if (memory === null) {
//     points.innerText = '0';
//   } else {
//     points.innerText = memory;
//   }
// }

window.onload = function load() {
  createColors();
  getQuestion();
  addEventResetGame();
  // loadScore();
};
