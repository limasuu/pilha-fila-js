const empilharBotao= document.querySelector("#botao-empilhar");
const desempilharBotao= document.querySelector("#botao-desempilhar");
const esvaziarBotao= document.querySelector("#botao-esvaziar");
const elementoPilhaInput= document.querySelector("#elemento-pilha");
const elementosPilhaDiv= document.querySelector("#elementos-pilha");

let elementos;
const MAX_ELEMENTOS= 10;

iniciar();

function iniciar(){
    elementos= [];
    limparInput();
    inativarBotao(desempilharBotao);
    inativarBotao(esvaziarBotao);
}


function limparInput(){
    elementoPilhaInput.value= "";
}

function inativarBotao(botao){

    const nome= botao.innerHTML;
    botao.classList.add("inativo");
    botao.classList.add(`inativo-${nome}`);
}
