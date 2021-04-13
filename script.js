// Requisito 2 - Escrever cor no formato RGB
const colorToBeGuessed = document.querySelector('#rgb-color');

function drawNumbers() {
  const x = Number(Math.floor(Math.random() * 256));
  const y = Number(Math.floor(Math.random() * 256));
  const z = Number(Math.floor(Math.random() * 256));
  const color = `rgb(${x}, ${y}, ${z})`;
  colorToBeGuessed.innerText = `${color},`;
}
drawNumbers();

function colorBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    const x = Number(Math.floor(Math.random() * 256));
    const y = Number(Math.floor(Math.random() * 256));
    const z = Number(Math.floor(Math.random() * 256));
    balls[index].style.backgroundColor = `rgb( ${x}, ${y}, ${z} )`;
  }
}
colorBalls();
