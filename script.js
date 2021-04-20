const rgbColor = document.getElementById('rgb-color');
const balls = document.getElementById('balls');

window.onload = () => {
  for (let index = 0; index < 6; index += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    balls.appendChild(div);
  }
};
