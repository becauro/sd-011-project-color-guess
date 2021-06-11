const balls = document.getElementsByClassName('ball');
balls.array.forEach(element => {
  const red = Math.ceil(Math.random() * 525);
  const green = Math.ceil(Math.random() * 525);
  const blue = Math.ceil(Math.random() * 525);
  element.style.backgroundColor = (red, green, blue);
});