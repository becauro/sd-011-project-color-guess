const ballsContainer = document.querySelector('.balls-container');
const colorBalls = document.querySelectorAll('.ball');

ballsContainer.addEventListener('click', (e) => {
  if (e.target !== this) {
    console.log(e.target.style.backgroundColor);
  }
});

colorBalls.forEach((ball) => {
  const red = Math.floor(Math.random() * 257);
  const green = Math.floor(Math.random() * 257);
  const blue = Math.floor(Math.random() * 257);
  const ballElement = ball;
  ballElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
