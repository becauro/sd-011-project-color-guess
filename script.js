function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let msg = `rgb(${r}, ${g}, ${b})`;
  return msg;
}

function ballColor() {
  const color = document.getElementsByClassName('ball');

  for (let i = 0; i < color.length; i += 1) {
    color[i].style.backgroundColor = randomColor();
  }
}

function checkRepeatColor() {
  const color = document.getElementsByClassName('ball');

  for (let i = 0; i < color.length; i += 1) {
    for (let j = 1; j < color.length; j += 1) {
      if (color[i].style.backgroundColor === color[j].style.backgroundColor) {
        color[i].style.backgroundColor = randomColor();
      }
    }
  }
}

ballColor();
checkRepeatColor();
