const balls = document.querySelectorAll('.ball');
const correctColor = document.querySelector('#rgb-color');
const ballContainer = document.querySelector('#ball-container');
const answer = document.querySelector('#answer');
const btnReset = document.querySelector('#reset-game');
const scoreText = document.querySelector('#score');
const resetScore = document.querySelector('#reset-score');
let score = 0;

const randomRgbColor = () => {
  let color1 = Math.round(Math.random() * 255);
  let color2 = Math.round(Math.random() * 255);
  let color3 = Math.round(Math.random() * 255);
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const ballColorGenerator = () => {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomRgbColor();
  }
};
ballColorGenerator();

const randomTextColor = () => {
  const randomColor = Math.round(Math.random() * 6);
  correctColor.innerText = balls[randomColor].style.backgroundColor;
};
randomTextColor();

// ballContainer.addEventListener('click', (event) => {
//   const ballSelected = event.target;
//   if (ballSelected.style.backgroundColor !== correctColor.innerText) {
//     answer.innerText = 'Errou! Tente novamente!';
//     if (score > 0) {
//       score -= 1;
//     }
//   }
//   if (ballSelected.style.backgroundColor === correctColor.innerText) {
//     answer.innerText = 'Acertou!';
//     score += 3;
//   }
//   scoreText.innerText = score;
//   ballColorGenerator();
//   randomTextColor();
// });

// btnReset.addEventListener('click', () => {
//   answer.innerText = 'Escolha uma cor';
//   ballColorGenerator();
//   randomTextColor();
// });

// resetScore.addEventListener('click', () => {
//   scoreText.innerText = 0;
// });
