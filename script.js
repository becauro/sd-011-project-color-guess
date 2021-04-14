// Requisito 2 e 4 - Escrever cor no formato RGB  e Sorteio das
const colorToBeGuessed = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');

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

function compare() {
  const circles = document.getElementById('allcircles');
  circles.addEventListener('click', (event) => {
    const answer = document.getElementById('answer');
    if (colorToBeGuessed.innerText !== event.target.style.backgroundColor) {
      answer.innerText = 'Errou! Tente novamente!';
    } else {
      answer.innerText = 'Acertou!';
    }
  });
}
compare();
