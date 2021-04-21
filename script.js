// Exercicio 4
let circulos = document.getElementsByClassName('ball');
for(let i=0; i<circulos.length; i++){
    let cor1 = Math.floor((Math.random()*100)+1);
    let cor2 = Math.floor((Math.random()*200)+1);
    let cor3 = Math.floor((Math.random()*300)+1);
    circulos[i].style.backgroundColor ='rgb('+cor1+','+cor2+','+cor3+')';
}
