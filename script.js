function generateRandomColor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function createColors() {
  const container = document.getElementById('ball-container');
  for (let index = 0; index < 5; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = generateRandomColor();
    container.appendChild(ball);
  }
}

window.onload = function load() {
  createColors();
};
