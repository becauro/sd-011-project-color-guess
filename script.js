const circleContainer = document.getElementById('color-array');
const circleArray = circleContainer.children;

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

function createOptions(numberOfOptions) {
  for (let i = 0; i < numberOfOptions; i += 1) {
    const newOption = document.createElement('li');
    newOption.classList.add('ball');

    circleContainer.appendChild(newOption);
  }
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

createOptions(6);
assignRandomColors();
assignRandomAnswer();
