const circleContainer = document.getElementById('color-array');
const circleArray = circleContainer.children;
const statusText = document.getElementById('answer');
let canChoose;
let currentScore = 0;
const scoreElement = document.getElementById('score');

function changeAllCircleStates(enabled) {
  for (let i = 0; i < circleArray.length; i += 1) {
    if (enabled) {
      circleArray[i].classList.remove('disabled');
    } else {
      circleArray[i].classList.add('disabled');
    }
  }
}

function updateScore(scoreChange) {
  currentScore += scoreChange;

  scoreElement.innerText = currentScore;
}

function handleCorrectAnswer() {
  statusText.innerText = 'Acertou!';
  updateScore(+3);
}

function handleWrongAnswer() {
  statusText.innerText = 'Errou! Tente novamente!';
  updateScore(-1);
}

function handleChoiceClick(e) {
  if (!canChoose) {
    return;
  }

  const clickedCirlce = e.target;

  if (clickedCirlce === answerElement) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }

  canChoose = false;
  changeAllCircleStates(false);
}

function createOptions(numberOfOptions) {
  for (let i = 0; i < numberOfOptions; i += 1) {
    const newOption = document.createElement('li');
    newOption.classList.add('ball');
    newOption.addEventListener('click', handleChoiceClick);

    circleContainer.appendChild(newOption);
  }
}

function getRandomRGBColorString() {
  let finalString = '(';

  for (let i = 0; i < 3; i += 1) {
    const randomTone = Math.floor(Math.random() * 256);

    finalString += randomTone.toString(10);
    if (i !== 2) {
      finalString += ', ';
    }
  }

  finalString += ')';
  return finalString;
}

function assignRandomColors() {
  for (let i = 0; i < circleArray.length; i += 1) {
    const rgbString = getRandomRGBColorString();
    circleArray[i].style.backgroundColor = 'rgb' + rgbString;
  }
}

function getRandomIndex() {
  const max = circleArray.length;

  const randomIndex = Math.floor(Math.random() * max);
  return randomIndex;
}

function getRGBStringFromCircle(index) {
  const bgColor = circleArray[index].style.backgroundColor;
  const rgbString = bgColor.replace('rgb', '');

  return rgbString;
}

let answerElement;

function assignRandomAnswer() {
  const answerIndex = getRandomIndex();
  const rgbString = getRGBStringFromCircle(answerIndex);

  answerElement = circleArray[answerIndex];
  const questionString = document.getElementById('rgb-color');

  questionString.innerText = rgbString;
}

function draftNewGame() {
  assignRandomColors();
  assignRandomAnswer();

  statusText.innerText = 'Escolha uma cor acima';
  canChoose = true;
  changeAllCircleStates(true);
}

const resetGameButton = document.getElementById('reset-game');

resetGameButton.addEventListener('click', draftNewGame);

createOptions(6);
draftNewGame();
