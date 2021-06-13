const randomColor = () => {
  const coloredCircleList = document.getElementsByClassName('ball');
  for (let i = 0; i < coloredCircleList.length; i += 1) {
    const red = Math.ceil(Math.random() * 525);
    const green = Math.ceil(Math.random() * 525);
    const blue = Math.ceil(Math.random() * 525);
    coloredCircleList[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  return coloredCircleList;
};
randomColor();

const setRightAnswer = () => {
  const coloredCircleList = document.getElementsByClassName('ball');
  const rightAnswer = document.getElementById('rgb-color');
  console.log(coloredCircleList[Math.floor((Math.random() * coloredCircleList.length))]);
  const correctColorInnerHtml = coloredCircleList[Math.floor((Math.random() * coloredCircleList.length))];
  const fullRgbColor = correctColorInnerHtml.style.backgroundColor;
  rightAnswer.innerText = fullRgbColor.slice(3, fullRgbColor.length);
  return rightAnswer;
};
setRightAnswer();

// console.log(coloredCircleList);
