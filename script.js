const colorBalls = document.querySelector('#color-palette').children;

function randomColor() {
  const random = 'rgb(X,X,X)';
  let tank = '';
  for (let i = 0; i < random.length; i += 1) {
    const randomNumber = Math.floor(Math.random() * 256);
    if (random[i] === 'X') {
      tank += randomNumber;
    } else tank += random[i];
  }
  return tank;
}

// prettier-ignore
(function GenerateColors() {
  for (let i = 0; i < colorBalls.length; i += 1) {
    colorBalls[i].style.backgroundColor = randomColor();
  }
}());

let xarp = 2;
