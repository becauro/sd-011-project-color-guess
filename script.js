const coloredCircleList = document.querySelectorAll('.ball');
const rightAnswer = document.getElementById('rgb-color');
const answerTag = document.getElementById('answer');
answerTag.innerText = 'Escolha uma cor';

const randomColor = () => {
  for (let i = 0; i < coloredCircleList.length; i += 1) {
    const red = Math.ceil(Math.random() * 525);
    const green = Math.ceil(Math.random() * 525);
    const blue = Math.ceil(Math.random() * 525);
    coloredCircleList[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  return coloredCircleList;
};
randomColor();

const setRightAnswer = (array) => {
  const choosenRightColor = array[Math.floor((Math.random() * array.length))];
  const choosenRgbColor = choosenRightColor.style.backgroundColor;
  rightAnswer.innerText = choosenRgbColor.slice(3, choosenRgbColor.length);
  return choosenRgbColor;
};
setRightAnswer(randomColor());

coloredCircleList.forEach((circle) => {
  circle.addEventListener('click', ({ target }) => {
    if (target.style.backgroundColor.slice(3, target.length) === rightAnswer.innerText) {
      answerTag.innerText = 'Acertou!';
    } else answerTag.innerText = 'Errou! Tente novamente!';
  });
});

const resetButton = document.getElementById('reset-game');
console.log(resetButton);
document.getElementById('reset-game').addEventListener('click', () => {
  window.location.reload();
  answerTag.innerText = 'Escolha uma cor';
  randomColor();
  setRightAnswer(randomColor());
});
