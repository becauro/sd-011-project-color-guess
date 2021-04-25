const rgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const opt = document.querySelector('.options');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const arrColors = [];

/** Consultei uma função do site para gerar cores hexadecimais aleatórias.
 * Source: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */
function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `(${r}, ${g}, ${b})`;
}

for (let i = 0; i < balls.length; i += 1) {
  arrColors[i] = generateColor();
}

function getRandomInteger() {
  return Math.floor(Math.random() * 6);
}

function insertColors() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb` + arrColors[i];
  }
  rgbColor.innerText = arrColors[getRandomInteger()];
}

insertColors();

opt.addEventListener('click', (event) => {
  if ((event.target.tagName = 'div')) {
    const color = 'rgb' + rgbColor.innerText;
    if (event.target.style.backgroundColor === color) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  }
});

reset.addEventListener('click', () => {
  window.location.reload();
});
