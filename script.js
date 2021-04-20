const rgbColor = document.getElementById('rgb-color');
const balls = document.getElementById('balls');

function makeRandomInt() {
  return Math.floor(Math.random() * 255);
}

function makeRandomColor() {
  const red = makeRandomInt();
  const green = makeRandomInt();
  const blue = makeRandomInt();
  return `rgb(${red}, ${green}, ${blue})`;
}

window.onload = () => {
  for (let index = 0; index < 6; index += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    div.style.backgroundColor = makeRandomColor();
    balls.appendChild(div);
  }
};
