function generateRandomColor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function checkAnswer(event) {
  const ball = event.target;
  const answer = ball.style.backgroundColor;
  const question = document.getElementById('rgb-color').innerText;
  const result = document.getElementById('answer');
  if (answer === question) {
    result.innerText = 'Acertou!';
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
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
  const ballList = document.getElementsByClassName('ball');
  const question = document.getElementById('rgb-color');
  const draw = ballList[Math.floor(Math.random() * ballList.length)];
  question.innerText = draw.style.backgroundColor;
}

window.onload = function load() {
  createColors();
  getQuestion();
};
