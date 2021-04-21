// Exercicio 4 e 5
let cores=[];
let circulos = document.getElementsByClassName('ball');
circulos[0].style.backgroundColor='rgb'+document.getElementById('rgb-color').innerText;

for(let i=1; i<circulos.length; i++){
    let cor1 = Math.floor((Math.random()*100)+1);
    let cor2 = Math.floor((Math.random()*200)+1);
    let cor3 = Math.floor((Math.random()*300)+1);
    circulos[i].style.backgroundColor ='rgb('+cor1+','+cor2+','+cor3+')';
    cores[i]='rgb('+cor1+', '+cor2+', '+cor3+')';
    console.log(cores[i]);
}

let resposta = false;
let corComparar = 'rgb'+document.getElementById('rgb-color').innerText;
console.log('Cor comparar:'+corComparar);

let click = document.getElementById('balls'); // Quando clico em algum O
click.addEventListener('click', function(e){
    let corEscolhida = e.target.style.backgroundColor;
    if(corEscolhida===corComparar){
        resposta=true;
    }

    let textAnswer = document.getElementById('answer');
    if(resposta){
        textAnswer.innerHTML='Acertou!';
        textAnswer.style.fontWeight='bold';
    }else{
        textAnswer.innerHTML='Errou! Tente novamente!';
        textAnswer.style.fontWeight='bold';
    }

})
