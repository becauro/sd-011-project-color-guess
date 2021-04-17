const HINT_RGB = document.getElementById('rgb-color');

function randomRgbColor() {
  let colors = [];
  for (let index = 0; index < 3; index += 1) {
    colors.push(Math.floor(Math.random() * 256));
  }
  colors = `rgb (${colors[0]}, ${colors[1]}, ${colors[2]})`;
  return colors;
}

window.onload = function() {
  HINT_RGB.innerText = randomRgbColor();
}
