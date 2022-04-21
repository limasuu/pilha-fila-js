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

empilharBotao.addEventListener('click', () => {

    if(elementoPilhaInput.value === ""){
        elementoPilhaInput.classList.add("obrigatorio");

        setTimeout(() => {
            elementoPilhaInput.classList.remove("obrigatorio");
        }, 2000);

    }else{    
        if(elementos.length !== MAX_ELEMENTOS){

            elementos.push(elementoPilhaInput.value);

            const novo= document.createElement("div");
            novo.classList.add("empilhado");
            novo.innerHTML= elementoPilhaInput.value;
            elementosPilhaDiv.prepend(novo);

            limparInput();

            ativarBotao(desempilharBotao);
            ativarBotao(esvaziarBotao);
            
            if(elementos.length === MAX_ELEMENTOS){
                elementosPilhaDiv.classList.add("elementos-cheio");
                inativarBotao(empilharBotao);
                elementoPilhaInput.classList.add("sem-entradas");
                elementoPilhaInput.disabled= true;
            }
        }    
    }
});

            
esvaziarBotao.addEventListener('click', () => {
    elementosPilhaDiv.innerHTML= "";
    iniciar();
    permitirInsercao();
});

function limparInput(){
    elementoPilhaInput.value= "";
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

function permitirInsercao(){
    if(elementosPilhaDiv.classList.contains("elementos-cheio")){
        elementosPilhaDiv.classList.remove("elementos-cheio");
        ativarBotao(empilharBotao);
        elementoPilhaInput.classList.remove("sem-entradas");
        elementoPilhaInput.disabled= false;   
    }    
}
