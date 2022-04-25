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

enfilarBotao.addEventListener('click', () => {

    if(elementoFilaInput.value === ""){
        elementoFilaInput.classList.add("obrigatorio");

        setTimeout(() => {
            elementoFilaInput.classList.remove("obrigatorio");
        }, 2000);

    }else{    
        if(elementos.length !== MAX_ELEMENTOS){

            elementos.push(elementoFilaInput.value);

            const novo= document.createElement("div");
            novo.classList.add("enfilado");
            novo.innerHTML= elementoFilaInput.value;
            elementosFilaDiv.prepend(novo);

            limparInput();

            ativarBotao(desenfilarBotao);
            ativarBotao(esvaziarBotao);
            
            if(elementos.length === MAX_ELEMENTOS){
                elementosFilaDiv.classList.add("elementos-cheio");
                inativarBotao(enfilarBotao);
                elementoFilaInput.classList.add("sem-entradas");
                elementoFilaInput.disabled= true;
            }
        }    
    }
});


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
