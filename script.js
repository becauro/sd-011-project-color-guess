window.onload = function start(){
    const circles = document.querySelectorAll('.ball')

    for(let index = 0; index<circles.length; index +=1){
        const color1 = parseInt(Math.random()*255)
        const color2 = parseInt(Math.random()*255)
        const color3 = parseInt(Math.random()*255)
    
        circles[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`

    }


  const number = parseInt(Math.random()*6)
  const colorTarget = document.querySelector('#rgb-color')
  const colorSorted = circles[number].style.backgroundColor
  colorTarget.innerHTML = colorSorted

  const circleClick = document.querySelector('#colors')
  const result = document.querySelector('#answer')

circleClick.addEventListener('click', function(event){
  const colorSelected = event.target
  if(colorSelected.style.backgroundColor === colorSorted){
    result.innerText = 'Acertou!'
  } else {
    result.innerText = 'Errou! Tente novamente!'
  }
})
}

const buttonReset = document.querySelector('#reset-game')

buttonReset.addEventListener('click', function(){
  window.onload()
  const result = document.querySelector('#answer')
  result.innerText = 'Escolha uma cor'
})