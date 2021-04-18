const balls = document.querySelectorAll('.ball');
const answerRGB = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const options = document.querySelector('#options');
const resetGameButton = document.querySelector('#reset-game');
const score = document.querySelector('#score');

// Função para gerar números RGB aleatórios;
function randomRGBNumber() {
  const RGB = Math.floor(Math.random() * 255 + 1);

  return RGB;
}

// Função que cria um código RGB;
function generateRGB() {
  let RGBColor = 'rgb';
  RGBColor += `(${randomRGBNumber()}`;
  RGBColor += `, ${randomRGBNumber()}`;
  RGBColor += `, ${randomRGBNumber()})`;

  return RGBColor;
}

// Função que adiciona RGB à classe ball

function addRGBColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRGB();
  }
}

window.onload = addRGBColor;

// Escolhe uma das cores aleatórias para colocar no título

function changeTitleQuestion() {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  let randomTitle = balls[randomNumber].style.backgroundColor;
  randomTitle = randomTitle.replaceAll('rgb', '');
  answerRGB.innerText = randomTitle;
}

// Verifica se acertou a cor

function checkAnswer(event) {
  let titleRGBValue = answerRGB.innerText;
  titleRGBValue = `rgb${titleRGBValue}`;

  if (event.target.style.backgroundColor === titleRGBValue) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }

  return answer.innerText;
}

options.addEventListener('click', checkAnswer);

// Função para resetar o jogo

function resetGame() {
  addRGBColor();
  changeTitleQuestion();

  answer.innerText = 'Escolha uma cor';
}

resetGameButton.addEventListener('click', resetGame);

// Função para placar do jogo

function addScore(event) {
  if (checkAnswer(event) === 'Acertou!') {
    const currentScore = score.innerText[score.innerText.length - 1];
    let newScore = currentScore;
    newScore = parseFloat(newScore);
    newScore += 3;
    score.innerText = score.innerText.replaceAll(currentScore, newScore);
  }
}

options.addEventListener('click', addScore);

// Adiciona funções para iniciar com o carregamento da página

window.onload = function start() {
  addRGBColor();
  changeTitleQuestion();
};
