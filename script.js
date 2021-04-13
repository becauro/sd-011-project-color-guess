const circleContainer = document.getElementById('color-array');

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
  const circleArray = circleContainer.children;

  for (let i = 0; i < circleArray.length; i += 1) {
    const rgbString = getRandomRGBColorString();
    circleArray[i].style.backgroundColor = 'rgb' + rgbString;
  }
}

createOptions(6);
assignRandomColors();
