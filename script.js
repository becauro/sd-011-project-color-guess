const balls = document.querySelectorAll('.ball');

// Função para gerar números RGB aleatórios;
function randomRGBNumber() {
  const RGB = Math.floor(Math.random() * 255 + 1);

  return RGB;
}

// Função que cria um código RGB;
function generateRGB() {
  let RGBColor = 'rgb';
  RGBColor += `(${randomRGBNumber()}`;
  RGBColor += `, ${randomRGBNumber()}`;
  RGBColor += `, ${randomRGBNumber()})`;

  return RGBColor;
}

// Função que adiciona RGB à classe ball

function addRGBColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRGB();
  }
}

window.onload = addRGBColor;
