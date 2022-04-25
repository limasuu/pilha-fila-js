const enfilarBotao= document.querySelector("#botao-enfilar");
const desenfilarBotao= document.querySelector("#botao-desenfilar");
const esvaziarBotao= document.querySelector("#botao-esvaziar");
const elementoFilaInput= document.querySelector("#elemento-fila");
const elementosFilaDiv= document.querySelector("#elementos-fila");

let elementos;
const MAX_ELEMENTOS= 10;

iniciar();

function iniciar(){
    elementos= [];
    limparInput();
    inativarBotao(desenfilarBotao);
    inativarBotao(esvaziarBotao);
}


function limparInput(){
    elementoFilaInput.value= "";
}

function inativarBotao(botao){

    const nome= botao.innerHTML;
    botao.classList.add("inativo");
    botao.classList.add(`inativo-${nome}`);
}

function ativarBotao(botao){
    const nome= botao.innerHTML;
    botao.classList.remove("inativo");
    botao.classList.remove(`inativo-${nome}`);
}
