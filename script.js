const colorList = [];
const colorBalls = document.getElementsByClassName('ball');

function colorGen(n) {
  for (let index = 0; index < n; index += 1) {
    const color1 = Math.floor(Math.random() * 255) + 1;
    const color2 = Math.floor(Math.random() * 255) + 1;
    const color3 = Math.floor(Math.random() * 255) + 1;
    const randColor = `rgb(${color1}, ${color2}, ${color3})`;
    colorList.push(randColor);
  }
  return colorList;
}

function fillColorOptions() {
  colorGen(6);
  for (let index = 0; index < colorList.length; index += 1) {
    colorBalls[index].style.backgroundColor = colorList[index];
  }
  const correctColorIndex = Math.floor(Math.random() * 6);
  colorBalls[correctColorIndex].id = 'answer';
  const correctColor = colorList[correctColorIndex];
  const formattedCorrectColor = correctColor.replace('rgb', '');
  document.getElementById('rgb-color').innerText = formattedCorrectColor;
  return correctColor;
}
fillColorOptions();

function checkColor() {
  document.getElementById('game-status').innerText = 'Escolha uma cor'
  for (let index = 0; index < colorBalls.length; index += 1) {
    colorBalls[index].addEventListener('click', (event) => {
      let correctColor = document.getElementById('rgb-color').innerText;
      correctColor = `rgb${correctColor}`;
      const selectedColor = event.target;
      selectedColor.id = 'answer';
      if (correctColor === selectedColor.style.backgroundColor) {
        document.getElementById('game-status').innerText = 'Acertou!';
      } else {
        document.getElementById('game-status').innerText = 'Errou! Tente novamente';
      }
    });
  }
}
checkColor();
