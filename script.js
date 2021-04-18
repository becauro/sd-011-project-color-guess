const colorCodeElement = document.getElementById('rgb-color');

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function generateRandomRGBColor() {
  const randomR = randomRGBNumber();
  const randomG = randomRGBNumber();
  const randomB = randomRGBNumber();
  return `(${randomR}, ${randomG}, ${randomB})`;
}

colorCodeElement.textContent = generateRandomRGBColor();
