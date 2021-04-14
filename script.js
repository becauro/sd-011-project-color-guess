const color = document.getElementsByClassName('ball');

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const msg = `rgb(${r}, ${g}, ${b})`;
  return msg;
}

function ballColor() {
  color[0].style.backgroundColor = 'rgb(168, 34, 1)';

  for (let i = 1; i < color.length; i += 1) {
    color[i].style.backgroundColor = randomColor();
  }
}

function checkRepeatColor() {
  for (let i = 0; i < color.length; i += 1) {
    let j = 1;
    if (color[i].style.backgroundColor === color[j].style.backgroundColor) {
      color[i].style.backgroundColor = randomColor();
    }
    j += 1;
  }
}

function checkCorrect() {
  const rgbColor = document.getElementById('rgb-color');
  const rgbColorComplete = `rgb${rgbColor.innerText}`;
  let p = document.getElementById('answer');

  for (let i = 0; i < color.length; i += 1){
    color[i].addEventListener('click', () => {
      if (color[i].style.backgroundColor === rgbColorComplete) {
        p.innerText = 'Acertou!';
      } else {
        p.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

ballColor();
checkRepeatColor();
checkCorrect();
