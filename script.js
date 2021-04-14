// Requisito 2 e 4 - Escrever cor no formato RGB  e Sorteio das cores
const colorToBeGuessed = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const scoreItem = document.querySelector('#score');
let score = 0;

function colorBalls() {
  for (let index = 0; index < balls.length; index += 1) {
    const x = Number(Math.floor(Math.random() * 256));
    const y = Number(Math.floor(Math.random() * 256));
    const z = Number(Math.floor(Math.random() * 256));
    balls[index].style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }
  const drawNumber = Number(Math.floor(Math.random() * 5));
  colorToBeGuessed.innerText = balls[drawNumber].style.backgroundColor;
}
colorBalls();

// Requisito 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto
function compare() {
  const circles = document.getElementById('allcircles');
  circles.addEventListener('click', (event) => {
    if (colorToBeGuessed.innerText !== event.target.style.backgroundColor) {
      answer.innerText = 'Errou! Tente novamente!';
      score -= 1;
    } else {
      answer.innerText = 'Acertou!';
      score += 3;
    }
    scoreItem.innerText = `${score}`;
  });
}
compare();

// Requisito 6 - Criação de um botão para iniciar/reiniciar o jogo
function restartTheGame() {
  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', () => {
    answer.innerText = 'Escolha uma cor';
    colorBalls();
  });
}
restartTheGame();
