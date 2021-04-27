const ball = document.querySelectorAll('.ball');

for (let index = 0; index < ball.length; index += 1) {
  let red = Math.random() * 255 + 1;
  let green = Math.random() * 255 + 1;
  let blue = Math.random() * 255 + 1;

  ball[index].style.background = `rgb(${red}, ${green}, ${blue}`;
}

