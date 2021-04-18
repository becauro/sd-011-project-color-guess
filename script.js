const colorCodeElement = document.getElementById('rgb-color');
const colorOptionsContainerElement = document.getElementById('color-options');

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function generateRandomRGBColor() {
  const randomR = randomRGBNumber();
  const randomG = randomRGBNumber();
  const randomB = randomRGBNumber();
  return `(${randomR}, ${randomG}, ${randomB})`;
}

function generateColorOptions() {
  const numberOfOptions = 6;
  const correctGuessIndex = Math.floor(Math.random() * numberOfOptions);
  const options = [];
  for (let index = 0; index < numberOfOptions; index += 1) {
    if (index === correctGuessIndex) {
      options[index] = colorCodeElement.textContent;
    } else {
      options[index] = generateRandomRGBColor();
    }
  }
  return options;
}

function makeColorOptionsElements(rgbCodes) {
  return rgbCodes.map((rgbCode) => {
    const element = document.createElement('div');
    element.classList.add('ball');
    element.style.backgroundColor = `rgb${rgbCode}`;
    return element;
  });
}

function appendColorOptionsElements(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    colorOptionsContainerElement.appendChild(elements[index]);
  }
}

colorCodeElement.textContent = generateRandomRGBColor();
appendColorOptionsElements(makeColorOptionsElements(generateColorOptions()));
