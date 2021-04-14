window.onload = function (){
    const circles = document.querySelectorAll('.ball')

    for(let index = 0; index<circles.length; index +=1){
        const color1 = parseInt(Math.random()*255)
        const color2 = parseInt(Math.random()*255)
        const color3 = parseInt(Math.random()*255)
    
        circles[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
    }
}
