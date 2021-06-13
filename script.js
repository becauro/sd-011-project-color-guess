const coloredCircleList = document.querySelectorAll('.ball');
const rightAnswer = document.getElementById('rgb-color');
const answerTag = document.getElementById('answer');
const score = document.getElementById('score');
let scoreValue = 0;
localStorage.setItem('score', scoreValue);
score.innerText = `Placar: ${scoreValue}`;
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

const getScore = () => {
  scoreValue = parseFloat(localStorage.getItem('score'));
  if (answerTag.innerText === 'Acertou!') {
    scoreValue += 3;
    console.log(scoreValue);
    score.innerText = `Placar: ${scoreValue}`;
    localStorage.setItem('score', scoreValue);
  }
};

coloredCircleList.forEach((circle) => {
  circle.addEventListener('click', ({ target }) => {
    if (target.style.backgroundColor.slice(3, target.length) === rightAnswer.innerText) {
      answerTag.innerText = 'Acertou!';
      getScore();
    } else answerTag.innerText = 'Errou! Tente novamente!';
  });
});

// const resetButton = document.getElementById('reset-game');
// resetButton.addEventListener('click', 

function resetPage() {
  // window.location.reload();
  answerTag.innerText = 'Escolha uma cor';
  randomColor();
  setRightAnswer(randomColor());
  console.log(localStorage.getItem('score'));
  score.innerText = `Placar: ${localStorage.getItem('score')}`;
}
