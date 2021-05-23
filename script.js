// itens HTML capturados
const colorToGuess = document.querySelector('#rgb-color');
const ul = document.querySelector('ul');
const scoreElement = document.querySelector('#score');

// gerar random rgb
const randomRgbColor = () => {
  const RGBColor1 = (Math.floor(Math.random() * 256));
  const RGBColor2 = (Math.floor(Math.random() * 256));
  const RGBColor3 = (Math.floor(Math.random() * 256));
  return (`${RGBColor1}, ${RGBColor2}, ${RGBColor3}`);
};

// func para criar elementos
const createElement = (type, className) => {
  const element = document.createElement(type);
  element.className = className;
  return element;
};

// pontuacao inicial que é atualizada a cada jogada
let level = 1;

// insere o level no HTML
const generateScore = () => {
  scoreElement.innerText = level;
};

// variável que irá armazenar a resposta
let rightBallColor;

// remove as cores
const removeBalls = () => {
  const current = document.querySelectorAll('.ball');
  for (let index = 0; index < current.length; index += 1) {
    ul.removeChild(current[index]);
  }
};

// gera e insere opção de core
const insertColors = () => {
  const element = createElement('li', 'ball');
  element.style.backgroundColor = `rgb(${randomRgbColor()})`;
  ul.appendChild(element);
};

// gera o level do game e sua resposta
const startGame = () => {
  // Remove as cores antigas para gerar um novo jogo
  removeBalls();
  // Gera o número de cores de acordo com level
  for (let index = 0; index < level; index += 1) {
    insertColors();
  }
  const allBalls = document.querySelectorAll('.ball');
  const rightBall = allBalls[Math.floor(Math.random() * level)]; // sorteia a resposta certa
  rightBallColor = rightBall.style.backgroundColor; // armazena a resposta correta
  colorToGuess.innerText = rightBallColor.replace('rgb', 'RGB: '); // insere o rgb da resposta
};

const verifyColor = (event) => {
  if (event.target.style.backgroundColor === rightBallColor) {
    alert('Boa escolha!');
    level += 1;
    generateScore();
    startGame();
  } else {
    alert('Você perdeu =`(');
    window.location.reload();
  }
};

ul.addEventListener('click', (event) => {
  if (event.target.localName === 'li') {
    verifyColor(event);
  }
});

window.onload = () => {
  startGame();
  generateScore();
};
