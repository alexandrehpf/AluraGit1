let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificaConsole(){
    console.log('O botão foi clicado');
}

function alertaJS(){
    alert('Eu amo js');
}

function promptJS(){
    let cidade = prompt('Digite um nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaJS(){
    let numero1 = prompt('Informe o primeiro número:');
    let numero2 = prompt('Informe o segundo número:');
    let soma = parseInt(numero1) + parseInt(numero2);
    alert(`O resultado da soma dos numeros é ${soma}`);
    
}