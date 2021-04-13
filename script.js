let colorList = [];
const colorBalls = document.getElementsByClassName('ball');
const statusText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

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
  //colorBalls[correctColorIndex].id = 'answer';
  const correctColor = colorList[correctColorIndex];
  const formattedCorrectColor = correctColor.replace('rgb', '');
  document.getElementById('rgb-color').innerText = formattedCorrectColor;
  return correctColor;
}
fillColorOptions();

function checkColor() {
  statusText.innerText = 'Escolha uma cor';
  let currentScore = parseInt(document.getElementById('score').innerText, 10);
  
  for (let index = 0; index < colorBalls.length; index += 1) {
    colorBalls[index].addEventListener('click', (event) => {
      let correctColor = document.getElementById('rgb-color').innerText;
      correctColor = `rgb${correctColor}`;
      const selectedColor = event.target;
      //selectedColor.id = 'answer';
      if (correctColor === selectedColor.style.backgroundColor) {
        statusText.innerText = 'Acertou!';
        currentScore = currentScore + 3
        document.getElementById('score').innerText = currentScore
        
      } else {
        statusText.innerText = 'Errou! Tente novamente';
      }
    });
  }
}
checkColor();

function reset() {
  resetButton.addEventListener('click', () => {
    colorList = [];
    fillColorOptions();
    checkColor();
  })
}
reset();
