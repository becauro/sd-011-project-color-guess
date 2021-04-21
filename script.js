let corInicial='rgb(168, 34, 1)';
document.getElementsByClassName('ball')[0].style.backgroundColor=corInicial;
let score=0;
document.getElementById('score').innerText=score;

// Exercicio 4 e 5
function criarCores(){
    let cores=[];
    let circulos = document.getElementsByClassName('ball');
    for(let i=1; i<circulos.length; i++){
        let cor1 = Math.floor((Math.random()*100)+1);
        let cor2 = Math.floor((Math.random()*200)+1);
        let cor3 = Math.floor((Math.random()*300)+1);
        circulos[i].style.backgroundColor ='rgb('+cor1+','+cor2+','+cor3+')';
        cores[i]='rgb('+cor1+', '+cor2+', '+cor3+')';
    }
}
criarCores();

let resposta = false;
let corComparar = 'rgb'+document.getElementById('rgb-color').innerText;

let click = document.getElementById('balls'); // Quando clico em algum O
click.addEventListener('click', function(e){
    let corEscolhida = e.target.style.backgroundColor;
    console.log('Cor Escolhida: '+corEscolhida);
    console.log('Cor Comparar: '+ corComparar);

    if(corEscolhida===corComparar){
        resposta=true;
        score+=3;
        document.getElementById('score').innerText=score;
    }
    let textAnswer = document.getElementById('answer');
    if(resposta){
        textAnswer.innerHTML='Acertou!';
        textAnswer.style.fontWeight='bold';
        resposta = false;
    }else{
        textAnswer.innerHTML='Errou! Tente novamente!';
        textAnswer.style.fontWeight='bold';
        resposta = false;
    }

})

//Exercicio 5
let buttonReset = document.getElementById('reset-game');
buttonReset.addEventListener('click', function(){
    let c1 = Math.floor((Math.random()*100)+1);
    let c2 = Math.floor((Math.random()*200)+1);
    let c3 = Math.floor((Math.random()*300)+1);
    document.getElementById('rgb-color').innerText='rgb('+c1+', '+c2+', '+c3+')';
    document.getElementsByClassName('ball')[0].style.backgroundColor=document.getElementById('rgb-color').innerText;
    corComparar = document.getElementById('rgb-color').innerText;
    criarCores();
    document.getElementById('answer').innerText='Escolha uma cor';
});

//Exercicio 7

