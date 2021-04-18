const divColors = document.querySelectorAll('.ball');
console.log(divColors);

function generateRandomColor() {
  let color = [];
  for (let index = 0; index < 3; index += 1) {
    const number = Math.floor(Math.random() * 255);
    color.push(number);
  }
  const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  return rgbColor;
}

function addColor() {
  for (let index = 0; index < divColors.length; index += 1) {
    const color = generateRandomColor();
    divColors[index].style.backgroundColor = color;
  }
}

function init() {
  addColor();
}

window.onload = init;