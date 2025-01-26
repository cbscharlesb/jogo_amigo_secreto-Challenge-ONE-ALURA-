//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
//let quantidadeDeNomesLimite = 5;

function adicionarAmigo() {
    console.log('o botão foi clicado');
    amigo = document.querySelector('input').value;
    
    let elementosNaLista = listaAmigos.length;
    elementosNaLista = amigo;
        if (elementosNaLista == '') {
            alert('Por favor, insira um nome!');
        } else {
            listaAmigos.push(amigo);
            nomeNaTela();
            limparCampo();
            return elementosNaLista;    
            }       
}
console.log(listaAmigos);

function exibirNomeNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function nomeNaTela (){
    exibirNomeNaTela('ul', listaAmigos);
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';  
}

function sortearAmigo() {
    if (listaAmigos.length < 1){
        alert('Por favor, digite dois amigos ou mais!')}
    else{
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceSorteado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
        
    }
    console.log('botão 2 clicado');
    
}








 

