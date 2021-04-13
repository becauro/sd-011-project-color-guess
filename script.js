let colorList = [];

function colorGen(n) {
  for (let index = 0; index < n; index += 1) {
    let color1 = Math.floor(Math.random() * 255) + 1;
    let color2 = Math.floor(Math.random() * 255) + 1;
    let color3 = Math.floor(Math.random() * 255) + 1;
    let randColor = 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')';
    colorList.push(randColor);
  }
  return colorList
}


function fillColorOptions() {
  colorGen(6);
  let colorBalls = document.getElementsByClassName('ball');
  for (let index = 0; index < colorList.length; index += 1) {
    colorBalls[index].style.backgroundColor = colorList[index];
    
  }
}
fillColorOptions();