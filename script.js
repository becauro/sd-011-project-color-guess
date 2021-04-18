const colorCodeElement = document.getElementById('rgb-color');
const colorOptionsContainerElement = document.getElementById('color-options');
const messageElement = document.getElementById('answer');

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function generateRandomRGBColor() {
  const randomR = randomRGBNumber();
  const randomG = randomRGBNumber();
  const randomB = randomRGBNumber();
  return `(${randomR}, ${randomG}, ${randomB})`;
}

function pickColor(event) {
  const selectedOption = event.target;
  const selectedColor = selectedOption.style.backgroundColor;
  const correctColor = `rgb${colorCodeElement.textContent}`;
  if (selectedColor === correctColor) {
    messageElement.textContent = 'Acertou!';
  } else {
    messageElement.textContent = 'Errou! Tente novamente!';
  }
}

function generateColorOptions() {
  const numberOfOptions = 6;
  const correctGuessIndex = Math.floor(Math.random() * numberOfOptions);
  for (let index = 0; index < numberOfOptions; index += 1) {
    const element = document.createElement('div');
    element.classList.add('ball');
    element.addEventListener('click', pickColor);
    if (index === correctGuessIndex) {
      element.style.backgroundColor = `rgb${colorCodeElement.textContent}`;
    } else {
      element.style.backgroundColor = `rgb${generateRandomRGBColor()}`;
    }
    colorOptionsContainerElement.appendChild(element);
  }
}

colorCodeElement.textContent = generateRandomRGBColor();
generateColorOptions();
