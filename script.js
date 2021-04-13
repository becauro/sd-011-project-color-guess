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
