const corInicial = 'rgb(168, 34, 1)';
document.getElementsByClassName('ball')[0].style.backgroundColor = corInicial;
let score = 0;
document.getElementById('score').innerText = score;

// Exercicio 4 e 5
function criarCores() {
  const circulos = document.getElementsByClassName('ball');
  for (let i = 1; i < circulos.length; i += 1) {
    const cor1 = Math.floor((Math.random() * 100) + 1);
    const cor2 = Math.floor((Math.random() * 200) + 1);
    const cor3 = Math.floor((Math.random() * 300) + 1);
    circulos[i].style.backgroundColor = `rgb(${cor1},${cor2},${cor3})`;
  }
}

criarCores();

let resposta = false;
let corComparar = `rgb${document.getElementById('rgb-color').innerText}`;

const click = document.getElementById('balls'); // Quando clico em algum O
click.addEventListener('click', (e) => {
  const corEscolhida = e.target.style.backgroundColor;
  if (corEscolhida === corComparar) { resposta = true; }
  const textAnswer = document.getElementById('answer');
  if (resposta) {
    textAnswer.innerHTML = 'Acertou!';
    textAnswer.style.fontWeight = 'bold';
    resposta = false;
    score += 3;
    document.getElementById('score').innerText = score;
  } else {
    textAnswer.innerHTML = 'Errou! Tente novamente!';
    textAnswer.style.fontWeight = 'bold';
    resposta = false;
  }
});

// Resetando
// Exercicio 5
const getBallStyle = document.getElementsByClassName('ball')[0];
const buttonReset = document.getElementById('reset-game');
buttonReset.addEventListener('click', () => {
  const c1 = Math.floor((Math.random() * 100) + 1);
  const c2 = Math.floor((Math.random() * 200) + 1);
  const c3 = Math.floor((Math.random() * 300) + 1);
  document.getElementById('rgb-color').innerText = `rgb(${c1}, ${c2}, ${c3})`;
  getBallStyle.style.backgroundColor = document.getElementById('rgb-color').innerText;
  corComparar = document.getElementById('rgb-color').innerText;
  criarCores();
  document.getElementById('answer').innerText = 'Escolha uma cor';
});
